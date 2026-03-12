const articles = [
    {
        id: 'faq',
        category: 'О Семье',
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
                            <span class="cyber-desc">Вместе мы будем участвовать в мероприятияхи строить будущее на Нью-Йорке.</span>
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
            
            <h3>Это твой шанс!</h3>
            <p>Неважно, новичок ты или опытный игрок — если тебе интересна государственная жизнь города, у нас ты точно найдешь свое место. Присоединяйся к Aristocrat, чтобы вместе строить великое будущее с нами!</p>
        `
    },
    {
        id: 'jobs',
        category: 'О Семье',
        title: '👨‍✈️・О работе в государственных структур:',
        content: `
            <h1>Работа в государственных структурах:</h1>
            <p>Семья Aristocrat открывает перед тобой двери в элиту государственной власти на сервере New York. Мы не просто даем возможность устроиться на работу — мы ведем тебя за руку от стажера до профессионала.</p>
            <p><span class="semibold">❗ Где мы работаем? Наши люди представлены во всех ключевых ведомствах:</span></p>
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
            <h3> Начни свою карьеру уже сегодня! </h3>
            <p>Хочешь носить значок агента FIB, вершить правосудие над сотрудниками или защищать права граждан в суде? Вступай в Aristocrat, и мы поможем тебе добиться высот в любой из этих сфер</p>
        `
    },
    {
        id: 'farm',
        category: 'О Семье',
        title: '🧑‍🌾・О работе по контрактам:',
        content: `
            <h1>Работа по контрактам в семье Aristocrat</h1>
            <p>Для тех, кто хочет не просто числиться в семье, а приносить реальную пользу и зарабатывать — у нас есть направление контрактной деятельности. Это отдельная ветка возможностей, доступная нашим участникам.</p>
            <div class="wiki-block-success">
                <strong>❗ Что такое работа с контрактами? Это выполнение различных задач и поручений от руководства семьи.</strong>
            </div>
            <h2>Что входит в контрактную систему?</h2>
            <p>Мы разработали подробный регламент, который охватывает все аспекты этой деятельности. Если ты решишь работать с контрактами, ты получишь доступ к:</p>
            <div class="wiki-block-cyber">
                <div class="cyber-list">
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Полной документации:</span>
                            <span class="cyber-desc">У нас прописаны все типы контрактов, условия их выполнения и размер вознаграждения. Никакой самодеятельности — только чёткие механики.</span>
                        </div>
                    </div>
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Разнообразным задачам:</span>
                            <span class="cyber-desc">Контракты могут быть разными — от помощи в перевозке грузов до участия в совместных каптах семьи.</span>
                        </div>
                    </div>
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Прозрачной отчетности:</span>
                            <span class="cyber-desc">Ты всегда будешь видеть, что и за что получил. Вся финансовая сторона зафиксирована в семейном боте.</span>
                        </div>
                    </div>
                    <div class="cyber-item">
                        <span class="cyber-marker">—</span>
                        <div class="cyber-content">
                            <span class="cyber-label">Возможности выбора:</span>
                            <span class="cyber-desc">Ты сам решаешь, какие контракты брать. Хочешь больше риска и прибыли? Бери сложные. Хочешь стабильность? Есть регулярные задачи.</span>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Контракт — это развитие и деньги</h3>
            <p>Вступая в Aristocrat и выбирая контрактную деятельность, ты получаешь не просто слова, а реальные обязательства от семьи. Мы ценим твое время и усилия. Приходи и выбирай задание по душе.</p>
        `
    },

    {
    id: 'uak-memo',
    category: 'Памятки',
    title: '⚖️・Уголовно-Административный Кодекс',
    content: `
        <h1 class="wiki-title-gradient">Уголовно-Административный Кодекс (УАК)</h1>
        
        <div class="wiki-block-info">
            <strong>Справочник для сотрудников ПО, судей и адвокатов.</strong><br>
            Здесь собраны приоритетные статьи, используемые в ежедневной практике. Классификация по уровню розыска и юрисдикции.
        </div>

        <h2 class="section-title">РАЗДЕЛ 1. ПРЕСТУПЛЕНИЯ ПРОТИВ ЛИЧНОСТИ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">6.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Нанесение тяжких телесных <span class="stars">★★★ / ★★★★</span></span>
                        <span class="cyber-desc">ч.1: Побои (3 года). ч.2: Особо тяжкие (4 года).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">6.2</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Причинение смерти <span class="stars">★★★ / ★★★★</span></span>
                        <span class="cyber-desc">ч.1: Убийство (4 года). ч.2: По неосторожности (3 года).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">6.3</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Тяжкое убийство <span class="stars">★★★★★</span></span>
                        <span class="cyber-desc">Убийство 2+ лиц, при исполнении, с особой жестокостью. (5 лет).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 2. ЭКОНОМИЧЕСКИЕ ПРЕСТУПЛЕНИЯ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">10.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Кража / Взлом <span class="stars">★★★ / ★★★★</span></span>
                        <span class="cyber-desc">10.1: Свыше $15,000 (3 года). 10.1.1: Со взломом (4 года).<br><i>Юрисдикция: Региональная/Финансовая.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">10.4</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Разбой / Угон <span class="stars">★★★ / ★★★★</span></span>
                        <span class="cyber-desc">10.4: Разбой с насилием (4 года). 10.5: Угон ТС (3 года).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 3. ОБЩЕСТВЕННАЯ БЕЗОПАСНОСТЬ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">12.7</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Незаконное проникновение <span class="stars">★★★ / ★★★★</span></span>
                        <span class="cyber-desc">ч.1: Охраняемый объект (3 года). ч.2: Особо охраняемый (4-5 лет).<br><i>Пример: Форт-Занкудо, Офис FIB.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">12.8</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Оборот оружия и спецсредств <span class="stars">★★★★ / ★★★★★</span></span>
                        <span class="cyber-desc">12.8: Оружие (4 года или штраф). 12.8.1: Спецсредства ГОС образца (5 лет).<br><i>Примечание: За 12.8.1 штраф не предусмотрен.</i></span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 4. НАРКОТИЧЕСКИЕ ВЕЩЕСТВА</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">13.2</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Оборот наркотиков <span class="stars">★★★★ / ★★★★★</span></span>
                        <span class="cyber-desc">13.2: От 3г (4 года). 13.2.1: Свыше 25г (5 лет).<br>13.4: Для госслужащих — любая доза (5 лет).</span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 5. ДОЛЖНОСТНЫЕ ПРЕСТУПЛЕНИЯ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">15.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Превышение / Злоупотребление <span class="stars">★★★★ / ★★★★★</span></span>
                        <span class="cyber-desc">15.1: Выход за пределы (4 года). 15.1.1: Вмешательство в задержание (5 лет).<br>15.4: Взятка (5 лет). 15.6: Халатность (4 года).</span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 7. АДМИНИСТРАТИВНЫЙ КОДЕКС</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">АДМ</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Общественный порядок</span>
                        <span class="cyber-desc">20.1: Хулиганство ($3k-7k). 20.3: Неприемлемый вид ($5k-20k).<br>20.4: Обнажение оружия ($15k-30k + конфискация).</span>
                    </div>
                </div>
            </div>
        </div>
    `
},
    
];

const DOM = {
    navLinks: document.getElementById('nav-links'),
    contentArea: document.getElementById('content-area'),
    searchInput: document.getElementById('search'),
    sidebar: document.getElementById('sidebar'),
    openBtn: document.getElementById('open-sidebar'),
    overlay: document.getElementById('overlay')
};

function renderNavigation(filterText = '') {
    DOM.navLinks.innerHTML = '';
    const query = filterText.toLowerCase();
    
    // Группировка по категориям
    const groups = {};
    articles.forEach(article => {
        if (article.title.toLowerCase().includes(query)) {
            if (!groups[article.category]) groups[article.category] = [];
            groups[article.category].push(article);
        }
    });

    for (const [category, items] of Object.entries(groups)) {
        // Добавляем заголовок категории
        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = category;
        DOM.navLinks.appendChild(header);

        // Добавляем ссылки
        items.forEach(article => {
            const link = document.createElement('a');
            link.href = `#${article.id}`;
            link.className = 'block px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100 transition-colors mb-1 nav-item';
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
DOM.openBtn.addEventListener('click', () => { DOM.sidebar.classList.remove('-translate-x-full'); DOM.overlay.classList.remove('hidden'); });
DOM.overlay.addEventListener('click', () => { DOM.sidebar.classList.add('-translate-x-full'); DOM.overlay.classList.add('hidden'); });

renderNavigation();
loadArticle();


