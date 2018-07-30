(function($){
	function run_flag(ar){
			$(ar).appendTo('.main-youtube');
			$('.main-youtube iframe').addClass("show");
	}
	$('.sq-two .y-tube').click(function(){
		var temp = $(this).attr('data-rel');
		var ts = '<iframe width="100%" height="395" src="http://www.youtube.com/embed/'+temp+'?rel=0" frameborder="0" style="opacity:0" allowfullscreen></iframe>';
		$('.main-youtube iframe').fadeOut("slow", function(){
			$(this).remove();
			run_flag(ts);	
		});

		
	});
	$('#nav').slicknav({
			prependTo:'.mob-menu'
	});
})(jQuery);