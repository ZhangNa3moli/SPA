window.onload = function(){
  var ran = document.getElementById('range');
  var ag = document.getElementById('age');

  ag.innerHTML = ran.value;

  ran.onchange = function(){
    ag.innerHTML = ran.value;
  };

};
