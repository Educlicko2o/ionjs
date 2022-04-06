import Dom from "@ion/dom"

export default function Constructor(param) {
  if (!!param && typeof param == "object") {
    if (!!param.charset && typeof param.charset == "string") {
      var char = document.createElement("meta");
      char.charset = param.charset;
      document.head.appendChild(char);
    }
    if (!!param.title && typeof param.title == "string") {
      document.title = param.title;
    }
    if (!!param.description && typeof param.description == "string") {
      var des = document.createElement("meta");
      des.name = "description";
      des.content = param.description;
      document.head.appendChild(des);
    }
    if (!!param.responsive) {
      if (param.responsive) {
        var res = document.createElement("meta");
        res.name = "viewport";
        res.content = "width=device-width, initial-scale=1";
        document.head.appendChild(res);
      }
    }
    if (!!param.keyword && typeof param.keyword == "string") {
      var key = document.createElement("meta");
      key.name = "keywords";
      key.content = param.keyword;
      document.head.appendChild(key);
    }
    if (!!param.auth && typeof param.auth == "string") {
      var auth = document.createElement("meta");
      auth.name = "author";
      auth.content = param.auth;
      document.head.appendChild(auth);
    }
    if (!!param.refresh) {
      if (param.refresh) {
        var ref = document.createElement("meta");
        ref.setAttribute("http-equiv", "refresh");
        ref.content = "20";
        document.head.appendChild(ref);
      }
    }
    if (!!param.fav) {
      Dom.setFavIcon(param.fav)
    }
  }
}