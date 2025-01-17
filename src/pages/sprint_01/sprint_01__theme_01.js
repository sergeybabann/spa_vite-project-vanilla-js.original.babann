export default function Sprint_01_Theme_01() {
    const lesson = document.createElement('div');
    lesson.classList.add('lesson');
    lesson.innerHTML = `
<div class="main">
    <div class="main__wrapper-1">
    <div>
        <h1 class="main__title-1">1 Спринт: Семантика и лэйаут</h1>
    </div>
                
        <div>
        <a href="/sprint_01" class="back-link main__link-default">Назад в Спринт 01</a>
        </div>
        
        
        <h2>Уроки</h2>
        <!----- Lessons ----->
        <ul class="main__list-1">
        <li class="main__list-1-item">
            <a class="main__link-default" href="/sprint_01/theme_01/lesson_01">01 Урок</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/sprint_01/theme_01/lesson_02">02 Урок</a>
        </li>
        <li class="main__list-1-item">
            <a class="main__link-default" href="/sprint_01/theme_01/lesson_03">03 Урок</a>
        </li>
        </ul>
        </div><!--main__wrapper-1-->
        </div><!--main-->
    `;
    return lesson;
}
