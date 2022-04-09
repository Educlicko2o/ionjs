import Dependencies from "@ion/dep";
import Component from "@ion/component";
import ionElement from "@ion/element";
import Dom from "@ion/dom";
import Constructor from "@ion/constructor";

export default function App(param) {
  var app = document.createElement("ion-root");
  if (!!param.template) {
    app.innerHTML = `<ion-include from='${param.template}'></ion-include>`;
  }
  document.body.appendChild(app);
}

Dom.onload(function () {
  if (document.querySelectorAll("ion-root").length !== 0) {
    document.getElementById('ion-root').style.display = "block";
  }
  if (document.querySelectorAll("ion-loader").length !== 0) {
    document.getElementById('ion-loader').style.display = "none";
  }
});

export { Component, Dependencies, Dom, Constructor };
