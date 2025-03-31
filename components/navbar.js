App.define("Navbar", () => `
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <button class="navbar-link active" id='nav_1' data-nav-link>Home</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" id='nav_2' data-nav-link>Courses</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" id='nav_3' data-nav-link>Apply</button>
      </li>
      <li class="navbar-item">
        <button>
          <select id="choose-lang" name="choose-lang">
          <option class='usa-opt' value="english">EN</option>
          <option class='armenian-opt' value="armenian">AM</option>
          </select>
        </button>
      </li>
    </ul>
  </nav>
`);