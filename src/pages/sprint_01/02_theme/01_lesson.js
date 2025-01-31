export default function Sprint_01_Theme_02_Lesson_01() {
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
    <h1 class="main__title-1">Урок 1. Подключение шрифтов к странице</h1>
    <p>
    Перед вами текст — самая базовая форма контента в интернете. Изначально веб задумывался именно 
    для обмена текстом между университетами, а местом просмотра видео с котиками стал значительно позже.
    Простой текст в разметке HTML решает задачу донесения смысла, но не транслирует визуального 
    настроения. 
    </p>
    
    <!-- 01 RUN CODE -->
    <div class="run__code-block">
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/01_run_code/index.html" 
    target="_blank" rel="noopener noreferrer">Запустить код</a>
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/01_run_code.zip" download>скачать блок кода</a>
    </div>
    
    <p>
    В современном интернете вкус текстовой информации дают шрифты. Взгляните на сайт издания<br> 
    <a href="https://www.nytimes.com/" class="external__link" target="_blank">The New York Times.</a> 
    Это шрифтовое решение можно называть культовым.
    </p>
    
   <p>
   Сейчас сложно представлять ранний веб, в котором набор шрифтов ограничивался системными. 
   В те времена нельзя было выбрать конкретный шрифт, пользовались их типами (семействами). 
   Самих шрифтов было несколько, совсем не такое разнообразие, как сейчас. Самым простым способом 
   назначить шрифт было указание свойства <span class="text__accent-padding">font-family</span>
   со значениями 
   <span class="text__accent-padding">serif</span>
   <span class="text__accent-padding">sans-serif</span>
   <span class="text__accent-padding">monospace</span>
   <span class="text__accent-padding">cursive</span>
   <span class="text__accent-padding">fantasy</span>
   </p>
   
   <p>
   <span class="text__accent-padding">serif</span> — системный шрифт с засечками. 
   Засечки — это такие зарубки по краям, будто вы выбиваете букву молотком и стамеской на камне.
   </p>
   
   <img src="/images/01_sprint/02_theme/01_lesson/01_Image.png" alt="">
   
   <p>
   <span class="text__accent-padding">sans-serif</span>
   — системный шрифт без засечек.
   </p>
   
   <p>
   <span class="text__accent-padding">monospace</span>
   — шрифт с одинаковой шириной символов. Очень хорош для демонстрации кода.
   </p>
   
   <p>
   <span class="text__accent-padding">cursive</span>
   — наклонный системный шрифт.
   </p>
   
   <p>
   <span class="text__accent-padding">fantasy</span>
   — декоративный системный шрифт.
   </p>
   
   <p>
   Посмотрите, как выглядят разные семейства. Если в вашей операционной системе нет ни одного 
   шрифта из семейства <span class="text__accent-padding">cursive</span> или 
   <span class="text__accent-padding">fantasy</span>, вы можете не заметить разницу между ними 
   и другими шрифтами.
    Но скоро вы научитесь добавлять шрифты так, чтобы они отображались у всех пользователей без 
    исключения.
   </p>
    
    <!-- 02 RUN CODE  -->
    <div class="run__code-block">
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/02_run_code/index.html" 
    target="_blank" rel="noopener noreferrer">Запустить код</a>
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/02_run_code.zip" download>скачать блок кода</a>
    </div>
    
    <p>
    Совсем недавно в CSS появилось новое семейство шрифтов, его теперь тоже можно использовать: 
    <span class="text__accent-padding">system-ui</span> — шрифт системы, 
    установленный по умолчанию.
    </p>
    
    <p>
    Попробуйте раскомментировать свойства в CSS, которые мы написали. 
    Проанализируйте, что происходит в примере.
    </p>
    
        <!-- 03 RUN CODE UNCOMMETNTED -->
    <div class="run__code-block">
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/03_run_code/index.html" 
    target="_blank" rel="noopener noreferrer">Запустить код</a>
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/03_run_code.zip" download>скачать блок кода</a>
    </div>
    
    <p>
    Есть классный способ показать любой шрифт на странице: скачать его к себе на компьютер, 
    установить, а потом доработать правило для свойства 
    <span class="text__accent-padding">font-family</span> так:
    </p>
    
    <pre class="code__example-block">
            <code>
.text {
    font-family: 'Имя шрифта с моего компьютера', sans-serif;
}
            </code>
          </pre>
          
          <p>
          При таком подходе блок с классом <span class="text__accent-padding">text</span>
          будет отрисован со скачанным на компьютер шрифтом. 
          Ваш браузер возьмёт этот шрифт из системы и применит. Но пользователи интернета без 
          аналогичного шрифта на своих компьютерах увидят системный шрифт без засечек. Не совсем то, 
          что нужно, но к результату мы приближаемся.
          </p>
          
          <p>
          Вот пример. Посмотрите на стили и результат, а потом установите шрифт  по ссылке себе 
          на компьютер и обновите страницу.
          </p>
          
          <a href="/download_code/01_sprint/02_theme/01_lesson/01_download/YanoneKaffeesatz-Regular.ttf"
            class="download__link" download>YanoneKaffeesatz-Regular.ttf
          </a>
          
          <!-- 04 RUN CODE -->
    <div class="run__code-block">
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/04_run_code/index.html" 
    target="_blank" rel="noopener noreferrer">Запустить код</a>
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/04_run_code.zip" download>скачать блок кода</a>
   </div>
   
   <p>
   Вы могли заподозрить неладное: ведь мы уже использовали в тренажёре шрифты, которых не было на вашем
    компьютере. Верное замечание! Дело в том, что в тренажёре мы подключили шрифты заранее. Осталось 
    научить вас, как делать это самим.
   </p>
   
   <p>
   Шрифт подключают в два этапа:
   </p>
   
   <ol>
    <li>Декларация шрифта.</li>
    <li>Применение шрифта к элементу.</li>
   </ol>
   
   <p>
   Сначала нужно указать браузеру, где брать шрифт и что с ним делать. Это и есть декларация. 
   Её выполняют директивой <span class="text__accent-padding">@font-face</span> и обычно 
   располагают в начале CSS-файла:
   </p>
   
   <pre class="code__example-block">
   <code>
   @font-face {
    src: url(путь к файлу);
   }
</code>
</pre>

<p>
Свойство <span class="text__accent-padding">src</span> содержит путь к файлу шрифта. 
</p>

<p>
Теперь надо дать шрифту имя. За это отвечает свойство 
<span class="text__accent-padding">font-family:</span>
</p>

<pre class="code__example-block">
<code>
@font-face {
    src: url(путь к файлу);
    font-family: 'Best Font Ever'; 
}
</code>
</pre>

<p>
Этого достаточно, чтобы шрифт «заработал» — теперь он отобразится корректно.
</p>

<p>
Декларация окончена. Мы объяснили браузеру, что делать со шрифтом. 
Дело за малым — применить его к элементу.
</p>

<pre class="code__example-block">
<code>
div {
    font-family: 'Best Font Ever';
    font-weight: bold;
    font-style: italic;
}
</code>
</pre>

<p>
При подключении шрифта к странице может возникнуть проблема: файл шрифта «потеряется» по пути 
от сервера или сервер со шрифтом будет недоступен. На такие случаи принято указывать альтернативные 
шрифты, которые применятся к элементу. Если загружаемый шрифт без засечек, лучше назначить популярные 
альтернативы без засечек.
</p>

<pre class="code__example-block">
<code>
div {
    /* Если шрифт из файла не загрузился, использовать Arial или Helvetica, 
    на крайний случай — любой шрифт без засечек в системе пользователя */
    font-family: 'Best Font Ever', 'Arial', 'Helvetica', sans-serif;
    font-weight: bold;
    font-style: italic;
}
</code>
</pre>

<p>
Вот небольшое упражнение. Читайте комментарии в CSS и добейтесь того, чтобы шрифты применились.
</p>

    <!-- 05 RUN CODE -->
    <div class="run__code-block">
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/05_run_code/index.html" 
    target="_blank" rel="noopener noreferrer">Запустить код</a>
    <a class="run__code-link" 
    href="/run_code/01_sprint/02_theme/01_lesson/05_run_code.zip" 
    download>скачать блок кода</a>
   </div>
   
   <p>
   Один и тот же шрифт поставляют с файлами в различных начертаниях — отличается жирность, наклон. 
   Каждое начертание подключают отдельно:
   </p>
   
   <pre class="code__example-block">
   <code>
@font-face {
    src: url(путь к файлу обычного начертания);
    font-family: 'Best Font Ever';
}
@font-face {
    src: url(путь к файлу курсива);
    font-family: 'Best Font Ever';
    font-style: italic;
}
@font-face {
    src: url(путь к файлу полужирного начертания);
    font-family: 'Best Font Ever';
    font-weight: bold;
}
@font-face {
    src: url(путь к файлу полужирного курсива);
    font-family: 'Best Font Ever';
    font-style: italic;
    font-weight: bold;
}
   </code>
   </pre>
   
   <p>
   Шрифты бывают разных форматов. Чтобы шрифты работали во всех современных браузерах, 
   достаточно подключить файлы в форматах WOFF2 и WOFF. Они есть в любом архиве шрифтов для веба. 
   </p>
   
   <p>
   Старые браузеры не умеют работать с WOFF2 и WOFF, поэтому нужно подключать альтернативные шрифты. 
   Чтобы создать список шрифтов в разных форматах, используют параметр 
   <span class="text__accent-padding">format</span>. Браузер прочитает 
   такой список и выберет первый найденный шрифт, с которым умеет работать.
   </p>
   
   <pre class="code__example-block">
   <code>
   @font-face {
    src: url(путь к файлу.woff2) format('woff2'),
             url(путь к файлу.woff) format('woff'),
             url(путь к файлу.ttf) format('truetype'),
             url(путь к файлу.eot) format('eot');
    }
   </code>
   </pre>
   
   <p>
   Поддержку разных форматов браузерами можно уточнить
   (просто введите формат шрифта в поле ввода, и сайт покажет таблицу совместимости с разными браузерами)
   на сайте <a class="external__link" href="https://caniuse.com/" target="_blank">CanIUse.com.</a>
   </p>
   
   <p>
   Описания шрифтов получаются достаточно массивными. Поэтому удобно создавать для них отдельные 
   файлы и подключать их к <span class="text__accent-padding">index.html</span>
    отдельными тегами <span class="text__accent-padding">link</span> . 
   </p>
   
   <p>
   Подключать файл со шрифтами нужно выше, чем файл с основными стилями. Тогда сначала на страницу 
   загрузятся шрифты, а потом правила их использования. Чтобы разобраться в этом, поработайте с примером 
   ниже. Вам нужно раскомментировать подключение файла с шрифтами и дописать недостающие строки CSS. 
   Все указания внутри.
   </p>
   
   <!-- 06 RUN CODE -->
    <div class="run__code-block">
    <a class="run__code-link" href="/run_code/01_sprint/02_theme/01_lesson/06_run_code/index.html" 
    target="_blank" rel="noopener noreferrer">Запустить код</a>
    <a class="run__code-link" 
    href="/run_code/01_sprint/02_theme/01_lesson/06_run_code.zip" 
    download>скачать блок кода</a>
   </div>
   

    </div><!--main__wrapper-1-->
    </div><!--main-->
    </div><!--margin__main
    `
  return lesson
}
