$(function(){
	var $account = $('.account'),
	$menu = $('.submenu'),
	$arrow = $('.account span+i');

	$account.mouseover(function(){
		$menu.css('display','block');
		$account.css('color','black');
		$arrow.removeClass('icon-arrowdown');
		$arrow.addClass('icon-arrowup');
	})
	$account.mouseout(function(){
		$menu.css('display','none');
		$account.css('color','#999');
		$arrow.removeClass('icon-arrowup');
		$arrow.addClass('icon-arrowdown');
	})

	$menu.click(function(){
		location.hash = '#/login';
	})
});