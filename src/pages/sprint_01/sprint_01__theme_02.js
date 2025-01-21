export default function Sprint_01_Theme_02() {
    const lesson = document.createElement('lesson');
    lesson.classList.add('lesson');
    lesson.innerHTML = `
        <div class="header2__content">
<div class="header2__wrapper-1">
<!----- Bread Crumbs ----->
    <div class="header2__bread-crumbs">
        <a href="/sprint_01" class="back-link main__link-default">Спринт 1: Семантика и лэйаут</a>           
    </div><!--bread-crumbs-->
</div><!--header__wrapper-1-->
</div><!--header2 content -->

<!----- MAIN ----->
<div class="margin__main">
<div class="main">
    <div class="main__wrapper-1">
    <h1 class="main__title-1">Тема 2: Шрифты и типографика</h1>
        
        <h3 class="main__title-3">Уроки</h3>
        <!----- Lessons ----->
        <ul class="main__list-1">
        <li class="main__list-1-item">
            <a class="main__link-default" href="/sprint_01/theme_02/lesson_01">1. Подключение шрифтов к странице</a>         
        </li>
        <li class="main__list-1-item">
        <a class="main__link-default" href="/sprint_01/theme_02/lesson_02">2. Тонкости настройки шрифтов</a>
        </li>
        <li class="main__list-1-item">
        <a class="main__link-default" href="/sprint_01/theme_02/lesson_03">3. Подключение внешних шрифтов</a>
        </li>
        <li class="main__list-1-item">
        <a class="main__link-default" href="/sprint_01/theme_02/lesson_04">4. Оформление текста</a>
        </li>
        <li class="main__list-1-item">
        <a class="main__link-default" href="/sprint_01/theme_02/lesson_05">5. Переполнение текстовых блоков</a>
        </li>



        </ul>
        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main-->
    `;
    return lesson;
}
