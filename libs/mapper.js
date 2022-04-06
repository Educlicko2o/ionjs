const IonJs =  {
  config: function (param) {
    var map = JSON.stringify(param.map);
    Object.keys(map).forEach(key => {
      map["@" + key] = map[key];
      if (!!map.baseURL) map["@" + key] = map.baseURL + map[key];
      delete map[key];
    });
    var ionMapJs = document.createElement('script');
    ionMapJs.type = 'importmap';
    ionMapJs.innerHTML = '{"imports":' + map + "}";
    document.head.appendChild(ionMapJs);
  }
};