window.onload = function(){
  var width =  document.getElementById('rectangle-width');
  var height = document.getElementById('rectangle-height');
  var tipone = document.getElementById('tip-one');
  var tiptwo = document.getElementById('tip-two');
  var calc = document.getElementById('rectangle-calc');
  var perim = document.getElementById('rectangle-perimeter');
  var area = document.getElementById('rectangle-area');
  var wid = width.value;
  var hei = height.value;

//宽度输入框自动获得焦点
width.focus();

//宽度输入框数据合法性校验
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

  width.onkeypress = function(e){
     validateKey(e);
  }
}

//高度输入框数据合法性校验
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
  height.onkeypress = function(e){
    validateKey(e);
  }

 }

/**
 * 验证文本框中输入的每个字符
 * @param e 按键事件
 * @returns {undefined}
 */
function validateKey(e){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
}

 
//宽度高度数据合法性校验
 calc.onclick = function(){
   var wid = width.value;
   var hei = height.value;
   if(tipone.innerHTML == ''&& tiptwo.innerHTML == ''){
      perim.value = roundFractional(wid * 2 + hei * 2, 2);
      area.value = roundFractional(wid * hei, 2);
   }
   else{
     perim.innerHTML = '';
     area.innerHTML = '';
   }
 }
 /**
  * 小数点后面保留第n位
  *
  * @param x 做近似处理的数
  * @param n 小数点后第n位
  * @returns 近似处理后的数
  */
function roundFractional(x,n){
   return Math.round(x * Math.pow(10,n))/Math.pow(10,n);
}

};
