var cssId = 'CSSelement';
if (!document.getElementById(CSSelement))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './stylesheet.css';
    link.media = 'all';
    head.appendChild(link);
}

//Hides and Shows
hideElement(){
  document.getElementByClassName('hideElement').classList.add('hideElement');
  document.getElementByClassName('hideElement').classList.remove('showElement');
}
showElement(){
  document.getElementByClassName('showElement').classList.add('showElement');
  document.getElementByClassName('showElement').classList.remove('hideElement');
}
