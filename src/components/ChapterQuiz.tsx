import React, { useState } from 'react';
import type { Topic } from '../data/syllabus';
import { ChevronRight, Trophy, ArrowLeft, X, CheckCircle2, AlertCircle } from 'lucide-react';

interface ChapterQuizProps {
  topic: Topic;
  onExit: () => void;
}

const ChapterQuiz: React.FC<ChapterQuizProps> = ({ topic, onExit }) => {
  const questions = topic.data.quiz || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [viewMode, setViewMode] = useState<'quiz' | 'results' | 'review'>('quiz');

  const currentQ = questions[currentIndex];

  const next = () => {
    if (currentIndex + 1 < questions.length) setCurrentIndex(currentIndex + 1);
    else setViewMode('results');
  };

  const getOptions = (q: any): string[] => {
    if (Array.isArray(q.options)) return q.options;
    if (typeof q.options === 'object') {
      return Object.entries(q.options).map(([key, val]) => `${key}: ${val}`);
    }
    return [];
  };

  const isCorrect = (q: any, idx: number) => {
    const options = getOptions(q);
    const chosen = options[idx];
    const correctAns = q.answer;
    if (chosen === correctAns) return true;
    if (correctAns && correctAns.length === 1 && String.fromCharCode(65 + idx) === correctAns) return true;
    if (chosen && (chosen.startsWith(correctAns + ':') || chosen.startsWith(correctAns + ' '))) return true;
    return false;
  };

  const score = () => questions.reduce((a, q, i) => a + (isCorrect(q, userAnswers[i]) ? 1 : 0), 0);

  if (questions.length === 0) return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle size={48} className="text-gray-300 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">No Quiz Available</h3>
      <p className="text-gray-500 mb-6">This topic doesn't have practice questions yet.</p>
      <button className="btn btn-secondary" onClick={onExit}>Go Back</button>
    </div>
  );

  /* ── RESULTS ─────────────────────────────────────────────── */
  if (viewMode === 'results') {
    const s = score();
    const pct = Math.round((s / questions.length) * 100);
    return (
      <div className="fixed inset-0 z-[100] bg-gray-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
        <div className="bg-white w-full max-w-md rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
            <Trophy size={32} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-1">{pct}%</h2>
          <p className="text-gray-500 font-medium mb-8">Score: {s} of {questions.length} correct</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
             <div className="p-4 bg-gray-50 rounded-lg">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Correct</span>
                <span className="text-xl font-bold text-gray-900">{s}</span>
             </div>
             <div className="p-4 bg-gray-50 rounded-lg">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total</span>
                <span className="text-xl font-bold text-gray-900">{questions.length}</span>
             </div>
          </div>

          <div className="space-y-3">
             <button className="btn btn-primary w-full py-3" onClick={() => setViewMode('review')}>Review Explanations</button>
             <button className="btn btn-secondary w-full py-3" onClick={onExit}>Finish Session</button>
          </div>
        </div>
      </div>
    );
  }

  /* ── REVIEW ──────────────────────────────────────────────── */
  if (viewMode === 'review') {
    return (
      <div className="fixed inset-0 z-[100] bg-gray-50 flex flex-col animate-in fade-in duration-300">
        <header className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0">
          <h3 className="font-bold text-gray-900">Quiz Review</h3>
          <button onClick={() => setViewMode('results')} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-900"><X size={18}/></button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 max-w-3xl mx-auto w-full">
           {questions.map((q, idx) => {
             const correct = isCorrect(q, userAnswers[idx]);
             return (
               <div key={idx} className={`p-6 bg-white rounded-xl border shadow-sm ${correct ? 'border-green-200' : 'border-red-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                     <span className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold ${correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                       {idx + 1}
                     </span>
                     <span className={`text-xs font-bold uppercase tracking-wider ${correct ? 'text-green-600' : 'text-red-600'}`}>
                       {correct ? 'Correct' : 'Incorrect'}
                     </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg mb-4">{q.question}</p>
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-900 leading-relaxed">
                     <span className="font-bold block mb-1">Key Insight:</span>
                     {q.explanation}
                  </div>
               </div>
             );
           })}
        </main>
      </div>
    );
  }

  /* ── ACTIVE QUIZ ─────────────────────────────────────────── */
  const options = getOptions(currentQ);
  const progress = ((currentIndex + 1) / questions.length) * 100;
  
  return (
    <div className="fixed inset-0 z-[110] bg-white flex flex-col animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <header className="h-14 border-b border-gray-200 px-4 md:px-6 flex items-center justify-between sticky top-0 bg-white z-20">
         <button onClick={onExit} className="p-2 -ml-2 text-gray-400 hover:text-gray-900"><ArrowLeft size={20}/></button>
         <div className="text-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Practice Quiz</h3>
            <p className="text-sm font-bold text-gray-900">Topic Check</p>
         </div>
         <div className="w-10" />
      </header>

      {/* Progress */}
      <div className="h-1 bg-gray-100 w-full">
         <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Question */}
      <main className="flex-1 overflow-y-auto p-6 md:p-12 relative">
         <div className="max-w-2xl mx-auto pb-24">
            <span className="text-xs font-bold text-gray-400 mb-4 block">Question {currentIndex + 1} of {questions.length}</span>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-normal mb-8">{currentQ.question}</h2>
            
            <div className="space-y-3">
               {options.map((opt, idx) => {
                  const isSelected = userAnswers[currentIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setUserAnswers(p => ({ ...p, [currentIndex]: idx }))}
                      className={`
                        w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 group
                        ${isSelected 
                          ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600 shadow-sm' 
                          : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
                        }
                      `}
                    >
                       <span className={`
                         w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-colors
                         ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-white'}
                       `}>
                          {String.fromCharCode(65 + idx)}
                       </span>
                       <span className={`text-sm font-medium ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>{opt}</span>
                    </button>
                  );
               })}
            </div>
         </div>
      </main>

      {/* Footer Navigation */}
      <footer className="h-16 border-t border-gray-200 px-6 flex items-center justify-between shrink-0 bg-gray-50">
         <span className="text-xs font-bold text-gray-400">Step {currentIndex + 1} / {questions.length}</span>
         <button
           className="btn btn-primary px-8 py-2.5 rounded-full"
           onClick={next}
           disabled={userAnswers[currentIndex] === undefined}
         >
           {currentIndex + 1 < questions.length ? 'Next' : 'Finish'} <ChevronRight size={16} />
         </button>
      </footer>
    </div>
  );
};

export default ChapterQuiz;