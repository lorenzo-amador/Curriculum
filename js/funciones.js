// SWEET ALERT
Swal.fire({
	title: `¡Hola!`,
	text:`Bienvenido, A continuación tendrá a su disposición mas datos sobre mi`,
	// background:
	timer:4000,
	timerProgressBar:true,
	showConfirmButton:false,

	imageUrl:`img/alerta.png`,
	imageWidth:`20%`,

	customClass: {
		title:`titulo-alert`,
	}

});

// BOTON ARRIBA
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 900);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(900);
		} else {
			$('.ir-arriba').slideUp(900);
		}
	});
});

// BOTON TOGGLE
$(document).ready(function(){
	$('.toggle').click(function(){
		$('.toggle').toggleClass('active')
		$('nav').toggleClass('active')
	})
})