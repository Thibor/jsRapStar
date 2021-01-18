(function ($) {
	$.fn.jsRapStar = function (options) {

		return this.each(function () {
			let value = $(this).attr('value');
			let color = $(this).attr('color');
			value = value === undefined ? 0 : parseFloat(value);
			color = color === undefined ? 'yellow' : color;
			this.opt = $.extend({
				star: '&#9733',
				colorFront: color,
				colorBack: 'white',
				enabled: true,
				step: true,
				starHeight: 32,
				length: 6,
				value: value,
				onClick: null,
				onMousemove: null
			}, options);
			let starH = Array(this.opt.length + 1).join('<span>' + this.opt.star + '</span>');
			$(this).empty().addClass('rapStar').css({ color: this.opt.colorBack, 'font-size': this.opt.starHeight + 'px' }).html(starH);
			let widthSingle = $(this).width() / this.opt.length;
			let widthValue = this.opt.value * widthSingle;
			let widthCurrent = widthValue;
			this.StarF = $('<div>').addClass('rapStarFront').css({ color: this.opt.colorFront }).html(starH).width(widthValue).appendTo(this);
			if (this.opt.enabled) {
				$(this).bind({
					mousemove: function (e) {
						widthSingle = $(this).width() / this.opt.length;
						widthCurrent = e.clientX - this.getBoundingClientRect().left;
						if (this.opt.step)
							widthCurrent = Math.floor(widthCurrent / widthSingle + 1) * widthSingle;
						this.StarF.width(widthCurrent);
						if (this.opt.onMousemove)
							this.opt.onMousemove.call(this, widthCurrent / widthSingle);
					},
					mouseleave: function (e) {
						this.StarF.animate({ width: widthValue });
					},
					click: function (e) {
						widthValue = widthCurrent;
						this.opt.value = widthValue / widthSingle;
						if (this.opt.onClick)
							this.opt.onClick.call(this, this.opt.value);
					}
				});
			} else
				$(this).addClass('rapStarDisable');
		})
	}
})(jQuery);