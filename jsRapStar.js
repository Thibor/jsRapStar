(function($){
	$.fn.jsRapStar = function(options){
		var defaults = {
			star:'&#9733',
			colorFront:'yellow',
			colorBack:'white',
			enabled:true,
			step:true,
			starHeight:32,
			length:6
		};
		return this.each(function(){
			var opt = $.extend(defaults,options);
			this.starH = Array(opt.length + 1).join('<span>' + opt.star + '</span>');
			this.StarB = $(this).addClass('rapStarBack').css({color:opt.colorBack,'font-size':opt.starHeight + 'px'}).html(this.starH);
			var start = parseFloat($(this).attr('start'));
			var sw = $(this.StarB).width() / opt.length;
			var aw = start * sw;
			this.StarF = $('<div>').addClass('rapStarFront').css({color:opt.colorFront,'font-size':opt.starHeight + 'px'}).html(this.starH).width(aw).appendTo($(this));
			if(opt.enabled)
				$(this).bind({
					mousemove:function(e){
						e.preventDefault();
						var realOffsetLeft = findRealLeft(this);
						var relativeX = e.pageX - realOffsetLeft;
						var e = Math.floor(relativeX / sw) + 1;
						if(opt.step) newWidth = e * sw;
						else newWidth = relativeX;
						this.StarF.width(newWidth);
						if(opt.onMousemove)
							opt.onMousemove.call(this,newWidth / sw);
					},
					mouseleave:function(e){
						this.StarF.width(aw);
						if(opt.onMouseleave)
							opt.onMouseleave.call(this,start);
					},
					click:function(e){
						e.preventDefault();
						aw = newWidth;
						this.StarF.width(newWidth);
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