var ionMapJs = document.createElement('script');
ionMapJs.type = 'importmap';
ionMapJs.innerHTML = `
{
  "imports": {
    "@ion": "/dist/ion.app.js",
    "@ion/render": "/dist/render.js",
    "@ion/utilities": "/dist/utilities.js",
    "@ion/ajax": "/dist/hooks/http.js"
  }
}
`;
document.head.appendChild(ionMapJs);