(function (XHR) {
    var open = XHR.prototype.open;
    XHR.prototype.open = function (method, url, async, user, pass) {
        this._url = url;
        if (url.indexOf("gstatic.com") !== -1 ||
            url.indexOf("docs.google.com") !== -1) {
            url = "https://googleformrestyler.apixml.net/corsProxy.aspx?base64Url=" + btoa(url);
        }
        open.call(this, method, url, async, user, pass);
    };
})(XMLHttpRequest);
(function() {
    var script = document.currentScript ||
        /*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
    var URL = script.getAttribute('form');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.onload = function() {
        document.write(xhr.response);
    };
    xhr.send();
})();

(function(){
  var ifrm = document.createElement("iframe");
ifrm.setAttribute("name", "swallow");
document.body.appendChild(ifrm);
ifrm.style.display = 'none';
document.forms[0].target="swallow";
var button = document.querySelectorAll("div[role='button']")[0];
button.addEventListener("click", function()
{
	alert('Here you can intercept the response');
}, true);
})();
