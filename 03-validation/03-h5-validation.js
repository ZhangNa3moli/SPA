  var width =  document.getElementById('rectangle-width');
  var height = document.getElementById('rectangle-height');
  var calc = document.getElementById('rectangle-calc');
  var perim = document.getElementById('rectangle-perimeter');
  var area = document.getElementById('rectangle-area');
  var form = document.getElementById('form');

  width.onkeypress = function validateKey(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
  }

 height.onkeypress = function validateKey(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
  }

calc.onclick = function(e){
 
 e.preventDefault();//阻止表单提交
 console.log("aa");
  
  var wid = width.value;
  var hei = height.value;
  var reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;


 if(reg.test(wid) && reg.test(hei)){ 
   perim.value = roundFractional(wid * 2 + hei * 2, 10);
   area.value = roundFractional(wid * hei, 10);
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


