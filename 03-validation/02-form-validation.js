window.onload = function(){
  var width =  document.getElementById('rectangle-width');
  var height = document.getElementById('rectangle-height');
  var tipone = document.getElementById('tip-one');
  var tiptwo = document.getElementById('tip-two');
  var calc = document.getElementById('rectangle-calc');
  var perim = document.getElementById('rectangle-perimeter');
  var area = document.getElementById('rectangle-area');
 

//自动获得宽度输入框焦点
 width.focus();

 calc.onclick = function(){
   var wid = width.value;
   var hei = height.value;

   //宽度数据合法性校验
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

 //高度数据合法性校验
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
//宽度高度合法性校验
//两个输入框都不符合条件时，只显示宽度输入框的提示信息
  if(tipone.innerHTML !== '' && tiptwo.innerHTML !== ''){
    tiptwo.innerHTML = '';
  }
  //两个输入框都符合条件时，才进行计算
  if(tipone.innerHTML == '' && tiptwo.innerHTML == ''){
    perim.value = roundFractional(wid * 2 + hei * 2, 2);
    area.value = roundFractional(wid * hei, 2);
   }
  else{
    perim.innerHTML = '';
    area.innerHTML = ''
 }
};
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
