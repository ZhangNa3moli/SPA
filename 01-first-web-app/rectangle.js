var width =  document.getElementById('rectangle-width');
var height = document.getElementById('rectangle-height');
var tipone = document.getElementById('tip-one');
var tiptwo = document.getElementById('tip-two');
var calc = document.getElementById('rectangle-calc');
var perim = document.getElementById('rectangle-perimeter');
var area = document.getElementById('rectangle-area');


 //宽度输入框自动获得焦点
  width.focus();

 width.onblur = function(){
  if(width.value == ''){
     tipone.innerHTML = '宽度不能为空！';
  }
  if(isNaN(width.value)== true){
     tipone.innerHTML = '宽度必须为数值';
  }
  if(window.Number(width.value) < 0){
    tipone.innerHTML = '宽度必须大于零';
  }
  else{
    tipone.innerHTML = '';
  }
}

 height.onblur = function(){
  if(height.value == ''){
     tiptwo.innerHTML = '高度不能为空！';
  }
  if(isNaN(height.value)== true){
     tiptwo.innerHTML = '高度必须为数值';
  }
  if(window.Number(height.value) < 0){
     tiptwo.innerHTML = '高度必须大于零';
  }
  else{
     tiptwo.innerHTML = '';
  }
 }

calc.onclick = function(){
    perim.value = 2 * parseFloat(width.value) + 2 * parseFloat(height.value);
    area.value = (width.value) * (height.value);
 }

