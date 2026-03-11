// --- БАЗА ДАННЫХ СТАТЕЙ ---
// Добавляйте новые объекты сюда. Поддерживается HTML-разметка.
const articles = [
    {
        id: 'getting-started',
        title: 'Начало работы',
        content: `
            <h1>Добро пожаловать</h1>
            <p>Это минималистичная база знаний, готовая к деплою на GitHub Pages. Она не требует бэкенда или сборки.</p>
            
            <div class="wiki-block-info">
                <strong>💡 Как это работает:</strong> Весь контент хранится в массиве <code>articles</code> внутри файла <code>script.js</code>. Сайт мгновенно переключает страницы благодаря хэш-роутингу (SPA).
            </div>

            <h2>Как добавить статью?</h2>
            <p>Откройте <code>script.js</code>, найдите массив <code>articles</code> и добавьте новый объект. Укажите уникальный <code>id</code>, <code>title</code> и <code>content</code> (разрешены HTML-теги).</p>
        `
    },
    {
        id: 'components',
        title: 'Компоненты (Info, Warning, Code)',
        content: `
            <h1>Готовые компоненты оформления</h1>
            <p>Вы можете использовать специальные CSS-классы для оформления блоков в ваших статьях.</p>
            
            <h2>Блок информации</h2>
            <div class="wiki-block-info">
                Используйте класс <code>.wiki-block-info</code> для выделения важных деталей, советов или подсказок.
            </div>

            <h2>Блок предупреждения</h2>
            <div class="wiki-block-warning">
                Используйте класс <code>.wiki-block-warning</code> для критической информации, багов или ограничений.
            </div>

            <h2>Оформление кода</h2>
            <p>Оберните ваш код в <code>&lt;div class="wiki-code"&gt;&lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;&lt;/div&gt;</code>:</p>
            <div class="wiki-code">
<pre><code>// Пример функции
function initApp() {
    console.log("Wiki is running!");
    loadArticle();
}</code></pre>
            </div>
        `
    }
];

// --- ЛОГИКА ПРИЛОЖЕНИЯ ---

const DOM = {
    navLinks: document.getElementById('nav-links'),
    contentArea: document.getElementById('content-area'),
    searchInput: document.getElementById('search'),
    sidebar: document.getElementById('sidebar'),
    openBtn: document.getElementById('open-sidebar'),
    closeBtn: document.getElementById('close-sidebar'),
    overlay: document.getElementById('overlay')
};

// Рендер бокового меню (с учетом поиска)
function renderNavigation(filterText = '') {
    DOM.navLinks.innerHTML = '';
    const query = filterText.toLowerCase();
    const filtered = articles.filter(a => a.title.toLowerCase().includes(query));

    if (filtered.length === 0) {
        DOM.navLinks.innerHTML = '<div class="text-zinc-500 text-sm p-2 text-center mt-4">Статьи не найдены</div>';
        return;
    }

    filtered.forEach(article => {
        const link = document.createElement('a');
        link.href = `#${article.id}`;
        link.className = 'block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors mb-1 nav-item';
        link.setAttribute('data-id', article.id);
        link.textContent = article.title;
        link.onclick = closeMobileMenu;
        DOM.navLinks.appendChild(link);
    });
    
    updateActiveLink();
}

// Загрузка контента
function loadArticle() {
    // Берем ID из URL (всё после #), если пусто — грузим первую статью
    const hashId = window.location.hash.replace('#', '') || articles[0].id;
    const article = articles.find(a => a.id === hashId) || articles[0];

    // Рендерим HTML
    DOM.contentArea.innerHTML = article.content;
    
    // Сбрасываем скролл наверх
    document.querySelector('main').scrollTop = 0;
    
    updateActiveLink(hashId);
}

// Подсветка активной ссылки
function updateActiveLink(activeId = window.location.hash.replace('#', '') || articles[0].id) {
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('data-id') === activeId) {
            link.classList.add('bg-zinc-800', 'text-zinc-100');
            link.classList.remove('text-zinc-400', 'hover:bg-zinc-800/50');
        } else {
            link.classList.remove('bg-zinc-800', 'text-zinc-100');
            link.classList.add('text-zinc-400', 'hover:bg-zinc-800/50');
        }
    });
}

// Мобильное меню
const openMobileMenu = () => { DOM.sidebar.classList.remove('-translate-x-full'); DOM.overlay.classList.remove('hidden'); };
const closeMobileMenu = () => { DOM.sidebar.classList.add('-translate-x-full'); DOM.overlay.classList.add('hidden'); };

// Слушатели событий
window.addEventListener('hashchange', loadArticle);
DOM.searchInput.addEventListener('input', (e) => renderNavigation(e.target.value));
DOM.openBtn.addEventListener('click', openMobileMenu);
DOM.closeBtn.addEventListener('click', closeMobileMenu);
DOM.overlay.addEventListener('click', closeMobileMenu);

// Инициализация
renderNavigation();
loadArticle();
lucide.createIcons(); // Рисуем SVG-иконки