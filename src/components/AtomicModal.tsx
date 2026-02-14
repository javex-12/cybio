import React from 'react';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

interface AtomicModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  type?: 'danger' | 'success' | 'info';
}

const AtomicModal: React.FC<AtomicModalProps> = ({ isOpen, title, message, onConfirm, onCancel, type = 'info' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100">
        <div className={`p-8 text-center ${type === 'danger' ? 'bg-rose-50' : type === 'success' ? 'bg-emerald-50' : 'bg-blue-50'}`}>
          <div className="flex justify-center mb-4">
            {type === 'danger' ? <XCircle className="text-rose-600" size={48} /> : type === 'success' ? <CheckCircle2 className="text-emerald-600" size={48} /> : <AlertCircle className="text-blue-600" size={48} />}
          </div>
          <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">{title}</h3>
          <p className="mt-2 text-sm text-slate-500 font-medium italic leading-relaxed">{message}</p>
        </div>
        <div className="p-6 flex flex-col gap-3">
          <button 
            onClick={onConfirm}
            className={`w-full py-4 rounded-2xl font-black text-white text-xs uppercase tracking-widest shadow-lg transition-all active:scale-95 ${type === 'danger' ? 'bg-rose-600 shadow-rose-200' : 'bg-blue-600 shadow-blue-200'}`}
          >
            Confirm Action
          </button>
          <button 
            onClick={onCancel}
            className="w-full py-4 rounded-2xl font-black text-slate-400 text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AtomicModal;
