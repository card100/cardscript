
// Loads jQ
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Loads CSS
$('head').append('<link rel="stylesheet" type="text/css" href="./style/stylesheet.css">');

//Hides and Shows
hideElement(){
  document.getElementByClassName('hideElement').classList.add('hideElement');
  document.getElementByClassName('hideElement').classList.remove('showElement');
}
showElement(){
  document.getElementByClassName('showElement').classList.add('showElement');
  document.getElementByClassName('showElement').classList.remove('hideElement');
}
