import './assets/styles/main.scss';
import Home from './pages/home/Home.js';
/*-------------------- Sprint 01 --------------------*/
import Sprint_01 from './pages/sprint_01/sprint_01.js';
/*----- Theme 01 -----*/
import Sprint_01_Theme_01 from './pages/sprint_01/sprint_01__theme_01.js';
import Sprint_01_Theme_01_Lesson_01 from'./pages/sprint_01/01_theme/01_lesson.js';
/*----- Theme 01 -----*/
import Sprint_01_Theme_02 from './pages/sprint_01/sprint_01__theme_02.js';

/*-------------------- Sprint 02 --------------------*/
import Sprint_02 from './pages/sprint_02/sprint_02.js';
import Sprint_03 from './pages/sprint_03/sprint_03.js';
import Contacts from './pages/contacts/Contacts.js';


const app = document.getElementById('app');

function navigate(route) {
    app.innerHTML = ''; // Очищаем содержимое

    switch (true) {
        case route === '/contacts':
            app.appendChild(Contacts());
            break;
        case route === '/sprint_01':
            app.appendChild(Sprint_01());
            break;
        case route === '/sprint_01/theme_01':
            app.appendChild(Sprint_01_Theme_01());
            break;
        case route === '/sprint_01/theme_01/lesson_01':
            app.appendChild(Sprint_01_Theme_01_Lesson_01());
            break;
        case route === '/sprint_01/theme_02':
            app.appendChild(Sprint_01_Theme_02());
            break;
        case route === '/sprint_02':
            app.appendChild(Sprint_02());
            break;
        case route === '/sprint_03':
            app.appendChild(Sprint_03());
            break;
        case route === '/':
        default:
            app.appendChild(Home());
            break;
    }
}

// Навигация по URL
window.onpopstate = () => navigate(window.location.pathname);

// Обработчик кликов на ссылки
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const route = e.target.getAttribute('href');
        window.history.pushState({}, '', route);
        navigate(route);
    }
});

// Инициализация начальной страницы
navigate(window.location.pathname);
