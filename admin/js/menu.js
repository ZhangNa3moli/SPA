var $menu = (function(){
	var $menuDOM = (function(){
		var $dom = $('<div class="admin-app-menu"><ul></ul></div>');
		var $uldom	 = $dom.find('ul');
		app.menuData.forEach(function(m){
			var $menuBarDOM =$('<div class="menu-bar">'+
						'<i class="iconfont ' + m.icon + '"></i>'+
						'<span></span>'+
						'<i class="iconfont icon-arrowdown" id="icon2"></i>'+
					'</div>');
			var $menuItemsDOM= $('<div class="menu-items"></div>');

			var $title = $menuBarDOM.find('span');
			$title.html(m.title);

			m.items.forEach(function(s){
				var $menuItemDOM = $('<div class="item"><p></p></div>');
				var $item = $menuItemDOM.find('p');
				$item.html(s.title);
				$item.attr('data-href',s.url);
				$menuItemsDOM.append($item);
			});
			var $liDOM = $('<li></li>');
			$liDOM.append($menuBarDOM);
			$liDOM.append($menuItemsDOM);

			$uldom.append($liDOM);
		})

			return $dom;
		})();
	var $menuBar = $menuDOM.find('.menu-bar');
	var $lastMenuBar = null,
	$currentMenuBar = null,
    $currentMenu = null;
	var $menuItem = $menuDOM.find('.item');
	// $menuBar.click(function(e){
	// 	var $menu = $(e.target).parents('li');
	// 	var $items = $menu.find('.menu-items');
	// 	var display = $items.css('display') === 'none' ? 'block' : 'none';

	// 	// $menu.displayArrow = function(){
	// 	// 	var $arrow = $menu.find("span+i");
	// 	// 	if($arrow.hasClass('icon-arrowdown'){
	// 	// 		$arrow.removeClass('icon-arrowdown');
	// 	// 		$arrow.addClass('icon-arrowup');
	// 	// 	})else{
	// 	// 		$arrow.removeClass('icon-arrowup');
	// 	// 		$arrow.addClass('icon-arrowdown');
	// 	// 	}
	// 	// };
		

	// 	//$item.css('display',display);

	// 	if($lastMenuBar === null){
	// 		$items.css('display',display);
	// 	}else if($lastMenuBar.get(0) === $menu.get(0)){
	// 		$items.css('display',display);
	// 	}else{
	// 		$lastMenuBar.find('.menu-items').css('display','none');
	// 		$items.css('display',display);
	// 	}	
	// 	$lastMenuBar = $menu;	
	// });
	// $menuItem.click(function(e){
	// 	var $item = $(e.currentTarget);
	// 	location.hash = $item.find('p').attr('data-href');
	// });

	// function show(){
	// 	$(app.config.appContainer).append($menuDOM);
	// }
	function onMenuBarClick(e) {
    var $menu = $(e.currentTarget),
      arrowStyle = {'up': 'icon-arrowup', 'down': 'icon-arrowdown'};

    $menu.showArrow = function(style) {
      var $arrow = this.find('span+i');

      var cssClass = $arrow.hasClass(arrowStyle.up) ? arrowStyle.up : arrowStyle.down;
      $arrow.removeClass(cssClass);
      $arrow.addClass(style);
    };

    if($currentMenuBar === null) {
      $menu.showArrow(arrowStyle.up);
      $menu.next().css('display', 'block');
      $currentMenuBar = $menu;
    } else if($currentMenuBar.get(0) === $menu.get(0)) {
      $menu.showArrow(arrowStyle.down);
      $menu.next().css('display', 'none');
      $currentMenuBar = null;
    } else {
      $currentMenuBar.showArrow(arrowStyle.down);
      $currentMenuBar.next().css('display', 'none');
      $menu.showArrow(arrowStyle.up);
      $menu.next().css('display', 'block');
      $currentMenuBar = $menu;
    }
  }

  function onMenuItemClick(e) {
    var $menuItem = $(e.currentTarget);
    
    $menuItem.selectMenu = function(isSelected){
      if(isSelected) {
        this.css({'background': '#009688', 'color': 'white'});
      } else {
        this.css({'background': '#282e37', 'color': '#c2c2c2'});
      }
    };

    if($currentMenu === null) {
      $menuItem.selectMenu(true);
      $currentMenu = $menuItem;
    } else {
      $currentMenu.selectMenu(false);
      $menuItem.selectMenu(true);
      $currentMenu = $menuItem;
    }

    window.location.hash = $menuItem.attr('data-href');
  }

  function show() {
    $(app.config.appContainer).append($menuDOM);

    $menuBar.click(onMenuBarClick);
    $menuItem.click(onMenuItemClick);
  }

	return {show:show};
})();
