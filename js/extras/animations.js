(function(){
	
	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').removeClass('hidden');
        } else {
            $('.scrollup').addClass('hidden');
        }
    });

	$(".scrollup").click(function(){
		$("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
	});
})();