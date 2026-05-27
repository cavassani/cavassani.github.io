(function ($) {

	$(window).load(function () {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Scroll to top button
		/* ---------------------------------------------- */

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar scrollspy
		/* ---------------------------------------------- */

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		}

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function(e) {

			e.preventDefault();

			var c_name = $('#c_name').val();
			var c_email = $('#c_email').val();
			var c_message = $('#c_message').val();
			var response = $('#contact-form .ajax-response');

			var formData = {
				'name'       : c_name,
				'email'      : c_email,
				'message'    : c_message
			};

			$.ajax({
				type        : 'POST',
				url         : "https://formspree.io/marceloscavassani@gmail.com",
				data        : formData,
				dataType    : 'json',
				encode      : true,
				success		: function(){
				    response.html('E-mail enviado, agradeço o contato.')
				        .fadeIn(50).fadeOut(3000);
				    setTimeout(function() {
       					window.location.reload();
  					},6000);
				}
			});

        	return false;
		});

	});

})(jQuery);
