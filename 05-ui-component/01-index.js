$(function(){
	//实例化定时器按钮
	//{}用于传参数
	var $btn = timerButton({
		'container':'div.main',
		'title':'同意',
		'tlength':'10',
		'enable':false
	});
	$btn.bind('timer-button-click',function(){
		alert('已同意');
	});

	var $btn2 = timerButton({
		'container':'div.main',
		'title':'发送短信',
		'tlength':'9',
		'enable':true
	});
	$btn2.bind('timer-button-click',function(){
		alert('发送短信');
	});

});















// var $btn = new timerButton({
//   'container':'div.main',
//   'title':'同意',
//   'tLength':9,
//   'enable':false
//   });
//   $btn.on('timer-button-click',function(){
//     alert('同意了！');
//   });