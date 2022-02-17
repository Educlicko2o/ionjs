export const http = {
  get: function (param) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (!!param.callback) {
        param.callback(this.responseText);
      }
    };
    xhttp.open("GET", param.url, true);
    xhttp.send();
  }
};