import { http } from "@ion/ajax";
import { Dom, getElement } from "@ion/utilities";
import { ionHtml, customHtml } from "@ion/render";

new ionHtml().elements(true);

Dom.onload(function () {
  if (document.querySelectorAll("ion-app").length !== 0) {
    document.getElementById('ion-app').style.display = "block";
  }
  if (document.querySelectorAll("ion-loader").length !== 0) {
    document.getElementById('ion-loader').style.display = "none";
  }
});

function render(data, id) {
  if (typeof data === 'string') {
    document.querySelector(id).innerHTMl = data;
  } else {
    document.querySelector(id).appendChild(data);
  }
}

function createElement(name, innerHTML, nodes) {
  let element = document.createElement(name);
  if (typeof innerHTML !== 'object') {
       element.innerHTML = innerHTML;
  } else {
    if (!!nodes) {
      nodes.forEach((item, index) => {
       element.appendChild(item);
      });
    } else {
      innerHTML.node.forEach((item, index) => {
          element.appendChild(item);
      });
    }
  }
  if (innerHTML != null && !!innerHTML.attribute) {
    Object.keys(innerHTML.attribute).forEach((key) => {
      element.setAttribute(key, innerHTML.attribute[key]);
    });
  }
  return element;
}

class ionActivity {
  constructor(context) {
    this.context = context;
    this.url = window.location.href;
    this.activity = window.location.pathname;
    this.compact = false;
  }
  close() {
    window.close();
  }
  reload() {
    window.reload();
  }
  go(state) {
    window.go(state);
  }
  back() {
    window.back();
  }
  forward() {
    window.forward();
  }
  stop() {
    window.stop();
  }
}

function appInterface(classes) {
  var app = new classes();
  if (!!app.onCreate) {
    app.onCreate();
  } else {
    console.error("app onCreate not installed");
  }
  if (!!app.onLoad) {
    Dom.onload(function () {
      
      app.onLoad();
    });
  }
}

export { render, ionActivity, createElement, http, getElement, Dom, appInterface, ionHtml, customHtml };