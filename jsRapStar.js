(function($){
	$.fn.jsRapStar = function(options){
		var defaults = {
			colorW:'rapStarCW',
			colorY:'rapStarCY',
			enabled:true,
			step:true,
			starWidth:16,
			starHeight:16,
			length:5
		};
		return this.each(function(){
			var opt = $.extend(defaults,options);
			var sw = opt.starWidth;
			var sh = opt.starHeight;
			var w = sw * opt.length;
			$(this).addClass('rapStarDW ' + opt.colorW);
			$(this).css({width:w,height:sh,'background-size':sw+'px ' + sh + 'px'});
			var start = parseFloat($(this).attr('start'));
			var oldWidth = Math.round(start * sw);
			var dStar = $('<div>',{
				class:'rapStarDY ' + opt.colorY,
				css:{width:oldWidth,height:sh,'background-size':sw + 'px '+sh + 'px'}
			}).appendTo($(this));
			if(opt.enabled)
				$(this).bind({
					mousemove:function(e){
						e.preventDefault();
						var realOffsetLeft = findRealLeft(this);
						var relativeX = e.pageX - realOffsetLeft;
						var e = Math.floor(relativeX / sw) + 1;
						if(opt.step) newWidth = e * sw;
						else newWidth = relativeX;
						dStar.width(newWidth);
						if(opt.onMousemove)
							opt.onMousemove.call(this,newWidth / sw);
					},
					mouseleave:function(e){
						dStar.width(oldWidth);
						if(opt.onMouseleave)
							opt.onMouseleave.call(this,start);
					},
					click:function(e){
						e.preventDefault();
						oldWidth = newWidth;
						dStar.width(newWidth);
						start = newWidth / sw;
						if(opt.onClick)
							opt.onClick.call(this,start);
					}
				});
			function findRealLeft(obj){
				if(!obj) return 0;
				return obj.offsetLeft + findRealLeft(obj.offsetParent);
			}
		})
	}
})(jQuery);