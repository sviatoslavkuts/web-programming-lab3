import { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000); // Для тесту можеш тимчасово змінити на 3000

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xl font-bold cursor-pointer"
                    aria-label="Закрити"
                >
                    &times;
                </button>

                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    Зворотний зв'язок
                </h2>

                <form
                    action="https://formspree.io/f/xnpdwbqj"
                    method="POST"
                    className="flex flex-col gap-3"
                >
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ваше ім'я"
                        className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm"
                    />
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Номер телефону"
                        className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm"
                    />
                    <textarea
                        name="message"
                        rows="4"
                        required
                        placeholder="Ваше повідомлення..."
                        className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm"
                    />
                    <div className="flex gap-2 mt-2">
                        <button
                            type="submit"
                            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold py-2 rounded-lg transition cursor-pointer"
                        >
                            Надіслати
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                        >
                            Закрити
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;