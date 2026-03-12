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
        <h1 class="wiki-title-gradient">Памятка по статьям УАК</h1>
        
        <div class="wiki-block-info">
            Данная памятка содержит перечень наиболее часто встречающихся статей УАК штата Сан-Андреас. 
            Классификация по юрисдикции и уровню розыска («звездам») для быстрой ориентации в ситуации.
        </div>

        <h2 class="section-title">РАЗДЕЛ 1. ПРЕСТУПЛЕНИЯ ПРОТИВ ЛИЧНОСТИ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">6.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Нанесение тяжких телесных <span class="stars">★★★ / ★★★★</span></span>
                        <span class="cyber-desc">ч.1: Побои (3 года). ч.2: Умышленное нанесение особо тяжких (4 года).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">6.2</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Причинение смерти <span class="stars">★★★★ / ★★★</span></span>
                        <span class="cyber-desc">ч.1: Убийство (4 года). ч.2: По неосторожности или в состоянии аффекта (3 года).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">6.3</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Тяжкое убийство <span class="stars">★★★★★</span></span>
                        <span class="cyber-desc">Убийство 2+ лиц, с особой жестокостью, группой лиц, при исполнении. (5 лет).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 2. ПРЕСТУПЛЕНИЯ В СФЕРЕ ЭКОНОМИКИ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">10.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Кража / Взлом <span class="stars">★★★ / ★★★★</span></span>
                        <span class="cyber-desc">10.1: Хищение свыше $15.000 (3 года). 10.1.1: Со взломом хранилища/сейфа (4 года).<br><i>Юрисдикция: Региональная/Финансовая/Федеральная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">10.4</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Разбой <span class="stars">★★★★</span></span>
                        <span class="cyber-desc">Нападение с насилием, опасным для жизни, или угрозой его применения (4 года).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">10.5</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Угон ТС <span class="stars">★★★</span></span>
                        <span class="cyber-desc">Неправомерное завладение автомобилем или иным ТС (3 года).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
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
                        <span class="cyber-desc">ч.1: Охраняемый объект (3 года). ч.2: Особо охраняемый (Форт-Занкудо, офис FIB и др.) (4-5 лет).</span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">12.8</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Оборот оружия и спецсредств <span class="stars">★★★★</span></span>
                        <span class="cyber-desc">ч.1: Сбыт/перевозка. ч.2: Хранение/ношение. (4 года или штраф до $20.000).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">12.8.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Спецсредства ГОС образца <span class="stars">★★★★★</span></span>
                        <span class="cyber-desc">Бронежилеты, тазеры, дубинки с серийными номерами гос. образца (5 лет).<br><b>Важно:</b> Штраф не предусмотрен. Самая «дорогая» статья.</span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">12.11</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Создание НВФ <span class="stars">★★★★★</span></span>
                        <span class="cyber-desc">Создание, руководство или финансирование незаконного вооруженного формирования (5 лет).<br><i>Юрисдикция: Федеральная.</i></span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 4. ПРЕСТУПЛЕНИЯ В СФЕРЕ НАРКОТИКОВ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">13.2</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Оборот наркотиков <span class="stars">★★★★ / ★★★★★</span></span>
                        <span class="cyber-desc">13.2: От 3г (4 года или штраф $20k). 13.2.1: Особо крупный (свыше 25г) или сбыт (5 лет).<br><i>Примечание: Лицензия KNN разрешает до 5 грамм.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">13.4</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Наркотики и госслужащие <span class="stars">★★★★★</span></span>
                        <span class="cyber-desc">Любые действия с наркотиками сотрудниками гос. структур (5 лет).<br><i>Освобождаются только спецотделы (DEA, K-9 и др.) при исполнении.</i></span>
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
                        <span class="cyber-desc">15.1 ч.1: Выход за пределы полномочий (4 года). ч.2: С насилием или оружием (5 лет).<br>15.1.1: Вмешательство в процесс задержания или ареста (5 лет).</span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">15.4</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Взятка / Халатность <span class="stars">★★★★★ / ★★★★</span></span>
                        <span class="cyber-desc">15.4: Получение взятки (5 лет). 15.6: Халатность (4 года или штраф $20.000).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 6. ПРЕСТУПЛЕНИЯ ПРОТИВ ПРАВОСУДИЯ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">16.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Воспрепятствование правосудию <span class="stars">★★★★</span></span>
                        <span class="cyber-desc">ч.4: Неуважение к суду (порядок, неявка) (4-5 лет или штраф $20.000).<br><i>Юрисдикция: Федеральная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">16.4</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Незаконное задержание <span class="stars">★★★★★</span></span>
                        <span class="cyber-desc">Заведомо незаконное заключение или содержание под стражей (5 лет).<br><i>Юрисдикция: Федеральная/Региональная.</i></span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">16.15</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Уклонение от наказания <span class="stars">★...★★★★★</span></span>
                        <span class="cyber-desc">Уклонение от лишения свободы (10-19 суток КПЗ или 2-5 лет тюрьмы).<br><i>При повинной — наказание сокращается вдвое.</i></span>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">РАЗДЕЛ 7. АДМИНИСТРАТИВНЫЕ НАРУШЕНИЯ</h2>
        <div class="wiki-block-cyber">
            <div class="cyber-list">
                <div class="cyber-item">
                    <span class="cyber-marker">20.1</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Хулиганство / Внешний вид</span>
                        <span class="cyber-desc">20.1: Маты, жесты, танцы в ГУ (Штраф $3k-$7k).<br>20.3 ч.1: Нет одежды. ч.2: Алкоголь/Опьянение (Штраф $5k-$20k).</span>
                    </div>
                </div>
                <div class="cyber-item">
                    <span class="cyber-marker">20.4</span>
                    <div class="cyber-content">
                        <span class="cyber-label">Оружие / Имущество / Браконьерство</span>
                        <span class="cyber-desc">20.4: Обнажение оружия ($15k-$30k + изъятие).<br>21.3: Повреждение имущества по неосторожности ($15k + ущерб).<br>22.1: Охота/рыбалка без лицензии ($5k-$20k + изъятие).</span>
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



