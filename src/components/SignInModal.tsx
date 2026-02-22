import React, { useState } from 'react';
import { X, WifiOff } from 'lucide-react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';

interface SignInModalProps {
    isOpen: boolean;
    online: boolean;
    onClose: () => void;
}

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, online, onClose }) => {
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            // 1. Try Popup first (Fastest experience)
            await signInWithPopup(auth, googleProvider);
            onClose();
        } catch (error: any) {
            console.warn("Auth: Popup blocked or failed, attempting redirect...", error.code);
            
            // 2. Fallback to Redirect if Popup is blocked or fails
            if (error.code === 'auth/popup-blocked' || error.code === 'auth/cancelled-popup-request') {
                try {
                    await signInWithRedirect(auth, googleProvider);
                } catch (err) {
                    console.error("Auth: Redirect also failed", err);
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        }
    };

    return (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
            <div className="bg-[var(--bg-surface)] w-full max-w-sm rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between p-4 border-b border-[var(--border-base)]">
                    <h3 className="font-bold text-[var(--text-main)]">Sign In</h3>
                    <button onClick={onClose} className="p-1 hover:bg-[var(--bg-app)] rounded transition-colors text-[var(--text-muted)]"><X size={18} /></button>
                </div>
                
                <div className="p-6 md:p-8 space-y-4">
                    <button 
                        onClick={handleGoogleSignIn}
                        disabled={loading || !online}
                        className="w-full flex items-center justify-center gap-3 py-3.5 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-xl hover:border-[var(--brand)] text-sm font-black uppercase tracking-widest text-[var(--text-main)] transition-all active:scale-[0.98] disabled:opacity-50 shadow-sm"
                    >
                        <GoogleIcon /> {loading ? 'Authorizing...' : 'Connect Google'}
                    </button>
                    
                    {!online && (
                        <div className="p-3 bg-amber-500/10 text-amber-600 text-[10px] font-bold uppercase tracking-widest rounded-xl flex items-center gap-2 border border-amber-500/20">
                            <WifiOff size={14} /> Internet Required
                        </div>
                    )}

                    <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[var(--border-base)]"></div></div>
                        <div className="relative flex justify-center text-[9px] uppercase font-black tracking-[0.2em]"><span className="bg-[var(--bg-surface)] px-2 text-[var(--text-muted)]">Cloud Continuity</span></div>
                    </div>

                    <p className="text-center text-[10px] text-[var(--text-muted)] leading-relaxed uppercase font-black tracking-widest">
                        Data is synced instantly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;