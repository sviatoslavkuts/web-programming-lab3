import { useState, useEffect } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState(null);

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
        };

        localStorage.setItem('reactSystemInfo', JSON.stringify(info));
        const savedInfo = JSON.parse(localStorage.getItem('reactSystemInfo'));
        setSystemInfo(savedInfo);
    }, []);

    return (
        <footer className="text-center text-slate-500 text-sm pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <p>&copy; 2026 Святослав Куць</p>
            {systemInfo && (
                <div className="text-xs text-left bg-slate-50 dark:bg-slate-950/60 p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1 break-words">
                    <p><strong className="text-slate-700 dark:text-slate-300">Платформа:</strong> {systemInfo.platform}</p>
                    <p><strong className="text-slate-700 dark:text-slate-300">Мова:</strong> {systemInfo.language}</p>
                    <p><strong className="text-slate-700 dark:text-slate-300">Браузер (User-Agent):</strong> {systemInfo.userAgent}</p>
                </div>
            )}
        </footer>
    );
}

export default Footer;