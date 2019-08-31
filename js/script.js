$('.page-scroll').on('click', function(e) {

	var tujuan = $(this).attr('href');
   
	var elemenTujuan = $(tujuan);
   
	$('html , body').animate({
	 scrollTop: elemenTujuan.offset().top - 50
	});
   
	e.preventDefault();
   });


   $(window).scroll(function() {
	   var wScroll = $(this).scrollTop();

	  $('.jumbotron img').css({
		  'transform' : 'translate(0px, '+ wScroll +'%)'
	  });

	if( wScroll > 1000) {
		console.log('ok');
	}

   });