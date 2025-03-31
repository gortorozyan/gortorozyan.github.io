App.define("Courses", () => `
  <article class="about" data-page="courses" id='nav_2_main'>

   <header><h2 class="h3 article-title">Courses & Packages</h2></header>

    <section class="projects">
      <ul class="service-list">

        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/P5vZh7Km/js-course-logo.png" alt="javascript" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">JavaScript</h4>
            <p class="service-item-text" id='trans_text26'>Learn JavaScript to create interactive websites</p>
            <button class="course-btn" id='trans_text20' data-course="javascript">
              View the course
            </button>
            <h5 class='duration-text' id='trans_text14'>Duration: 5 months</h5>
            <h5 class='course-value'>35,000֏</h5>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/jdH2Xr83/php-logo.png" alt="php" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">PHP(laravel)</h4>
            <p class="service-item-text" id='trans_text27'>Learn PHP and Laravel to build dynamic web pages and applications</p>
            <button class="course-btn" id='trans_text21' data-course="php">
            View the course
            </button>
            <h5 class='duration-text' id='trans_text15'>Duration: 3 months</h5>
              <h5 class='course-value'>30,000֏</h5>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img  src="https://i.postimg.cc/VvFgqV2S/python-course-img-Photoroom-1.png" alt="python" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">Python</h4>
            <p class="service-item-text" id='trans_text28'>Learn Python and create programs and apps</p>
            <button class="course-btn" id='trans_text22' data-course="python">
              View the course
            </button>
            <h5 class='duration-text' id='trans_text16'>Duration: 3 months</h5>
              <h5 class='course-value'>40,000֏</h5>
          </div>
        </li>

         <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/VL1HJj2r/react-logo-2.png" alt="react" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">React.js</h4>
            <p class="service-item-text" id='trans_text29'>Learn React.js to build interactive and dynamic websites</p>
            <button class="course-btn" id='trans_text23' data-course="react_js">
              View the course
            </button>
            <h5 class='duration-text' id='trans_text17'>Duration: 4 months</h5>
              <h5 class='course-value'>50,000֏</h5>
          </div>
        </li>
        
        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/P5vZh7Km/js-course-logo.png" alt="javascript" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">Next.js</h4>
            <p class="service-item-text" id='trans_text30'>Learn Next.js to build fast and modern websites</p>
            <button class="course-btn" id='trans_text24' data-course="next_js">
              View the course
            </button>
            <h5 class='duration-text' id='trans_text18'>Duration: 3 months</h5>
              <h5 class='course-value'>50,000֏</h5>
          </div>
        </li>

          <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/0j3QB8Th/djangologo-removebg-preview.png" alt="javascript" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">Python(Django)</h4>
            <p class="service-item-text" id='trans_text31'>Learn Python and Django to build powerful and scalable websites</p>
            <button class="course-btn" id='trans_text25' data-course="django">
              View the course
            </button>
            <h5 class='duration-text' id='trans_text19'>Duration: 5 months</h5>
              <h5 class='course-value'>40,000֏</h5>
          </div>
        </li>
   </ul>
    </section>
    <!-- Դասերի փոփափ մոդալ -->
    <div class="modal-container" data-course-modal>
      <div class="overlay" data-course-overlay></div>
      <section class="testimonials-modal">
        <button class="modal-close-btn" data-course-close>
          <i class="fa-solid fa-xmark" name="close-outline"></i>
        </button>
        <div class="modal-content">
          <h4 class="h3 modal-title" data-course-title></h4>
          <ul class="modal-text" data-course-lessons></ul>
          <button class='data_course_btn_apply' data_course_btn_apply onclick='apply_click()'>APPLY TO COURSE</button>
        </div>
      </section>
    </div>

  </article>
`);