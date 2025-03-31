App.define("Sidebar", () => `
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="https://i.postimg.cc/J0zQSJLt/codenex-logo-Photoroom.png" alt="avatar" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Codeenex">Codeenex</h1>
        <p class="title">www.codeenex.com</p>
      </div>

      <button class="info-more-btn" data-sidebar-btn>
        <span class="material-symbols-outlined">expand_more</span>
      </button>
    </div>

    <div class="sidebar-info-more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box"><span class="material-symbols-outlined">mail</span></div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
           <a href="mailto:support@codeenex.com" class="contact-link colcolorbl">support@codeenex.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box"><span class="material-symbols-outlined">phone_iphone</span></div>
          <div class="contact-info">
            <p class="contact-title">Phone</p>
          <a href="tel:+12133522795" class="contact-link" onclick="return confirm('Call this number?')">+ (374) 55-64-66-56</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box"><span class="material-symbols-outlined">location_on</span></div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>Armenia. Yerevan Vracakan 7/11</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a href="#" class="social-link"><ion-icon name="logo-facebook"></ion-icon></a>
        </li>
        <li class="social-item">
          <a href="#" class="social-link"><ion-icon name="logo-twitter"></ion-icon></a>
        </li>
        <li class="social-item">
          <a href="#" class="social-link"><ion-icon name="logo-instagram"></ion-icon></a>
        </li>
      </ul>
    </div>
  </aside>
`);