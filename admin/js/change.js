var $changePasswordPanel = (function(){
	var $DOM = $(''
      + '<div class="change-password-panel">'
        + '<form class="change-password-panel">'+
				'<input type="password" placeholder="请输入旧密码" required minlength="6" maxlength="20"><br>'+
				'<input type="password" placeholder="请输入新密码" required minlength="6" maxlength="20"><br>'+
				'<input type="password" placeholder="请再次输入新密码" required minlength="6" maxlength="20"><br>'+
				'<input type="submit" value="保存">'+
				'<input type="reset" value="重置">'+
			'</form>	'+
			'</div>');

	var $form = $DOM.find('.change-password-panel');
	function validate(){
		var validate = false;
		$newPwd1 = $form.find('input[placeholder="请输入新密码"]');
		$newPwd2 = $form.find('input[placeholder="请再次输入新密码"]');
		if($newPwd.val() !== $newPwd2.val()) {
	      alert('确认密码和新密码不同');
	      return false;
	    } 
		return validate;
	}
	function onsubmit(e) {
		e.preventDefault();
		if(validate()){

		}
	}
	function show(){
		$(app.config.panelConteiner).html('<h1>$changePwdPanel</h1>');
	}
	
	return {show:show};
})();