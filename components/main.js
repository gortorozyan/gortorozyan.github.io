App.define("Main", () => `
  <main>
    ${App.renderComponent("Sidebar")}
    <div class="main-content">
      ${App.renderComponent("Navbar")}
      ${App.renderComponent("Home")}
      ${App.renderComponent("Courses")}
      ${App.renderComponent("Apply")}
    </div>
  </main>
  <script src="script.js"></script>
`);