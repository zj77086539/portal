var ObjDropMenu = {
	init: function(isHover) {
		var instance = this;
		var dock = jQuery('#objmenu');
		var dockList = jQuery('#objdropmenu');

		if (dockList!=null){
			var btn=document.getElementById('objdropbtn');
			var offsets = getOffsets(btn);
			dock.css({
				top: offsets.y + (btn.offsetHeight ? btn.offsetHeight : 22) + "px",
				left: (offsets.x -10)+ "px",
				position:"absolute",
				zIndex:80
				});
			dockList.hide();
			var clickCheck=function(internalEvent) {
						var currentEl = jQuery(internalEvent.target);
						var dockParent = currentEl.parents('#objdropmenu');
						if ((dockParent.length == 0) && !currentEl.is('#objdropbtn')) {
							instance._toggle('hide');
						}else{
							jQuery(document).one(
								'click',
								clickCheck
							);	
						}
					};
			var dockOver = function(event) {
				jQuery(document).one(
					'click',
					clickCheck
				);
				
				instance._toggle( 'show');
			};

			var alike = jQuery('#objdropbtn');
			if(isHover)alike.hover(dockOver,function(){});
			else alike.click(dockOver);
		}
	},

	_toggle: function(state) {
		var dock = jQuery('#objmenu');
		var dockList =jQuery('#objdropmenu');
		if (state == 'hide') {
			dockList.hide();
			dock.removeClass('expanded');
		}
		else if (state == 'show') {
			dockList.show();
			dock.addClass('expanded');
		}
		else {
			dockList.toggle();
			dock.toggleClass('expanded');
		}
	}

};