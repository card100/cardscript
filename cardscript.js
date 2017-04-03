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
  document.getElementById('id').classList.add('hideElement');
  document.getElementById('id').classList.remove('showElement');
}
showElement(){
  document.getElementById('id').classList.add('showElement');
  document.getElementById('id').classList.remove('hideElement');
}
