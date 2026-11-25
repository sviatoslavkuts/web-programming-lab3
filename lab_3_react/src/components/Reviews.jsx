import { useState, useEffect } from 'react';

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/14/comments')
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Помилка завантаження коментарів:', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="space-y-3">
            <h2 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Відгуки роботодавців
            </h2>
            {loading ? (
                <p className="text-slate-500 dark:text-slate-400 text-sm">Завантаження відгуків...</p>
            ) : (
                <div className="space-y-3">
                    {comments.map((comment) => (
                        <article
                            key={comment.id}
                            className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1"
                        >
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                                {comment.name}
                            </h3>
                            <p className="text-xs text-emerald-600 dark:text-emerald-400">
                                {comment.email}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {comment.body}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Reviews;