// 1. Зберігання та відображення інформації про ОС і браузер у localStorage
function saveAndDisplaySystemInfo() {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookiesEnabled: navigator.cookieEnabled,
        screenResolution: `${window.screen.width}x${window.screen.height}`
    };

    localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

    const footerInfo = document.getElementById('system-info');
    footerInfo.innerHTML = '<strong>Дані з localStorage:</strong><br>';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const p = document.createElement('p');
        p.style.margin = '4px 0';
        p.textContent = `${key}: ${value}`;
        footerInfo.appendChild(p);
    }
}

// 2. Отримання коментарів роботодавців (варіант 14)
async function loadReviews() {
    const container = document.getElementById('reviews-container');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/14/comments');
        if (!response.ok) throw new Error('Помилка завантаження даних');
        const comments = await response.json();

        container.innerHTML = '';
        comments.forEach(comment => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <h3>${comment.name}</h3>
                <p class="review-email">${comment.email}</p>
                <p>${comment.body}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.textContent = 'Не вдалося завантажити відгуки.';
        console.error(error);
    }
}

// 3. Модальне вікно форми зворотного зв'язку через 1 хвилину (60000 мс)
function initFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.getElementById('close-modal');

    setTimeout(() => {
        modal.classList.remove('hidden');
    }, 60000);

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// 4. Автоматичний та ручний перемикач теми (07:00 - 21:00 — денна, інакше — нічна)
function initThemeSwitcher() {
    const toggleBtn = document.getElementById('theme-toggle');
    const currentHour = new Date().getHours();

    const applyTheme = (isLight) => {
        document.body.classList.toggle('light-theme', isLight);
        toggleBtn.textContent = isLight ? '🌙 Нічна тема' : '☀️ Денна тема';
    };

    let isLightMode = currentHour >= 7 && currentHour < 21;
    applyTheme(isLightMode);

    toggleBtn.addEventListener('click', () => {
        isLightMode = !isLightMode;
        applyTheme(isLightMode);
    });
}

// Запуск після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    saveAndDisplaySystemInfo();
    loadReviews();
    initFeedbackModal();
    initThemeSwitcher();
});