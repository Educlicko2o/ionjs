const Dom = {
  load: (type, src, callback) => {
    if (type == "script") {
      var script = document.createElement('script');
      script.type = "text/javascript";
      script.src = src;
      if (!!callback) {
        script.onload = callback();
      }
      document.body.appendChild(script);
    } else if (type == "style") {
      var style = document.createElement('link');
      style.rel = "stylesheet";
      style.href = src;
      document.head.appendChild(style);
    } else if (type == "module") {
      var module = document.createElement('script');
      module.type = "module";
      module.src = src;
      if (!!callback) {
        module.onload = callback();
      }
      document.body.appendChild(module);
    }
  },
  onload: function (fun) {
    if (typeof window.onload == "function") {
      var s =  window.onload();
      window.onload = function () {
       s;
       fun();
      };
    } else {
      window.onload = function () {
        fun();
      };
    }
  },
  onscroll: function (fun) {
    if (typeof window.onscroll == "function") {
      var s =  window.onscroll();
      window.onscroll = function () {
       s;
       fun();
      };
    } else {
      window.onscroll = function () {
        fun();
      };
    }
  },
  noFrame: function (b) {
    if (b) {
      if (window.top != window.self) {
        window.top.location = window.location;
      }
    }
  },
  setFavIcon: function (icon) {
    let headTitle = document.querySelector('head');
    let favIcons = [
        { rel: 'apple-touch-icon' },
        { rel: 'apple-touch-startup-image' },
        { rel: 'shortcut icon' }
    ];
    favIcons.forEach(function(favIcon){
        let setFavicon = document.createElement('link');
        setFavicon.setAttribute('rel', favIcon.rel);
        setFavicon.setAttribute('class', 'favico');
        setFavicon.setAttribute('href', icon);
        headTitle.appendChild(setFavicon);
    });
  },
  changeFavIcon: function (url) {
    const elements = document.querySelectorAll(".favico");
    elements.forEach(function (element) {
      element.setAttribute('href', url);
    });
  },
  hasFavIcon: function (ifHas, ifNot) {
    if (document.querySelectorAll(".favico").length === "0") {
      if (!!ifNot) {
        ifNot();
      }
    } else {
      if (!!ifHas) {
        ifHas();
      }
    }
  }
};
export default Dom;