import ss1Data from './SS1_biology.json';
import ss2Data from './SS2_biology.json';
import ss3Data from './SS3_biology.json';

export interface QuizQuestion {
  question: string;
  options: string[] | Record<string, string>;
  answer: string;
  explanation: string;
}

export interface Subtopic {
  subtopic: string;
  description: string;
  content: string;
  quiz: QuizQuestion[];
  insights?: string[];
}

export interface LessonData {
  term: string;
  week: number;
  topic: string;
  subtopics: Subtopic[];
}

export interface Topic {
  title: string;
  slug: string; // We'll use subtopic name as slug
  data: Subtopic;
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Theme {
  id: string;
  title: string;
  level: 'SS1' | 'SS2' | 'SS3';
  chapters: Chapter[];
}

const processLevelData = (data: any[], level: 'SS1' | 'SS2' | 'SS3'): Theme[] => {
  const themes: Theme[] = [];
  
  data.forEach((item, index) => {
    // Each item in JSON is a "week" with a "topic" and "subtopics"
    // We can group by Term if we want, or just treat each JSON item as a Chapter
    
    // Find or create theme for this term
    let theme = themes.find(t => t.title === item.term);
    if (!theme) {
      theme = {
        id: `theme-${level}-${themes.length}`,
        title: item.term,
        level: level,
        chapters: []
      };
      themes.push(theme);
    }
    
    // Each JSON item has one "topic", which we'll treat as a Chapter
    const chapter: Chapter = {
      id: `chap-${level}-${index}`,
      title: `${item.topic} (Week ${item.week})`,
      topics: item.subtopics.map((st: any, sti: number) => ({
        title: st.subtopic,
        slug: `${level}-w${item.week}-t${index}-s${sti}`,
        data: st
      }))
    };
    
    theme.chapters.push(chapter);
  });
  
  return themes;
};

export const syllabus: Theme[] = [
  ...processLevelData(ss1Data, 'SS1'),
  ...processLevelData(ss2Data, 'SS2'),
  ...processLevelData(ss3Data, 'SS3'),
];
