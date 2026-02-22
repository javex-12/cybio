import React from 'react';
import { WifiOff } from 'lucide-react';

interface OfflineBannerProps {
    show: boolean;
}

const OfflineBanner: React.FC<OfflineBannerProps> = ({ show }) => {
    if (!show) return null;
    return (
        <div className="flex items-center justify-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-semibold">
            <WifiOff size={12} />
            <span>Offline Mode</span>
        </div>
    );
};

export default OfflineBanner;
