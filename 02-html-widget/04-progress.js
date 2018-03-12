var progress = document.getElementById('progress');
var begin = document.getElementById('begin');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var timer=0;
var value = 0;

begin.onclick = function(){ 
  timer = setInterval(function(){
       progress.value = value ++;
  },100);
};

stop.onclick = function(){
   clearInterval(timer);
};

reset.onclick = function(){
  progress.value = 0;
  
};


