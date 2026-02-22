import { useState, useEffect, useCallback, useRef } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface RecentTopic {
    slug: string;
    title: string;
    chapterTitle: string;
    level: string;
    openedAt: number;
}

export interface LocalProgress {
    recentTopics: RecentTopic[];
    completedTopics: string[];
    quizScores: Record<string, number>;
    notes: Record<string, string>;
    downloadedTopics: string[];
    studyTimeMinutes: number;
    lastActivityDate: string | null;    // YYYY-MM-DD
    currentStreak: number;
    bestStreak: number;                 // Track historical best
}

const KEY = 'biobyte_progress_v4';

const defaultProgress = (): LocalProgress => ({
    recentTopics: [],
    completedTopics: [],
    quizScores: {},
    notes: {},
    downloadedTopics: [],
    studyTimeMinutes: 0,
    lastActivityDate: null,
    currentStreak: 0,
    bestStreak: 0,
});

const loadLocal = (): LocalProgress => {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return defaultProgress();
        const data = JSON.parse(raw);
        // Robustness: ensure bestStreak exists
        return { ...defaultProgress(), ...data };
    } catch {
        return defaultProgress();
    }
};

const saveLocal = (p: LocalProgress) => {
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { }
};

export const useLocalProgress = () => {
    const [progress, setProgress] = useState<LocalProgress>(loadLocal);
    const [user, setUser] = useState<User | null>(null);
    const [isSyncing, setIsSyncing] = useState(false);
    const isInitialMount = useRef(true);

    // 1. Auth Sync
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (u) => {
            setUser(u);
            if (u) {
                setIsSyncing(true);
                const docRef = doc(db, 'users', u.uid);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    const cloudData = docSnap.data() as LocalProgress;
                    const merged: LocalProgress = {
                        ...cloudData,
                        studyTimeMinutes: Math.max(cloudData.studyTimeMinutes, progress.studyTimeMinutes),
                        completedTopics: Array.from(new Set([...cloudData.completedTopics, ...progress.completedTopics])),
                        quizScores: { ...cloudData.quizScores, ...progress.quizScores },
                        notes: { ...cloudData.notes, ...progress.notes },
                        currentStreak: Math.max(cloudData.currentStreak, progress.currentStreak),
                        bestStreak: Math.max(cloudData.bestStreak || 0, progress.bestStreak || 0)
                    };
                    setProgress(merged);
                    await setDoc(docRef, merged);
                } else {
                    await setDoc(docRef, progress);
                }
                setIsSyncing(false);
            }
        });
        return unsubscribe;
    }, []);

    useEffect(() => { saveLocal(progress); }, [progress]);

    useEffect(() => {
        if (isInitialMount.current) { isInitialMount.current = false; return; }
        if (user) {
            const timer = setTimeout(async () => {
                try { await setDoc(doc(db, 'users', user.uid), progress); } catch (e) { }
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [progress, user]);

    // ── Streak Engine ──
    const updateStreak = useCallback(() => {
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        
        setProgress(prev => {
            if (prev.lastActivityDate === todayStr) return prev;

            let newStreak = prev.currentStreak;
            
            if (prev.lastActivityDate) {
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                const yesterdayStr = yesterday.toISOString().split('T')[0];

                if (prev.lastActivityDate === yesterdayStr) {
                    newStreak += 1;
                } else {
                    newStreak = 1; // Reset if gap > 1 day
                }
            } else {
                newStreak = 1; // First time
            }

            return {
                ...prev,
                lastActivityDate: todayStr,
                currentStreak: newStreak,
                bestStreak: Math.max(newStreak, prev.bestStreak || 0)
            };
        });
    }, []);

    const addRecentTopic = useCallback((topic: Omit<RecentTopic, 'openedAt'>) => {
        updateStreak();
        setProgress(prev => {
            const filtered = prev.recentTopics.filter(t => t.slug !== topic.slug);
            return { ...prev, recentTopics: [{ ...topic, openedAt: Date.now() }, ...filtered].slice(0, 8) };
        });
    }, [updateStreak]);

    const markTopicCompleted = useCallback((slug: string) => {
        updateStreak();
        setProgress(prev => ({
            ...prev,
            completedTopics: prev.completedTopics.includes(slug) ? prev.completedTopics : [...prev.completedTopics, slug]
        }));
    }, [updateStreak]);

    const saveQuizScore = useCallback((id: string, score: number) => {
        updateStreak();
        setProgress(prev => ({ ...prev, quizScores: { ...prev.quizScores, [id]: score } }));
    }, [updateStreak]);

    const addStudyTime = useCallback((minutes: number) => {
        updateStreak();
        setProgress(prev => ({ ...prev, studyTimeMinutes: prev.studyTimeMinutes + minutes }));
    }, [updateStreak]);

    const logout = async () => {
        await auth.signOut();
        setProgress(defaultProgress());
        localStorage.removeItem(KEY);
    };

    return { 
        progress, user, isSyncing,
        addRecentTopic, markTopicCompleted, saveQuizScore, addStudyTime, logout 
    };
};