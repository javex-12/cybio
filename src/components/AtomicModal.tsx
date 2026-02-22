import React from 'react';

interface AtomicModalProps {
  isOpen: boolean; title: string; message: string;
  onConfirm: () => void; onCancel: () => void;
  type?: 'danger' | 'info';
}

const AtomicModal: React.FC<AtomicModalProps> = ({ isOpen, title, message, onConfirm, onCancel, type = 'info' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[var(--bg-surface)] w-full max-w-sm rounded-[24px] shadow-2xl border border-[var(--border-base)] overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8">
          <h3 className="text-xl font-black text-[var(--text-main)] mb-2 tracking-tight">{title}</h3>
          <p className="text-sm font-medium text-[var(--text-muted)] leading-relaxed">{message}</p>
        </div>
        <div className="flex border-t border-[var(--border-base)] bg-[var(--bg-app)]/50">
          <button
            onClick={onCancel}
            className="flex-1 py-4 text-xs font-black uppercase tracking-widest text-[var(--text-muted)] hover:bg-[var(--bg-app)] transition-colors border-r border-[var(--border-base)]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 py-4 text-xs font-black uppercase tracking-widest transition-colors ${
              type === 'danger' ? 'text-rose-500 hover:bg-rose-500/10' : 'text-[var(--brand)] hover:bg-[var(--brand-subtle)]'
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AtomicModal;