var $footer = (function(){

	function show(){
		$(app.config.appContainer).append('<div class="admin-app-footer"><p>2017<a href="#">中科佰融</p></div>');
	}
	return {show:show};
})();