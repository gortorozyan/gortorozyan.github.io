App.define("About", () => `
  <article class="about active" data-page="about" id='nav_1_main'>

    <header>
      <h2 class="h3 article-title">About Us</h2>
    </header>
    <section class="about-text">
         <p class="colcolorgr">START YOUR JOURNEY WITH US</p>
         <p class="colcolorgr">BECOME A PROGRAMMER</p>
        <p class="colcolorgr">STUDY NOW!</p>
      <button class='apply_now' id='apply_now' onclick='apply_click2()'>APPLY NOW!</button>
   </section>
    <section class="service">
      <h3 class="h4 service-title">What We Offer</h3>
      <ul class="service-list">

    <div class='main-page-image'></div>
        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/LXcMKN2s/coding-book-1.png" alt="icon" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title colcolorgr">Education</h4>
            <p class="service-item-text">Programming education based on practical, hands-on experience</p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/26XPdTVw/coding-language-1.png" alt="icon" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title colcolorgr">Software Development</h4>
            <p class="service-item-text">Efficient and precise technological services tailored to meet the modern demands of businesses․</p>
          </div>
        </li>

      </ul>
    </section>
    <div class="modal-container" data-modal-container>
      <div class="overlay" data-overlay></div>
      <section class="testimonials-modal">
        <button class="modal-close-btn" data-modal-close-btn>
          <span class="material-symbols-outlined">close</span>
        </button>
        <div class="modal-img-wrapper">
          <figure class="modal-avatar-box">
            <img src="https://i.postimg.cc/zGDHfn3G/avatar-1.png" alt="Additional Advantages" width="80" data-modal-img>
          </figure>
          <img src="https://i.postimg.cc/mZ00RwX7/icon-quote.png" alt="quote icon">
        </div>
        <div class="modal-content">
          <h4 class="h3 modal-title" data-modal-title>Additional Advantages</h4>
      
          <div class="modal-text" data-modal-text>
            <p><span class="colcolorbl">Innovative Solutions:</span> We use cutting-edge technologies to provide innovative, scalable solutions that give you a competitive edge in the market.<br/><br/>
         <span class="colcolorbl">Expert Consultation:</span> Our team offers expert consultation to help you plan, design, and implement the most efficient digital strategies.<br/><br/>
         <span class="colcolorbl">Ongoing Support and Maintenance:</span> We provide continuous support and maintenance, ensuring that your systems remain secure and up-to-date.<br/><br/>
         <span class="colcolorbl">Seamless Integration:</span> Our solutions integrate smoothly with your existing systems, ensuring minimal disruption and maximum efficiency.</p>
          </div>
        </div>
      </section>
    </div>
    <ul class='media-logos'>
      <li><a href=''><i class="fa-brands fa-square-instagram"></i></a></li>
      <li><a href=''><i class="fa-brands fa-square-facebook"></i></a></li>
      <li><a href=''><i class="fa-brands fa-linkedin"></i></a></li>
      <li id='footer-last-text'>© All Rights Reserved |    Codeenex 2025</li>
    </ul>

  </article>
`);