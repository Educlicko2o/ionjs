export default function Dependencies(param) {
  if (!!param && typeof param == 'object') {
    if (!!param.imports && typeof param.imports == 'object') {
      param.imports.forEach(function (item, index, arr) {
        if (typeof arr[index] == "object") {
          if (!!item.type && !!item.src) {
            if (item.type == "style") {
              var style;
              style = document.createElement('link');
              style.rel = "stylesheet";
              style.href = item.src;
              document.head.appendChild(style);
            } else if (item.type == "script") {
              var script;
              script = document.createElement('script');
              script.type = "text/javascript";
              script.src = item.src;
              document.body.appendChild(script);
            } else if (item.type == "module") {
              var module;
              module = document.createElement('script');
              module.type = "module";
              module.src = item.src;
              document.body.appendChild(module);
            } else {
              console.warn('unknow type for dependendcy');
            }
          }
        }
      });
    }
  }
}