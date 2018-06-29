var $stage = (function(){
	function show(){
		$(app.config.appContainer).append('<div class="admin-app-stage"></div>');
	}
	//根据路由信息加载相应的Panel
	//router为路由字符串
	function load(router){
		var panel = parsePanel(router);
		eval(panel+".show{'container': '.admin-app-stage'}");
	}
	//将路由信息解析成Panel名称
	//路由规则：http://ip-addr:port/.../#/...
	function parsePanel(router){
		var panel = router.replace(/-(.)/g, function(letter){
	      return letter.toUpperCase();
	    }).replace(/#\//,'$')
	      .replace(/-/g,'');

	    return panel + 'Panel';
	}
	return {show:show,load:load};
})();