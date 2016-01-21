$(function() {
 
 $('#blade1 h1').fadeIn(200);
 $('#blade1 .content').fadeIn(200);

 $('.blade').click(function() {
 	if ($('html').width() > 1000){
		if($(this).hasClass('current-blade'))
	 	{
		  //nothing happens if already selected	
	 	}
	 	else
	 	{
			$(this).addClass("current-blade opened");
		 	$('.blade').not(this).removeClass("current-blade");
		 	$('.blade h1').fadeOut(50);
		 	$('.blade .content').fadeOut(50);
		 	$('.blade.current-blade h1').delay(400).fadeIn(500);
		 	$('.blade.current-blade .content').delay(450).fadeIn(500);
		 	$('.blade').not(this).transition({
			 	width: '8.5%'
		 	}, 600);
		 	$(this).transition({
			 	width: '40.5%'
		 	}, 600);	
	 	}
	}
	else{
		if($(this).hasClass('opened'))
	 	{
		  //nothing happens if already selected	
	 	}
	 	else
	 	{
			$(this).addClass("current-blade opened");
			$('.blade').not(this).removeClass("current-blade");
		 	$('.blade.current-blade .content').fadeIn();
		 	$(this).css({
			 	height: 'auto'
		 	}, 50);
		 	$('html,body').delay(75).animate({
	            scrollTop: $(this).offset().top - 40},
	            600);
	 	}
	}
 });

 $(window).resize(function() {
 	if ($('html').width() > 1000){
 		$('.blade').css("height","100%");
 		$('.blade').not('.blade.current-blade').css("width","8.5%");
 		$('.opened').not('.blade.current-blade').css("width","8.5%");
		$('.blade.current-blade').css("width","40.5%");
		$('.blade h1').not('.blade.current-blade h1').css("display","none");
		$('.blade.current-blade h1').css("display","block");
		
		$('.blade .content').not('.blade.current-blade .content').css("display","none");
 	}
 	else{
 		$('.blade').css("width","100%");
	 	$('.blade').not('.blade.opened').css("height","120px");
 		$('.blade.opened').css("height","auto");
 		$('.blade.opened .content').css("display","block");
 		$('.blade h1').css("display","block");
 	}
 });
 


});