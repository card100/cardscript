var cssId = 'CSS';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './style/stylesheet.css';
    link.media = 'all';
    head.appendChild(link);
}

function c = (function() {
  
  return {
    test: function() {
      console.log('CardScript is working');
    }
  };
})();
