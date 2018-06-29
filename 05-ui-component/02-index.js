var $btnAddpwd = $('#btn-input'),
	$btnGetpwd = $('#btn-password'),
	pwdArray = [];
$btnGetpwd.attr('disabled','disabled');

$btnAddpwd.click(function() {
	var pwd = new PasswordBox({
		'container': 'div.main'
	});
	pwdArray.push(pwd);
	$btnGetpwd.removeAttr('disabled');
});
$btnGetpwd.click(function() {
	pwdArray.forEach(function(pwd) {
		alert(pwd.getPwd());
	})
})