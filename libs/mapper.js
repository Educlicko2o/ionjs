const IonJs =  {
  config: function (param) {
    var map = param.map;
    Object.entries(map).forEach(([key, value]) => {
      map["@" + key] = value;
      delete map[key];
      if (!!param.baseURL) map["@" + key] = param.baseURL + value;
    });
    var ionMapJs = document.createElement('script');
    ionMapJs.type = 'importmap';
    ionMapJs.innerHTML = '{"imports":' + JSON.stringify(map) + "}";
    document.head.appendChild(ionMapJs);
  }
};