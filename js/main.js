/*
	var application = {

		init: function() {	

			var button = $('.nav .btn-team'),
				self = this;

			button.click(function(){
				self.charactersFetch();
			});
			this.mobileDetection();

		},

		mobileDetection: function() {
			if(!(WURFL.is_mobile)) {
				$('body').addClass('desktop');
				setTimeout(function() {
					$("img").addClass("active");
			        $(".nav .wrap").addClass("visible");
				}, 500);
			} else if (WURFL.is_mobile) {
				$('body').addClass('mobile');
				$("img").addClass("mob-active");
			    $(".nav .wrap").addClass("mobile");
			}
		},

		loadChactersScreen: function(templateSrc) {

			var template = Handlebars.compile(templateSrc);

			resultsPlaceholder = $(".container-characters");

			$.ajax({
				url : "js/guardians.json",
				dataType :"json",
				type : "GET"
						
			}).done(function(data) {
				resultsPlaceholder.html(template(data));
				$('.container-characters').attr('aria-hidden','false');

				$('.item').on('click',function() {
					if(!(WURFL.is_mobile)) {
						$(this).toggleClass('selected');
					} else {
						$(this).toggleClass('touched');
					}				
				});

				$('.back').click(function() {
					$('.container-characters').hide();
					$('.wrapper').show();
				});
			});

		},

		charactersFetch: function() {
			
			var templateSource = $("#characters-template").html();

			if (templateSource) {
				this.loadChactersScreen(templateSource);
			}
				
			$('.wrapper').fadeOut('slow');
			$('body').css('height','100vh');
				
		}
	}*/


var application = (function() {


	function charactersFetch() {

		var templateSource = $("#characters-template").html();

		if (templateSource) {
			loadChactersScreen(templateSource);
		}
			
		$('.wrapper').fadeOut('slow');
		$('body').css('height','100vh');
		$('.container-characters').fadeIn('slow');

	}

	function loadChactersScreen(templateSrc) {

		var template = Handlebars.compile(templateSrc);

		resultsPlaceholder = $(".container-characters");

		$.ajax({
			url : "js/guardians.json",
			dataType :"json",
			type : "GET"
					
		}).done(function(data) {
			resultsPlaceholder.html(template(data));
			$('.container-characters').attr('aria-hidden','false');

			$('.item').on('click',function() {
				if(!(WURFL.is_mobile)) {
					$(this).toggleClass('selected');
				} else {
					$(this).toggleClass('touched');
				}				
			});

			$('.back').click(function() {
				$('.container-characters').fadeOut('slow');
				$('.wrapper').fadeIn('slow');
			});
		});

	}

	function mobileDetection() {

		if(!(WURFL.is_mobile)) {

			$('body').addClass('desktop');

			setTimeout(function() {
				$("img").addClass("active");
		        $(".nav .wrap").addClass("visible");
			}, 500);

		} else if (WURFL.is_mobile) {

			$('body').addClass('mobile');
			$("img").addClass("mob-active");
		    $(".nav .wrap").addClass("mobile");

		}

	}

	function init() {

		var button = $('.nav .btn-team');

		button.click(function(){
			charactersFetch();
		});

		mobileDetection();

	}

	return {
		init: init
	}

})();


$(document).ready(function() {

	setTimeout(function() {
			$('.loader-container').hide();
		}, 1000);

	setTimeout(function() {
		application.init();
	}, 1000);
	

});



// $(document).ready(function() {
// 	var templateSource = $("#characters-template").html();
// 	var template = Handlebars.compile(templateSource);
// 	var resultsPlaceholder = $(".container-characters");

// 	if(!(WURFL.is_mobile)) {
// 		setTimeout(function() {
// 			$("img").addClass("active");
// 	        $(".nav .wrap").addClass("visible");
// 		}, 500);
// 	} else if (WURFL.is_mobile) {
// 		$("img").addClass("mob-active");
// 	        $(".nav .wrap").addClass("mobile");
// 	}
	
// 	$('.nav .btn-team').click(function() {
		
// 		$('.wrapper').fadeOut('slow');

// 		$.ajax({
// 			url : "js/guardians.json",
// 			dataType :"json",
// 			type : "GET"
					
// 		}).done(function(data) {
// 			resultsPlaceholder.html(template(data));
// 			$('.container-characters').attr('aria-hidden','false');

// 			$('.item').on('click',function() {

// 				$(this).toggleClass('selected');
// 			});

// 			$('.close').on('click',function() {
		
// 				$(this).parent().removeClass('selected');
// 			});
// 		});
// 	});	
// });

