App.define("Main", () => `
  <main>
    ${App.renderComponent("Sidebar")}
    <div class="main-content">
      ${App.renderComponent("Navbar")}
      ${App.renderComponent("About")}
      ${App.renderComponent("Portfolio")}
      ${App.renderComponent("Contact")}
    </div>
  </main>
  <script src="script.js"></script>
`);