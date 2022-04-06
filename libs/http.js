const http = {
  get: function (param) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (!!param.callback) {
        param.callback(this.responseText, this);
      }
    };
    xhttp.open("GET", param.url, true);
    xhttp.send();
  },
  post: function (param) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (!!param.callback) {
        param.callback(this.responseText, this);
      }
    };
    if (!!param.header) {
      xhttp.setRequestHeader(param.header.name, param.header.value);
    }
    xhttp.open("POST", param.url, true);
    if (!!param.data) {
      xhttp.send(param.data);
    } else {
      xhttp.send();
    }
  }
};

export default http;