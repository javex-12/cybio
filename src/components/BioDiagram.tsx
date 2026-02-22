import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface BioDiagramProps {
  content: string;
  type?: 'mermaid' | 'svg' | 'image';
  caption?: string;
}

const BioDiagram: React.FC<BioDiagramProps> = ({ content, type = 'mermaid', caption }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === 'mermaid') {
      mermaid.initialize({
        startOnLoad: true,
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'Inter',
      });
      
      if (chartRef.current) {
        chartRef.current.removeAttribute('data-processed');
        mermaid.contentLoaded();
      }
    }
  }, [content, type]);

  return (
    <div className="my-10 animate-in zoom-in-95 duration-500">
      <div className={`
        relative p-6 rounded-[32px] border border-[var(--border-base)] bg-[var(--bg-app)]/50 backdrop-blur-sm shadow-inner overflow-hidden flex flex-col items-center justify-center min-h-[200px]
      `}>
        {type === 'mermaid' && (
          <div ref={chartRef} className="mermaid w-full flex justify-center">
            {content}
          </div>
        )}
        
        {type === 'image' && (
          <img 
            src={content} 
            alt={caption || 'Diagram'} 
            className="max-w-full h-auto rounded-2xl shadow-lg border border-white/10"
          />
        )}

        {/* ── CAPTION ── */}
        {caption && (
          <div className="mt-6 px-4 py-1.5 bg-[var(--bg-surface)] rounded-full border border-[var(--border-base)] shadow-sm">
             <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em]">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BioDiagram;
