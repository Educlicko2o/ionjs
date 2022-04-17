const manifestRenderer = (function () {
  fetch('/manifest.json').then(res => res.text()).then(json => {
    let manifest = JSON.parse(json);
    render(manifest);
  });
})();

function render(m) {
  if (document.title == "" && !!m.name) document.title = m.name;
  if (document.querySelectorAll('meta[name=description]').length == 0 && !!m.description) {
    var des = document.createElement('meta');
    des.name = 'description';
    des.content = m.description;
    document.head.appendChild(des);
  }
  if (!!m.style) styleRenderer(m.style);
}

function styleRenderer(m) {
  var style = document.createElement('style');
  var rs;
  if (!!m.backgroundColor) style.innerHTML = `
    * { background: ${m.backgroundColor};}
  `;
  document.head.appendChild(style);
  if (!!m.themeColor) {
    var color = document.createElement('meta');
    color.name = 'theme-color';
    color.content = m.themeColor;
    document.head.appendChild(color);
  }
}

export default manifestRenderer;