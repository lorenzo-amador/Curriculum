Swal.fire({
	title: `¡Hola!`,
	text:`Bienvenido, a continuación tendrá a su disposición mas datos sobre mi`,
	timer:2500,
	showConfirmButton:false,
	imageUrl:`img/alerta.webp`,
	imageWidth:`20%`,
	scrollbarPadding:false,
});


// BOTON ARRIBA
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 4px ){
			$('.ir-arriba').slideDown(500);
		} else {
			$('.ir-arriba').slideUp(500);
		}
	});
});

// SWIPER 
 var swiper = new Swiper('.swiper', {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
