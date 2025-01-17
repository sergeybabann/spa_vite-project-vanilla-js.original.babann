export default function Sprint_01_Theme_01_Lesson_01() {
    const lesson = document.createElement('div');
    lesson.classList.add('lesson');
    lesson.innerHTML = `

<!----- MAIN ----->
<div class="main">
    <div class="main__wrapper-1">
    <div>
        <h1 class="main__title-1">1 Спринт: Семантика и лэйаут</h1>
        <h2 class="main__title-2">Интро в Спринт. <span class="main__span-title-1">Урок 1</span></h2>
    </div>
        
        <!----- Bread Crumbs ----->
        <div class="main__bread-crumbs">
        <a href="/sprint_01" class="back-link main__link-default">Назад в Спринт 01</a>           
        <a href="/sprint_01/theme_01" class="back-link main__link-default">Назад в Тему 01</a>
        </div><!--bread-crumbs-->
        </div><!--main__wrapper-1-->
        </div><!--main-->
    `;
    return lesson;
}
