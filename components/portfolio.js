App.define("Portfolio", () => `
  <article class="about" data-page="portfolio" id='nav_2_main'>

   <header><h2 class="h3 article-title">Courses & Packages</h2></header>

    <section class="projects">
      <ul class="service-list">

        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/P5vZh7Km/js-course-logo.png" alt="javascript" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">JavaScript</h4>
            <p class="service-item-text">Learn JavaScript to create interactive websites</p>
            <button class="course-btn" data-course="javascript">
              View the course
            </button>
            <h5 class='duration-text'>Duration: 5 months</h5>
            <h5 class='course-value'>35,000֏</h5>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/jdH2Xr83/php-logo.png" alt="php" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">PHP(laravel)</h4>
            <p class="service-item-text">Dynamic web pages and applications in PHP</p>
            <button class="course-btn" data-course="php">
            View the course
            </button>
            <h5 class='duration-text'>Duration: 3 months</h5>
              <h5 class='course-value'>30,000֏</h5>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img  src="https://i.postimg.cc/VvFgqV2S/python-course-img-Photoroom-1.png" alt="python" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">Python</h4>
            <p class="service-item-text">Learn Python and create programs and apps</p>
            <button class="course-btn" data-course="python">
              View the course
            </button>
            <h5 class='duration-text'>Duration: 3 months</h5>
              <h5 class='course-value'>40,000֏</h5>
          </div>
        </li>

         <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/VL1HJj2r/react-logo-2.png" alt="react" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">React.js</h4>
            <p class="service-item-text">Learn React.js to build interactive and dynamic websites</p>
            <button class="course-btn" data-course="react_js">
              View the course
            </button>
            <h5 class='duration-text'>Duration: 4 months</h5>
              <h5 class='course-value'>50,000֏</h5>
          </div>
        </li>
        
        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/P5vZh7Km/js-course-logo.png" alt="javascript" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">Next.js</h4>
            <p class="service-item-text">Next.js to build fast and modern websites</p>
            <button class="course-btn" data-course="next_js">
              View the course
            </button>
            <h5 class='duration-text'>Duration: 3 months</h5>
              <h5 class='course-value'>50,000֏</h5>
          </div>
        </li>

          <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/0j3QB8Th/djangologo-removebg-preview.png" alt="javascript" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">Python(Django)</h4>
            <p class="service-item-text">Learn Python and Django to build powerful and scalable websites</p>
            <button class="course-btn" data-course="django">
              View the course
            </button>
            <h5 class='duration-text'>Duration: 5 months</h5>
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
          <ion-icon name="close-outline"></ion-icon>
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