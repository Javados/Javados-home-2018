jQuery(document).ready(function(){
	if(jQuery(".menu-nav-link-active").length>0){
		var menuWidth = jQuery(".menu-nav-link-active").outerWidth();
		var menuLeft = jQuery(".menu-nav-link-active").position().left;
		jQuery(".menu-link-active").stop().animate({
			left: menuLeft+'px',
			width: menuWidth+'px'
		}, 500, 'linear');
	}
	jQuery(".header-menu-nav").find('a.menu-nav-link').mouseover(function(){
		var menuWidth = jQuery(this).outerWidth();
		var menuLeft = jQuery(this).position().left;
		jQuery(".menu-link-active").stop().animate({
			left: menuLeft+'px',
			width: menuWidth+'px'
		}, 300, 'linear');
	});
	jQuery(".header-menu-nav").mouseleave(function(){
		if(jQuery(".menu-nav-link-active").length<=0){
			jQuery(".menu-link-active").stop().animate({
				left: '-999px',
				width: '0px'
			}, 500, 'linear');
		}
		else{
			var menuWidth = jQuery(".menu-nav-link-active").outerWidth();
			var menuLeft = jQuery(".menu-nav-link-active").position().left;
			jQuery(".menu-link-active").stop().animate({
				left: menuLeft+'px',
				width: menuWidth+'px'
			}, 500, 'linear');
		}
	});
});