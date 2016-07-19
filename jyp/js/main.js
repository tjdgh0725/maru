$(function(){

	$('.bxslider').bxSlider({
		
		mode: 'fade',
			speed:1000,
			auto: true,
			autoStart: true,
		
	});

});


	
$(function(){

	$('#logo1').on('click',function(){
	
		$('#nav').toggleClass('open');
		if($('#nav').hasClass('open')){
			$('#nav').show();
			$('#logo1').find('img').attr('src','images/logo2.png');
		}
		
		else{
			$('#nav').hide();
			$('#logo1').find('img').attr('src','images/logo.png');
		};
		
	});


$(function(){

	$('#button').on('click',function(){
			$('#news2').show();
			$('#button').hide();
			$('#button2').show();
	})

	$('#button2').on('click',function(){
			$('#news2').hide();
			$('#button').show();
			$('#button2').hide();
	});	


});





	$('.n_list1 li:nth-child(1)').on('click',function(e){
		e.preventDefault();

		var header = $('#header').offset().top;
		
		$('html,body').stop().animate({'scrollTop':header},300,'linear');

	});


	$('.n_list1 li:nth-child(2)').on('click',function(e){
		e.preventDefault();
				
		var artist = $("#artist").offset().top;
	
		$('html,body').stop().animate({'scrollTop':artist},300,'linear');

	});

	$('.n_list1 li:nth-child(3)').on('click',function(e){
		e.preventDefault();

		var video = $('#video1').offset().top;

		$('html,body').stop().animate({'scrollTop':video},600,'linear');
	
	});

	$('.n_list1 li:nth-child(4)').on('click',function(e){
		e.preventDefault();

		var news = $('#news1').offset().top;

		$('html,body').stop().animate({'scrollTop':news},900,'linear');
	
	});




});













