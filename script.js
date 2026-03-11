const articles = [
    {
        id: 'faq',
        title: '✉️・О чём семья в целом?',
        content: `
            <h1>Добро пожаловать</h1>
            <p>Вы попали на главную страницу wiki по семье Aristocrat.</p>
            
            <div class="wiki-block-info">
                <strong>💡 Что из себя представляет семья?</strong> Основной контент семьи направлен на госудаственную основу.
            </div>

            <h2>Основная идея:</h2>
            <p>Наша идеалогия семьи заключается в поддержке и помощи новичкам которые приходят в государственные структуры на сервере New York. Наша семья предлагает вам участвовать в семейном, государственном контенте.</p>
            
            <h2>Важно знать!</h2>
            <div class="wiki-block-warning">
                Мы начинающая семья, которая только развивается. По этому большого ажиотажа не ожидайте.
            </div>
        `
    },
    {
        id: 'jobs',
        title: '👨‍✈️・О работе в государственных структур:',
        content: `
            <h1>Наша семья и работодательство:</h1>
            <p>Как вы могли понять, наша семья предоставляет работу в государственных структур.</p>
            <p>Что же мы можем предложить вам по поводу работы:</p>
            <div class="wiki-block-warning">
                Силовые структуры (FIB), Прокуратура(GOV), Коллегия Адвокатов(GOV), USSS(GOV).
            </div>
            <p>При поступлении в государственную структуру, мы поможем вам в начинаниях в данных структурах. Мы предоставим вам различные актуальные памятки, консультацию по законодательной базе и прочее.</p>
        `
    }
];

const DOM = {
    navLinks: document.getElementById('nav-links'),
    contentArea: document.getElementById('content-area'),
    searchInput: document.getElementById('search'),
    sidebar: document.getElementById('sidebar'),
    openBtn: document.getElementById('open-sidebar'),
    closeBtn: document.getElementById('close-sidebar'),
    overlay: document.getElementById('overlay')
};

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


function loadArticle() {
    const hashId = window.location.hash.replace('#', '') || articles[0].id;
    const article = articles.find(a => a.id === hashId) || articles[0];


    DOM.contentArea.innerHTML = article.content;
    
    document.querySelector('main').scrollTop = 0;
    
    updateActiveLink(hashId);
}

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


const openMobileMenu = () => { DOM.sidebar.classList.remove('-translate-x-full'); DOM.overlay.classList.remove('hidden'); };
const closeMobileMenu = () => { DOM.sidebar.classList.add('-translate-x-full'); DOM.overlay.classList.add('hidden'); };


window.addEventListener('hashchange', loadArticle);
DOM.searchInput.addEventListener('input', (e) => renderNavigation(e.target.value));
DOM.openBtn.addEventListener('click', openMobileMenu);
DOM.closeBtn.addEventListener('click', closeMobileMenu);
DOM.overlay.addEventListener('click', closeMobileMenu);


renderNavigation();
loadArticle();

lucide.createIcons();



