var btn = document.getElementById('btn');

window.onload = function(){
  var i=9;
  btn.value = '同意 ('+ i + 's)';
  btn.setAttribute('disabled','disabled');

  var timer = setInterval(function(){
       reduceTime();
  },1000);

  function reduceTime(){
   
     btn.value = '同意 (' + i-- + 's)';
     if(i<0){
      clearInterval(timer);
      btn.value = '同意';
      btn.removeAttribute('disabled');         
     }
  }

  btn.onclick = function(){
    alert("就知道你会同意的！");
  };

};
