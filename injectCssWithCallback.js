var style = document.createElement('style');
style.textContent = '@import "' + url + '"';

var fi = setInterval(function() {
  try {
    style.sheet.cssRules; // <--- MAGIC: only populated when file is loaded
    CSSDone('listening to @import-ed cssRules');
    clearInterval(fi);
  } catch (e){}
}, 10);  

document.getElementsByTagName('head')[0].appendChild(style);