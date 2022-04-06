import http from "@ion/http";

export default function Component(param) {
  customElements.define(param.name,
    class extends HTMLElement {
      constructor() {
        super();
        if (!!param.onclick && typeof param.onclick == "function") {
          this.addEventListener('click', e => param.onclick(e));
        }
      }
      connectedCallback() {
        if (!!param.define && typeof param.define == "function") {
          param.define(this);
        }
        if (!!param.attributes) {
          Object.keys(param.attributes).forEach(key => {
            this.setAttribute(key, param.attributes[key]);
          });
        }
        if (!!param.class) {
          this.classList = param.class;
        }
        if (!!param.template) {
          this.innerHTML = param.template;
        }
        if (!!param.id) {
          this.setAttribute("id", param.id)
        }
        if (!!param.templateUrl) {
          if (typeof param.templateUrl == "function") {
            var e = this;
            http.get({
              url: param.templateUrl(this),
              callback: function (data) {
                e.innerHTML = data;
              }
            });
          } else {
            var e = this;
            http.get({
              url: param.templateUrl,
              callback: function (data) {
                e.innerHTML = data;
              }
            });
          }
        }
        if (!!param.innerStyle) {
          this.style.cssText = param.innerStyle;
        } 
        if (!!param.style) {
          this.innerHTML += "<style>" + param.style + "</style>";
        }
        if (!!param.styleUrl) {
          http.get({
            url: param.templateUrl,
            callback: function (data) {
              this.innerHTML += "<style>" + data + "</style>";
            }
          });
        }
      }
      disconnectedCallback() {
        if (!!param.onDisconected && typeof param.onDisconected == "function") {
          param.onDisconected();
        }
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (!!param.onAttributeChanged && typeof param.onAttributeChanged == "function") {
          param.onAttributeChanged();
        }
      }
    }
  );
  customElements.whenDefined(param.name).then((element) => {
    if (!!param.ready && typeof param.ready == "function" ) {
      param.ready();
    }
  });
}