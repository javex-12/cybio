import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Check if already installed
      if (!window.matchMedia('(display-mode: standalone)').matches) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-32px)] max-w-md animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
            <Download size={20} />
          </div>
          <div>
            <p className="text-sm font-bold">Install Biobyte Pro</p>
            <p className="text-xs text-slate-400">Access offline & better performance</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleInstall}
            className="px-4 py-2 bg-white text-slate-900 text-xs font-black rounded-lg hover:bg-slate-100 transition-colors"
          >
            Install
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-slate-500 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
