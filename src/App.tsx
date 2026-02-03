import React, { useState, useEffect, useMemo } from 'react';
import { 
  Brain, 
  Trophy, 
  BookOpen, 
  Dna,
  Trees,
  Activity,
  Microscope,
  Leaf,
  Timer,
  Award,
  BarChart3,
  RefreshCw,
  Lightbulb,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { questionBank, type Question } from './data/questions';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const categories = useMemo(() => ['All', ...new Set(questionBank.map(q => q.category))], []);

  useEffect(() => {
    let qs = selectedCategory === 'All' ? [...questionBank] : questionBank.filter(q => q.category === selectedCategory);
    qs = qs.sort(() => Math.random() - 0.5);
    setShuffledQuestions(qs);
    resetStats();
  }, [selectedCategory]);

  const resetStats = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowAnswer(false);
    setIsFinished(false);
    setStreak(0);
    setHighestStreak(0);
    setStartTime(Date.now());
    setUserAnswers([]);
  };

  const handleNext = (wasCorrect: boolean) => {
    if (wasCorrect) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
      setHighestStreak(h => Math.max(h, streak + 1));
    } else {
      setStreak(0);
    }
    
    setUserAnswers([...userAnswers, wasCorrect]);

    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin text-blue-600">
          <RefreshCw size={48} />
        </div>
      </div>
    );
  }

  const currentQ = shuffledQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation / Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.reload()}>
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
              <Brain className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-800 tracking-tight leading-none">BIOMASTER PRO</h1>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mt-1">Competition Suite</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-lg border border-orange-100">
                <Timer className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-orange-700">{Math.floor(timeTaken / 60)}:{(timeTaken % 60).toString().padStart(2, '0')}</span>
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                <BarChart3 className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-bold text-blue-700">Streak: {streak}</span>
             </div>
          </div>

          <button 
            onClick={resetStats}
            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Restart Session"
          >
            <RefreshCw size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-6 md:py-10">
        {!isFinished ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Stats - Desktop */}
            <aside className="hidden lg:block lg:col-span-3 space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Categories</h3>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setSelectedCategory(cat)} 
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-blue-600 text-white shadow-blue-200 shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-5 text-white shadow-xl">
                <Award className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-70">Best Streak</h3>
                <p className="text-3xl font-black">{highestStreak}</p>
              </div>
            </aside>

            {/* Quiz Section */}
            <div className="lg:col-span-9 space-y-6">
              {/* Progress Container */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-800">{currentQuestionIndex + 1}</span>
                    <span className="text-slate-400 font-bold uppercase text-[10px] mt-1 tracking-wider">of {shuffledQuestions.length} questions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mastery</p>
                      <p className="text-lg font-black text-blue-600">{Math.round((score / Math.max(1, currentQuestionIndex)) * 100)}%</p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-700 ease-out rounded-full" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                   <Microscope size={180} />
                </div>
                <div className="absolute -bottom-10 -left-10 p-8 opacity-[0.03] pointer-events-none rotate-12">
                   <Dna size={150} />
                </div>

                <div className="relative z-10 min-h-[320px] flex flex-col">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100">
                      {currentQ.category}
                    </span>
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border ${
                      currentQ.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                      currentQ.difficulty === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                      'bg-rose-50 text-rose-700 border-rose-100'
                    }`}>
                      {currentQ.difficulty}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-[1.2] tracking-tight mb-12">
                    {currentQ.question}
                  </h2>

                  <div className="mt-auto pt-8 border-t border-slate-100">
                    {!showAnswer ? (
                      <button 
                        onClick={() => setShowAnswer(true)} 
                        className="group w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-xl shadow-slate-200"
                      >
                        <BookOpen className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                        REVEAL SOLUTION
                      </button>
                    ) : (
                      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                          <div className="flex-1 bg-emerald-50 border-2 border-emerald-100 rounded-3xl p-7">
                            <div className="flex items-center gap-2 mb-3">
                               <CheckCircle className="w-4 h-4 text-emerald-500" />
                               <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Correct Answer</p>
                            </div>
                            <p className="text-2xl md:text-3xl font-black text-emerald-900 leading-tight">{currentQ.answer}</p>
                          </div>
                          <div className="flex-1 bg-blue-50/50 rounded-3xl p-7 border border-blue-100">
                            <div className="flex items-center gap-2 mb-3">
                               <Lightbulb className="w-4 h-4 text-blue-500" />
                               <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Explanation</p>
                            </div>
                            <p className="text-slate-700 font-bold leading-relaxed">{currentQ.explanation}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <button 
                            onClick={() => handleNext(false)} 
                            className="group py-5 border-2 border-slate-200 text-slate-400 rounded-2xl font-black text-lg hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-all flex items-center justify-center gap-2"
                          >
                            <XCircle className="w-6 h-6" /> I WAS WRONG
                          </button>
                          <button 
                            onClick={() => handleNext(true)} 
                            className="group py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-100"
                          >
                            <CheckCircle className="w-6 h-6" /> CORRECT
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Category Switcher */}
              <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat)} 
                    className={`whitespace-nowrap px-6 py-3 rounded-2xl text-xs font-black transition-all border ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-lg' : 'bg-white text-slate-500 border-slate-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="max-w-3xl mx-auto py-10 animate-in fade-in zoom-in-95 duration-700">
            <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-slate-100 text-center">
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full scale-150 animate-pulse" />
                <Trophy className="w-24 h-24 text-yellow-500 relative z-10 mx-auto" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter mb-4">
                {Math.round((score / shuffledQuestions.length) * 100)}%
              </h2>
              <p className="text-xl md:text-2xl font-bold text-slate-500 mb-12 uppercase tracking-widest">Biological Mastery Achieved</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-slate-50 p-6 rounded-3xl">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Correct</p>
                  <p className="text-2xl font-black text-slate-800">{score}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total</p>
                  <p className="text-2xl font-black text-slate-800">{shuffledQuestions.length}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Best Streak</p>
                  <p className="text-2xl font-black text-slate-800">{highestStreak}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Time taken</p>
                  <p className="text-2xl font-black text-slate-800">{Math.floor(timeTaken / 60)}m</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                 <button 
                  onClick={() => setSelectedCategory('All')} 
                  className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
                >
                  <RefreshCw /> RESTART CHALLENGE
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Decorative Footer Icons */}
      <footer className="max-w-4xl mx-auto mt-12 pb-20 text-center">
        <div className="grid grid-cols-5 gap-4 opacity-[0.05] mb-8">
          <Dna className="mx-auto" /><Trees className="mx-auto" /><Activity className="mx-auto" /><Microscope className="mx-auto" /><Leaf className="mx-auto" />
        </div>
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Questions curated via Biota Biology competition set</p>
      </footer>
    </div>
  );
};

export default App;