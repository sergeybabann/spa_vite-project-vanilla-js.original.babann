export default function Sprint_01_Theme_02() {
    const lesson = document.createElement('div');
    lesson.classList.add('lesson');
    lesson.innerHTML = `
        <div class="main">
    <div class="main__wrapper-1">
    <div>
        <h1>Спринт 1</h1>
        <h2>Тема 2:</h2>
        <p>Welcome!</p>
        </div>
        
        <div>
        <a href="/sprint_01" class="back-link main__link-default">Back to Sprint 01</a>
        </div>
        </div><!--main__wrapper-1-->
        </div><!--main-->
    `;
    return lesson;
}
