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
			let widthValue = this.opt.value * ($(this).width() / this.opt.length);
			let widthCurrent = widthValue;
			this.StarF = $('<div>').addClass('rapStarFront').css({ color: this.opt.colorFront }).html(starH).width(widthValue).appendTo(this);
			if (this.opt.enabled) {
				$(this).bind({
					mousemove: function (e) {
						widthCurrent = e.clientX - this.getBoundingClientRect().left;
						if (this.opt.step)
							widthCurrent = (Math.floor((widthCurrent * this.opt.length) / $(this).width()) + 1) * ($(this).width() / this.opt.length);
						this.StarF.width(widthCurrent);
						if (this.opt.onMousemove)
							this.opt.onMousemove.call(this, widthCurrent /  ($(this).width() / this.opt.length));
					},
					mouseleave: function (e) {
						this.StarF.width(widthValue);
					},
					click: function (e) {
						widthValue = widthCurrent;
						this.opt.value = widthValue / ($(this).width() / this.opt.length);
						if (this.opt.onClick)
							this.opt.onClick.call(this, this.opt.value);
					}
				});
			} else
				$(this).addClass('rapStarDisable');
		})
	}
})(jQuery);