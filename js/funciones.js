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

});

// BOTON ARRIBA
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
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
