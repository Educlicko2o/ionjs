import Component from "@ion/component";

Component({
  name: "ion-root",
  innerStyle: `
    display: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
  `,
  id: "ion-root"
});

Component({
  name: "ion-include",
  templateUrl: (e) => e.getAttribute("from")
});

Component({
  name: "ion-script",
  define: (e) => {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.innerHTML = e.innerHTML;
    document.body.appendChild(script);
    e.remove();
  }
});

Component({
  name: "ion-loader",
  innerStyle: `
    display: block;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 999;
    box-sizing: border-box;
  `,
  id: "ion-loader"
});

const ionElement = "true";

export default ionElement;