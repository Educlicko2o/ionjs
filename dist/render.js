import { http } from "/dist/hooks/http.js"

class ionHtml {
  elements(b) {
    function difine() {
      let app = new customHtml("ion-app");
      app.define((element) => {
        element.setAttribute('id', 'ion-app');
        element.style.cssText = `
          display: none;
          padding: 0;
          margin: 0;
          width: 100%;
          box-sizing: border-box;
        `;
      });
      
      let include = new customHtml("include-html");
      include.define((element) => {
        http.get({
          url: element.getAttribute("from"),
          callback: function (data) {
            element.innerHTML = data;
          }
        });
      });
      
      let body = new customHtml("ion-body");
      body.define((element) => {
        document.body.innerHTML = element.innerHTML;
        element.remove();
        document.body.style.cssText = `
          padding: 0;
          margin: 0;
          width: 100%;
          box-sizing: border-box;
        `;
      });
      
      let loader = new customHtml("ion-loader");
      loader.define((element) => {
        element.setAttribute('id', 'ion-loader');
        element.style.cssText = `
          display: block;
          padding: 0;
          margin: 0;
          top: 0;
          left: 0;
          background: ${element.getAttribute('bg') || "#fff"};
          position: fixed;
          height: 100%;
          width: 100%;
          z-index: 999;
          box-sizing: border-box;
        `;
      });
    }
    if (b) {
      difine();
    }
  }
}

class customHtml {
  constructor(name) {
    this.name = name;
    let customElementRegistry = window.customElements;
  }
  define(callback) {
    customElements.define(this.name,
      class extends HTMLElement {
        constructor() {
          super();
          if (!!callback) {
            callback(this);
          }
        }
      }
    );
  }
}

export { ionHtml, customHtml };