(function ($) {
    $.fn.tooltip = function (options) {
        var settings = $.extend({
            "position": 'top',
            "background-color": 'blue'
        }, settings, options);

        return this.each(function (index, value, arr) {
            var that = $(this);
            that.mouseover(function (ev) {
                that.find("span.info").show();
            });

            that.mouseleave(function (ev) {
                that.find("span.info").hide();
            })
        });
    }
})(jQuery)
