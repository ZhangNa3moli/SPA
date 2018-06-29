//实例化密码可见框
var PasswordBox = function(config) {
	var $pwd = $('<input type="password" />'),
		$eyeImage = $('<img src="images/eye-close.png" />'),
		$div = $('<div class="wd-main"><label for="">密码：</label></div>');

	$div.append($pwd);
	$div.append($eyeImage);

	$(config.container).append($div);

	$eyeImage.mouseover(function() {
		$eyeImage.attr('src',"images/eye.png");
		$pwd.attr('type', 'text');
	})
	$eyeImage.mouseout(function() {
		$eyeImage.attr('src',"images/eye-close.png");
		$pwd.attr('type', 'password');
	})
	this.getPwd = function() {
		return $pwd.val();
	}
};