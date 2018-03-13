window.onload = function(){
  var width =  document.getElementById('rectangle-width');
  var height = document.getElementById('rectangle-height');
  var tipone = document.getElementById('tip-one');
  var tiptwo = document.getElementById('tip-two');
  var calc = document.getElementById('rectangle-calc');
  var perim = document.getElementById('rectangle-perimeter');
  var area = document.getElementById('rectangle-area');

width.focus();
 width.onblur = function(){
  if(width.value == ''){
     tipone.innerHTML = '宽度不能为空！';
     width.focus();
  }
 else if(isNaN(width.value)== true){
     tipone.innerHTML = '宽度必须为数值';
     width.focus();
  }
 else if(window.Number(width.value) < 0){
    tipone.innerHTML = '宽度必须大于零';
    width.focus();
  }
  else{
    tipone.innerHTML = '';
  }
}

 height.onblur = function(){
  if(height.value == ''){
     tiptwo.innerHTML = '高度不能为空！';
     height.focus();
  }
  else if(isNaN(height.value)== true){
     tiptwo.innerHTML = '高度必须为数值';
     height.focus();
  }
  else if(window.Number(height.value) < 0){
     tiptwo.innerHTML = '高度必须大于零';
     height.focus();
  }
  else{
     tiptwo.innerHTML = '';
  }

 }

 calc.onclick = function(){
   var wid = width.value;
   var hei = height.value;
   perim.value = 2 * parseFloat(wid) + 2 * parseFloat(hei);
   area.value =parseFloat(wid) * parseFloat(hei);
 }
};
