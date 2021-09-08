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
		}, 2000);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(2000);
		} else {
			$('.ir-arriba').slideUp(2000);
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
