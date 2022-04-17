const listeners = document.querySelectorAll('[model]');
const bindData = {
  ion: true
};
const bindings = Array.from(document.querySelectorAll('[bind]')).map(
    e => e.getAttribute("bind")
  );

listeners.forEach((element) => {
  const name = element.getAttribute("model");
  element.addEventListener('keyup', (event) => {
    setBinders(name, element.value);
  });
});
function render() {
  bindings.forEach((e) => {
    if (document.querySelectorAll(`[bind=${e}]`).length !== 0) document.querySelector(`[bind=${e}]`).innerHTML = bindData[e] || "";
    if (document.querySelectorAll(`[model=${e}]`).length !== 0) document.querySelector(`[model=${e}]`).value = bindData[e] || "";
  });
}
export const binded = function (m) {
  return bindData[m];
};
render();
setInterval(render(), 1000);

export default function setBinders(name, value) {
  if (typeof name == 'object') {
    Object.keys(name).forEach(key => {
      bindData[key] = name[key];
    });
    render();
  } else {
    bindData[name] = value;
    render();
  }
}