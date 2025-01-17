export default function Home() {
    const home = document.createElement('home');
    home.classList.add('home');
    home.innerHTML = `
        <div class="header__content">
            <div class="header__wrapper-1">
            <h1>Yandex Practicum</h1>
            <h2>Home</h2>
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
                    <a class="header__menu-link" href="/sprint_02">Sprint 02</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__menu-link" href="/sprint_03">Sprint 03</a>
                </li>                         
                </ul>
            </div>
            
            <div class="sidebar2">
                <div class="sidebar2__title">
                    Содержание
                </div>
                
                <ul class="sidebar2__list">
                    <li class="sidebar2__item"><a class="sidebar2__link">LINK</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">LINK</a></li>
                    <li class="sidebar2__item"><a class="sidebar2__link">LINK</a></li>
                </ul>
            </div>
        </div>
    `;
    return home;
}

// console.log('Home Page Script Loaded');
