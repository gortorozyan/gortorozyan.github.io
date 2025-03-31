'use strict';

const App = (() => {
  const components = {};
  function define(name, fn) {
    components[name] = fn;
  }
  function renderComponent(name, props = {}) {
    if (!components[name]) throw `Component "${name}" is not defined`;
    return components[name](props);
  }
  function mount(id, componentName, props = {}) {
    const root = document.getElementById(id);
    root.innerHTML = renderComponent(componentName, props);
    runScripts(root);
  }
  function runScripts(root) {
    const scripts = root.querySelectorAll("script");
    scripts.forEach(oldScript => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }
  return {
    define,
    mount,
    renderComponent
  };
})();