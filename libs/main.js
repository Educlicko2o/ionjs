import Dependencies from "@ion/dep";
import Component from "@ion/component";
import ionElement from "@ion/element";
import Dom from "@ion/dom";
import Constructor from "@ion/constructor";
<<<<<<< HEAD
=======
import setBinders from "@ion/dataBinding";
import manifestRenderer from "@ion/manifestRenderer";
>>>>>>> cd43dc7 (updation)

export default function App(param) {
  var app = document.createElement("ion-root");
  if (!!param.template) {
    app.innerHTML = `<ion-include from='${param.template}'></ion-include>`;
  }
  document.body.appendChild(app);
}

const c = function (e, a, i) {
  var element = document.createElement(e);
  Object.keys(a).forEach(key => {
    element[key] = a[key];
  });
  if (typeof i == "object") {
    Object.keys(i).forEach(key => {
      element.appendChild(i[key]);
    });
  } else if (typeof i == "string") {
    element.innerHTML = i;
  }
  return element;
};

const [create, createElement] = [c, c];

const Ion = {
  render: function (e, i) {
     document.querySelector(e).appendChild(i);
  }
};

Dom.onload(function () {
  if (document.querySelectorAll("ion-root").length !== 0) {
    document.getElementById('ion-root').style.display = "block";
  }
  if (document.querySelectorAll("ion-loader").length !== 0) {
    document.getElementById('ion-loader').style.display = "none";
  }
});

<<<<<<< HEAD
export { Component, Dependencies, Dom, Constructor };
=======
export { Component, Dependencies, Dom, Constructor, c, create, createElement, setBinders, Ion };
>>>>>>> cd43dc7 (updation)
