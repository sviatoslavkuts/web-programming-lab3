function Header({ theme, toggleTheme }) {
    return (
        <header className="text-center pb-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex justify-end mb-3">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-emerald-500 transition cursor-pointer"
                >
                    {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
                </button>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Святослав Куць
            </h1>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                Студент спеціальності "Кібербезпека"
            </p>
        </header>
    );
}

export default Header;