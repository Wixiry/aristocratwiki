const articles = [
    {
        id: 'faq',
        title: '✉️・О чём семья в целом?',
        content: `
            <h1>Добро пожаловать в Aristocrat</h1>
            <p>Вы находитесь на странице информации о семье Aristocrat. Мы — объединение игроков, которые сделали ставку на развитие государственного контента на сервере New York.</p>
            
            <div class="wiki-block-info">
                <strong>❗Чем мы занимаемся? Наша основная деятельность сосредоточена вокруг государственных структур. Мы не просто семья, а кузница кадров для мэрии, полиции, EMS и других ведомств.
            </div>

            <h2>Почему стоит выбрать нас?</h2>
            <p>Мы предлагаем не просто вступить в семью, а стать частью команды, которая помогает новичкам найти свой путь на сервере. Вот что ты получишь:</p>
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
                <span class="cyber-label">Карьерный рост:</span>
                <span class="cyber-desc">Поможем устроиться на работу, подскажем, как продвигаться по службе.</span>
            </div>
        </div>

        <div class="cyber-item">
            <span class="cyber-marker">—</span>
            <div class="cyber-content">
                <span class="cyber-label">Участие в жизни города:</span>
                <span class="cyber-desc">Вместе мы будем участвовать в рейдах и строить будущее Нью-Йорка.</span>
            </div>
        </div>

        <div class="cyber-item">
            <span class="cyber-marker">—</span>
            <div class="cyber-content">
                <span class="cyber-label">Дружеское комьюнити:</span>
                <span class="cyber-desc">У нас нет места токсичности. Мы начинающая семья, и каждый новый участник для нас — ценный друг.</span>
            </div>
        </div>

    </div>
</div>
            
            <h2>Это твой шанс!</h2>
            <div class="wiki-block-note">
                Неважно, новичок ты или опытный игрок — если тебе интересна государственная жизнь города, у нас ты точно найдешь свое место. Присоединяйся к Aristocrat, чтобы вместе строить великое будущее с нами!
            </div>
        `
    },
    {
        id: 'jobs',
        title: '👨‍✈️・О работе в государственных структур:',
        content: `
            <h1>Работа в государственных структурах:</h1>
            <p>Семья Aristocrat открывает перед тобой двери в элиту государственной власти на сервере New York. Мы не просто даем возможность устроиться на работу — мы ведем тебя за руку от стажера до профессионала.</p>
            <p>❗ Где мы работаем? Наши люди представлены во всех ключевых ведомствах:</p>
            <div class="wiki-block-quote">
                FIB, Прокуратура и Коллегия адвокатов, Секретная Служба США.
            </div>
            <h1>Что мы тебе даем?</h1>
            <p>Мы понимаем, что работа в госструктурах — это сложно, особенно новичкам. Поэтому мы создали все условия для твоего комфортного старта и развития:</p>
<div class="wiki-block-cyber">
    <div class="cyber-list">
        
        <div class="cyber-item">
            <span class="cyber-marker">—</span>
            <div class="cyber-content">
                <span class="cyber-label">Документы и памятки:</span>
                <span class="cyber-desc">У нас есть все необходимые шаблоны, бланки и инструкции. Больше не нужно искать информацию по всему городу — мы собрали её для тебя.</span>
            </div>
        </div>

        <div class="cyber-item">
            <span class="cyber-marker">—</span>
            <div class="cyber-content">
                <span class="cyber-label">Помощь с законами:</span>
                <span class="cyber-desc">Запутался в статьях или не знаешь, как правильно составить иск? Наши опытные коллеги всегда подскажут и объяснят.</span>
            </div>
        </div>

        <div class="cyber-item">
            <span class="cyber-marker">—</span>
            <div class="cyber-content">
                <span class="cyber-label">Кураторство:</span>
                <span class="cyber-desc">За каждым новичком закрепляется наставник, который поможет освоиться на рабочем месте и избежать типичных ошибок.</span>
            </div>
        </div>

        <div class="cyber-item">
            <span class="cyber-marker">—</span>
            <div class="cyber-content">
                <span class="cyber-label">Активная практика:</span>
                <span class="cyber-desc"> Мы не сидим без дела — постоянные рейды, следственные действия, суды и законотворчество.</span>
            </div>
        </div>
    </div>
</div>

        <h2> Начни свою карьеру уже сегодня! </h2>
        <p>Хочешь носить значок агента FIB, вершить правосудие над сотрудниками или защищать права граждан в суде? Вступай в Aristocrat, и мы поможем тебе добиться высот в любой из этих сфер</p>
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










