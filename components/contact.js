App.define("Contact", () => `
  <article class="contact" data-page="contact" id='nav_3_main'>
    <header>
      <h2 class="h3 article-title">APPLY</h2>
    </header><br/><br/>
    <section class="contact-form">
      <form action="#" class="form" data-form>
        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input" placeholder="Full Name" required data-form-input>
          <input type="email" name="email" class="form-input" placeholder="Email Address" required data-form-input>
          <input type="tel" name="tel" class="form-input" placeholder="Phone Number" required data-form-input>
        <select id="choose-course" name="choose-course">
          <option class='opts' value="main_opt">Choose a Course</option>
          <option class='opts' value="JavaScript Course_opt">Javascript Course</option>
          <option class='opts' value="Python Course_opt">Python Course</1option>
          <option class='opts' value="PHP(laravel) Course_opt">PHP(laravel) Course</option>
          <option class='opts' value="React.js Course_opt">React.js Course</option>
          <option class='opts' value="Next.js Course_opt">Next.js Course</option>
          <option class='opts' value="Python(Django) Course_opt">Python(Django) Course</option>

          </select>
          </div>
        <button class="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
`);