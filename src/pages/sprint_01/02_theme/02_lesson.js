export default function Sprint_01_Theme_02_Lesson_02() {
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
      <h1 class="main__title-1">Урок 2. Тонкости настройки шрифтов</h1>

      <p>Настроение — дело тонкое. Подберёшь не тот шрифт — и всё…</p>

      <p>Никто даже читать не будет, что написано на странице.</p>

      <p>
      Чтобы этого избежать, поговорим про всякие важные штуки при настройке шрифтов.
      </p>
      
      <p>Браузер работает с файлами шрифтов двумя способами: он ищет файл на компьютере или скачивает 
      его по ссылке, которую вы указали в свойстве <span class="text__accent-padding">src</span>.</p>
     

      <p>Найти готовый файл на компьютере обычно быстрее, чем качать что-то из интернета. Небольшим 
      изменением кода можно сделать так, что браузер не будет скачивать файл со шрифтом из интернета, 
      если на компьютере уже установлен шрифт с нужным именем. Для этого одним из значений
      <span class="text__accent-padding">src</span> указывает функцию 
      <span class="text__accent-padding">local()</span>.
      </p>

       <pre class="code__example-block">
        <code>
        @font-face {
        src: local('Best font ever'),
             local('BestFontEver'),
             local('best-font-ever'),
             url(путь к файлу.woff2) format('woff2'),
             url(путь к файлу.woff) format('woff'),
             url(путь к файлу.ttf) format('truetype'),
             url(путь к файлу.eot) format('eot');
}      
        </code>
        </pre>

        <p>В примере через запятую перечислены разные варианты написания имени шрифта. В зависимости от способа 
        установки шрифта на компьютер пользователя система может задавать разные имена каждому конкретному 
        шрифту. Мы пытаемся предположить возможные варианты. Если будет совпадение, шрифты не будут скачиваться
        из интернета. В противном случае браузер скачает шрифт в подходящем формате и применит его.</p>

        <p>В примере мы дописали локальные имена. Посмотрите, как это работает.</p>

        <!-- 01 RUN CODE -->
        <div class="run__code-block">
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/02_lesson/01_run_code/index.html" 
        target="_blank" rel="noopener noreferrer">Запустить код</a>
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/02_lesson/01_run_code.zip" download>скачать блок кода</a>
        </div>

        <p>Проверить, скачивает ли браузер шрифт, можно в инструментах разработчика. В панели Network
         («Сеть») с выбранным фильтром Font («Шрифт»). При перезагрузке страницы там отобразятся все 
         скачанные файлы шрифтов, используемые страницей. Если вы установите себе на компьютер шрифты, 
         размещённые по ссылкам в нашем примере, они перестанут загружаться и отображаться в панели 
         загрузок.
         </p>

     
         <video width="640" height="360" controls>
        <source src="/video/01_sprint/02_theme/02_lesson/Доступность.mp4" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>

        <p>Можно.</p>

        <p>Скачивание и отрисовка шрифта в браузере занимает время. При этом контент — самое важное, 
        что есть в интернете. Чем быстрее пользователи видят текст и чем меньше ждут, тем лучше. 
        Поэтому в CSS придумали варианты управления поведением браузеров во время загрузки шрифтов.
        </p>

         <pre class="code__example-block">
        <code>
         @font-face {
            src: url(./Inter-regular.woff) format('woff');
            font-family: 'Inter';
        }

        .block {
            font-family:  'Inter', 'Arial', sans-serif;
        }        
        </code>
        </pre>

        <p>
        Он видит, что на компьютере нет установленного шрифта <span class="text__accent-padding">Inter</span>
        , но есть установленный <span class="text__accent-padding">Arial</span>. 
        Пока скачивается файл <span class="text__accent-padding">Inter</span> по ссылке из 
        <span class="text__accent-padding">@font-face</span>, браузер отрисовывает весь текст доступным
        шрифтом <span class="text__accent-padding">Arial</span> и лишь после скачивания начинает 
        заменять текст на <span class="text__accent-padding">Inter</span>. Из CSS мы можем управлять тем,
        будет ли показана первая отрисованная версия текста или браузер дождётся замены, а потом 
        отобразит результат. 
        </p>

        <p>
        Ещё может возникнуть ситуация, что шрифт не скачается по каким-то причинам. Тогда браузеру тоже
        нужно что-то предпринять. Для такого есть настройки свойства <span class="text__accent-padding">font-display</span>
        . Этот дескриптор описывают внутри правила <span class="text__accent-padding">@font-face</span>.
        </p>

        <p>
        Вот две самые популярные настройки, из которых чаще всего нужно выбирать:
        </p>

        <ul>
        <li><span class="text__accent-padding">font-display: block;</span> — отрисует прозрачным 
        альтернативным шрифтом текст, дождётся загрузки и перерисует видимым скачанным шрифтом весь текст.</li>
        <li>
        <span class="text__accent-padding">font-display: swap;</span> — сначала покажет альтернативный шрифт, а когда загрузит нужный, заменит 
        отображение текста. Может возникнуть мигание, но текст будет виден почти сразу.
        </li>
        </ul>

        <p>
        Про детали поведения <span class="text__accent-padding">font-display</span> классно пишут наши друзья
        из <a class="external__link" href="https://doka.guide/css/font-display/" target="_blank">Доки</a>. Посмотрите в ней остальные значения и 
        глубокий разбор механики отрисовки шрифтов.
        </p>

        <p>
        В примере про предвкушение свершений мы добавили стратегию загрузки и отображения шрифтов 
        <span class="text__accent-padding">swap</span>, ведь здесь текст важнее шрифтов. На этом закончим
        с этим примером, но не с настройками текстовых элементов.
        </p>

        <p>
        Само собой, с новыми свершениями тоже не закончим 
        </p>

        <!-- 02 RUN CODE  -->
        <div class="run__code-block">
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/02_lesson/02_run_code/index.html" 
        target="_blank" rel="noopener noreferrer">Запустить код</a>
        <a class="run__code-link" href="/run_code/01_sprint/02_theme/02_lesson/02_run_code.zip" download>скачать блок кода</a>
        </div>
    

  
      </div><!--main__wrapper-1-->
      </div><!--main-->
      </div><!--margin__main
      `
  return lesson
}
