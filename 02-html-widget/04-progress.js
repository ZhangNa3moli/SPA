var progress = document.getElementById('progress');
var begin = document.getElementById('begin');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var timer=0;//定时器对象
var max = progress.max;


begin.onclick = function(){ 
  if(timer !== 0){//进度条进行的时候点开始，不加快速度
    return;
  }
  else{
     timer = setInterval(function(){
       if(progress.value == max){
         clearInterval(timer);
       }
       progress.value ++;
      },100);
   } 
};

stop.onclick = function(){
   clearInterval(timer);
   timer = 0;//暂停后再次点开始，进度可继续进行
};

reset.onclick = function(){
  progress.value = 0;
  
};


