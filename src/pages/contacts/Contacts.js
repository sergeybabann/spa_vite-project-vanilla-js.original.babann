export default function Contacts() {
    const contacts = document.createElement('contacts');
    contacts.classList.add('contacts');
    contacts.innerHTML = `
    <div class="header__content">
            <div class="header__wrapper-1">
            <h1>Yandex Practicum</h1>
            <h2>Contacts</h2>
            </div><!--header__wrapper-1-->
            
            <!-- Menu Navigation -->
            <div class="header__menu">
                <ul class="header__menu-list">
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/">Home</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/sprint_01">Sprint 01</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/contacts">Contacts</a>
                </li>            
                </ul>
            </div>
            
            <div class="sidebar2">
                <div class="sidebar2__title">
                    1 спринт: Семантика и лэйаут 
                </div>
                
                <ul class="sidebar2__list">
                    <li class="sidebar2__item"><a class="sidebar2__link">1. Интро в спринт</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">2. Шрифты и типографика</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">3. Почему вы выбрали практикум</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">4. Семантика</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">5. Глобальные атрибуты</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">6. Флексбокс-верстка</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">7. Расскажите про ваше обучение</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">8. Готовый кейс: "С чистого листа"</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">9. Позиционирование элементов</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">10. Grid layout, часть 1</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">11. Дополнительные статьи</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">12. Bash и Git. Основы</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">13. Проект 1: "Оно тебе надо"</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">14. Сдача проектной работы "Оно тебе надо"</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">15. Обратная связь по спринту.</a></li>
                </ul>
            </div>
        </div>
    `;
    return contacts;
}




// console.log('About Page Script Loaded');
