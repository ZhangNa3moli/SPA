var input = document.getElementById('invi');
var img = document.getElementById('eye');

img.onmouseover = function(){
  input.setAttribute('type','text');
  img.setAttribute('src','images/eye.png');
};
img.onmouseout = function(){
  input.setAttribute('type','password');
  img.setAttribute('src','images/eye-close.png');
};
