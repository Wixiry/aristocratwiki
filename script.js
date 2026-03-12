const articles = [
    {
        id: 'faq',
        category: 'ОСНОВНОЕ',
        title: '✉️・О чём семья в целом?',
        content: `
            <h1>Добро пожаловать в Aristocrat</h1>
            <p>Вы находитесь на странице информации о семье Aristocrat. Мы — объединение игроков, которые сделали ставку на развитие государственного контента на сервере New York.</p>
            
            <div class="wiki-block-info">
                <strong>❗Чем мы занимаемся? Наша основная деятельность сосредоточена вокруг государственных структур. Мы не просто семья, а кузница кадров для мэрии, полиции, EMS и других ведомств.
            </div>

            <h2>Почему стоит выбрать нас?</h2>
            <div class="wiki-block-cyber">
                <div class="cyber-list">
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Поддержка 24/7:</span>
                            <span class="cyber-desc">Мы всегда на связи и готовы ответить на твои вопросы по механике госструктур.</span>
                        </div>
                    </div>
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Дружеское комьюнити:</span>
                            <span class="cyber-desc">У нас нет места токсичности. Каждому новичку готовы помочь.</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>Это твой шанс!</h3>
            <p>Хочешь носить значок агента FIB, вершить правосудие над сотрудниками или защищать права граждан в суде? Вступай в Aristocrat.</p>
        `
    },
    {
        id: 'jobs',
        category: 'ГОС. СТРУКТУРЫ',
        title: '👨‍✈️・О работе в государственных структур:',
        content: `
            <h1>Работа в государственных структурах:</h1>
            <p>Семья Aristocrat открывает перед тобой двери в элиту государственной власти на сервере New York.</p>
            <p><span class="semibold">❗ Где мы работаем? Наши люди представлены во всех ключевых ведомствах:</span></p>
            <div class="wiki-block-quote">
                FIB, Прокуратура и Коллегия адвокатов, Секретная Служба США.
            </div>
            <h1>Что мы тебе даем?</h1>
            <p>Мы понимаем, что работа в госструктурах — это сложно. Поэтому мы создали все условия для твоего старта:</p>
            <div class="wiki-block-cyber">
                <div class="cyber-list">
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Кураторство:</span>
                            <span class="cyber-desc">За каждым новичком закрепляется наставник, который поможет освоиться на рабочем месте.</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'farm',
        category: 'ДЕЯТЕЛЬНОСТЬ',
        title: '🧑‍🌾・О работе по контрактам:',
        content: `
            <h1>Работа по контрактам в семье Aristocrat</h1>
            <p>Для тех, кто хочет не просто числиться в семье, а приносить реальную пользу и зарабатывать.</p>
            <div class="wiki-block-success">
                <strong>❗ Что такое работа с контрактами? Это выполнение различных задач и поручений от руководства семьи.</strong>
            </div>
            <h2>Что входит в контрактную систему?</h2>
            <div class="wiki-block-cyber">
                <div class="cyber-list">
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Прозрачная отчетность:</span>
                            <span class="cyber-desc">Ты всегда будешь видеть, что и за что получил. Вся финансовая сторона зафиксирована в семейном боте.</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
];

const DOM = {
    navLinks: document.getElementById('nav-links'),
    contentArea: document.getElementById('content-area'),
    searchInput: document.getElementById('search'),
    sidebar: document.getElementById('sidebar'),
    overlay: document.getElementById('overlay')
};

// --- ФУНКЦИЯ РЕНДЕРА С КАТЕГОРИЯМИ ---
function renderNavigation(filterText = '') {
    DOM.navLinks.innerHTML = '';
    const query = filterText.toLowerCase();
    
    const filtered = articles.filter(a => a.title.toLowerCase().includes(query));

    if (filtered.length === 0) {
        DOM.navLinks.innerHTML = '<div class="text-zinc-500 text-sm p-2 text-center mt-4">Статьи не найдены</div>';
        return;
    }

    // Автоматическое создание групп на основе категорий
    const groups = {};
    filtered.forEach(article => {
        if (!groups[article.category]) groups[article.category] = [];
        groups[article.category].push(article);
    });

    // Отрисовка заголовков и тем
    for (const [category, items] of Object.entries(groups)) {
        const catTitle = document.createElement('div');
        catTitle.className = 'category-title';
        catTitle.textContent = category;
        DOM.navLinks.appendChild(catTitle);

        items.forEach(article => {
            const link = document.createElement('a');
            link.href = `#${article.id}`;
            link.className = 'nav-item block px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100 transition-all mb-1';
            link.setAttribute('data-id', article.id);
            link.textContent = article.title;
            link.onclick = () => { DOM.sidebar.classList.add('-translate-x-full'); DOM.overlay.classList.add('hidden'); };
            DOM.navLinks.appendChild(link);
        });
    }
    
    updateActiveLink();
}

function loadArticle() {
    const hashId = window.location.hash.replace('#', '') || articles[0].id;
    const article = articles.find(a => a.id === hashId) || articles[0];
    DOM.contentArea.innerHTML = article.content;
    document.querySelector('.custom-scrollbar').scrollTop = 0;
    updateActiveLink(hashId);
}

function updateActiveLink(activeId = window.location.hash.replace('#', '') || articles[0].id) {
    document.querySelectorAll('.nav-item').forEach(link => {
        if (link.getAttribute('data-id') === activeId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('hashchange', loadArticle);
DOM.searchInput.addEventListener('input', (e) => renderNavigation(e.target.value));
DOM.overlay.addEventListener('click', () => { DOM.sidebar.classList.add('-translate-x-full'); DOM.overlay.classList.add('hidden'); });
document.getElementById('open-sidebar').addEventListener('click', () => { DOM.sidebar.classList.remove('-translate-x-full'); DOM.overlay.classList.remove('hidden'); });

renderNavigation();
loadArticle();
