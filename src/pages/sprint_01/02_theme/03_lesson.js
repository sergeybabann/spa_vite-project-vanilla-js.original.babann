export default function Sprint_01_Theme_02_Lesson_03() {
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
              <a href="/sprint_01/theme_02" class="back-link main__link-default">
                Тема 2: Шрифты и типографика
              </a>
          </div><!--bread-crumbs-->
      
      </div><!--header__wrapper-1-->
      </div><!--header content -->
      
      <!----- MAIN ----->
      <div class="margin__main">
      <div class="main">
          <div class="main__wrapper-1">
          <h1 class="main__title-1">Урок 3. Подключение внешних шрифтов</h1>
          <p>
           Шрифты бывают платными и бесплатными. Покупая дизайнерский шрифт, вы храните файлы в 
           отдельной папке на своём сайте вместе с файлом лицензии, которую предоставляет автор. 
           Важно платить за авторские шрифты, создавать их — огромный труд.
          </p>

          <p>
          Но есть и бесплатные шрифты. Из них собирают целые библиотеки. И самая большая такая 
          библиотека у <a class="external__link" href="https://fonts.google.com/" target="_blank">
          компании, которую нельзя называть</a>. 
          </p>

          <p>
          CSS-файл со списком директив <span class="text__accent-padding">@font-face</span> может 
          лежать рядом с вашим файлом <span class="text__accent-padding">index.html</span>, 
          а может быть где-то в интернете. Всё равно такой файл можно подключить в HTML-код тегом 
          <span class="text__accent-padding">&lt;link&gt;</span>, а в CSS — директивой
          <span class="text__accent-padding">@import</span>. 
          </p>

          <p>
          Так выглядит файл с некоторыми начертаниями шрифта Raleway в библиотеке 
          <span class="text__accent-padding">Google Fonts:</span>
          </p>

          <p>
          <a class="external__link" href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" 
          target="_blank">https://fonts.googleapis.com/css2?family=Raleway&display=swap.</a><br>
          Перейдите по ссылке и увидите знакомый CSS-код.   
          </p>

          <p>
          Попробуйте подключить этот шрифт к такой заготовке. Вам нужно всего лишь использовать
          знакомый тег <span class="text__accent-padding">&lt;link&gt;</span>.
          </p>
  
          
          
         
          <!-- 01 RUN CODE -->
          <div class="run__code-block">
          <a class="run__code-link" href="/run_code/01_sprint/02_theme/03_lesson/01_run_code/index.html" 
          target="_blank" rel="noopener noreferrer">Запустить код</a>
          <a class="run__code-link" href="/run_code/01_sprint/02_theme/03_lesson/01_run_code.zip" download>скачать блок кода</a>
          </div>

          <p>
          На Google Fonts вы можете отфильтровать и выбрать шрифты по разным параметрам: поддержке 
          нужного языка или дополнительных символов, категориям или доступной толщине. Вы даже 
          можете примерить шрифт к любой фразе.
          </p>

        <video width="640" height="360" controls>
        <source src="/run_code/01_sprint/02_theme/03_lesson/Screen_Recording_2022-05-24.mp4" 
        type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>

        <p>
        Вы можете выбрать сразу несколько шрифтов и только с нужными начертаниями. Сайт сгенерирует
        все необходимые теги HTML и свойства CSS. Обратите внимание, что тегов 
        <span class="text__accent-padding">&lt;link&gt;</span> будет создано несколько. Те, которые
        содержат атрибут <span class="text__accent-padding">preconnect</span>, 
        отвечают за то, чтобы заранее подключиться к серверам, до начала скачивание файлов шрифта.
        Это хитрости, которые использует Google, чтобы быстрее загружать шрифты вам на страницу.
        </p>

        <video width="640" height="360" controls>
        <source src="/run_code/01_sprint/02_theme/03_lesson/Screen_Recording_2022-05-24_2.mp4" 
        type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>

        <p>
        Если вы выбираете между размещением файлов шрифтов у себя в проекте и использованием 
        Google Fonts, не выбирайте. Смело скачивайте нужные шрифты и храните как можно ближе к 
        своим HTML-файлам. Это более быстрый и надёжный способ. 
        </p>

        <p>
        Если всё же нужно использовать шрифты из внешней библиотеки — подключайте ссылку на файл
        стилей через <span class="text__accent-padding">&lt;link&gt;</span> в HTML, а не через 
        <span class="text__accent-padding">@import</span> в CSS. Так скорость загрузки будет выше.
        </p>

        <p>
        Вот дубликат статьи с первым примером, но без заготовок под шрифт Raleway. Можете 
        попробовать подключить любые шрифты из Google Fonts. А можете поискать в интернете 
        альтернативную библиотеку. Такие тоже есть.
        </p>

        <!-- 02 RUN CODE -->
        <div class="run__code-block">
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/03_lesson/02_run_code/index.html" 
        target="_blank" rel="noopener noreferrer">Запустить код</a>
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/03_lesson/02_run_code.zip" download>скачать блок кода</a>
        </div>
        
        

        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main
        `
  return lesson
}
