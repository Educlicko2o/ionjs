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

export { render, createElement };