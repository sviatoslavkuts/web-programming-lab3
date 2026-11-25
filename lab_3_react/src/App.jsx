import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 7 && hours < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center p-6 transition-colors duration-300">
                <main className="max-w-2xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-8 flex flex-col gap-6 transition-colors duration-300">
                    <Header theme={theme} toggleTheme={toggleTheme} />
                    <Experience />
                    <Education />
                    <Reviews />
                    <Footer />
                </main>
                <ContactForm />
            </div>
        </div>
    );
}

export default App;