const listeners = document.querySelectorAll('[model]');
const bindData = {};
const bindings = Array.from(document.querySelectorAll('[bind]')).map(
    e => e.getAttribute("bind")
  );
function setBinders(name, value) {
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
listeners.forEach((element) => {
  const name = element.getAttribute("model");
  element.addEventListener('keyup', (event) => {
    setBinders(name, element.value);
  });
});
function render() {
  bindings.forEach((e) => {
    document.querySelector(`[bind=${e}]`).innerHTML = bindData[e] || "";
    document.querySelector(`[model=${e}]`).value = bindData[e] || "";
  });
}
const $ = function (m) {
  return bindData[m];
};
render();

export default setBinders();