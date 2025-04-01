App.define("Home", () => `
  <article class="about active" data-page="home" id='nav_1_main'>

    <header>
      <h2 class="h3 article-title">Home</h2>
    </header>
    <section class="about-text">
         <p class="colcolorgr" id='trans_text1'>START YOUR JOURNEY WITH US</p>
         <p class="colcolorgr" id='trans_text2'>BECOME A PROGRAMMER</p>
        <p class="colcolorgr" id='trans_text3'>STUDY NOW!</p>
      <button class='apply_now' id='trans_text4' onclick='apply_click2()'>Apply Now!</button>
   </section>
    <section class="service">
      <h3 class="h4 service-title" id='trans_text5'>What We Offer</h3>
      <ul class="service-list">

    <div class='main-page-image'></div>
        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/LXcMKN2s/coding-book-1.png" alt="icon" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title colcolorgr" id='trans_text6'>Education</h4>
            <p class="service-item-text" id='trans_text8'>Programming education based on practical, hands-on experience</p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="https://i.postimg.cc/26XPdTVw/coding-language-1.png" alt="icon" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title colcolorgr" id='trans_text7'>Software Development</h4>
            <p class="service-item-text" id='trans_text9'>Efficient and precise technological services tailored to meet the modern demands of businesses․</p>
          </div>
        </li>

      </ul>
    </section>
    <ul class='media-logos'>
      <li><a href=''><i class="fa-brands fa-square-instagram"></i></a></li>
      <li><a href='https://www.facebook.com/people/Codeenex/61574522297381/?notif_id=1743427845595784&notif_t=profile_plus_admin_invite&ref=notif'><i class="fa-brands fa-square-facebook"></i></a></li>
      <li><a href='https://linkedin.com/company/codeenex-it-company'><i class="fa-brands fa-linkedin"></i></a></li>
      <li class='footer-last-text' id='trans_text10'>© All Rights Reserved |    Codeenex 2025</li>
    </ul>

  </article>
`);