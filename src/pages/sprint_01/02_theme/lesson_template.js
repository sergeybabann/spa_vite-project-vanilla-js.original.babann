export default function Sprint_01_Theme_02_Lesson_00() {
  const lesson = document.createElement('lesson')
  lesson.classList.add('lesson')

  /* innerHRML */
  lesson.innerHTML = `
    
    <!----- Header content ----->
    <div class="header2__content">
    <div class="header2__wrapper-1">
    <!----- Bread Crumbs ----->
        <div class="header2__bread-crumbs">
            <a href="/sprint_01" class="back-link main__link-default">Спринт 1: Семантика и лэйаут</a>           
            <a href="/sprint_01/theme_02" class="back-link main__link-default">Тема 2: Шрифты и типографика</a>
        </div><!--bread-crumbs-->
    
    </div><!--header__wrapper-1-->
    </div><!--header content -->
    
    <!----- MAIN ----->
    <div class="margin__main">
    <div class="main">
        <div class="main__wrapper-1">
        <h1 class="main__title-1">Урок 00. Заголовок Урока</h1>
        <p>
        Текст параграфа
        </p>

        
        
       
        <!-- 01 RUN CODE -->
        <div class="run__code-block">
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/00_lesson/01_run_code/index.html" 
        target="_blank" rel="noopener noreferrer">Запустить код</a>
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/00_lesson/01_run_code.zip" download>скачать блок кода</a>
        </div>
       
       
        <pre class="code__example-block">
        <code>
              
        </code>
        </pre>
        
        <span class="text__accent-padding"></span>

        <a class="external__link" href="" target="_blank"></a>

        <video width="640" height="360" controls>
        <source src="/run_code/01_sprint/02_theme/00_lesson/file.mp4" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>
       
    
        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main
        `
  return lesson
}
