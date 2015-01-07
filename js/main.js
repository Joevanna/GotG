$(document).ready(function() {
	var templateSource = $("#characters-template").html();
	var template = Handlebars.compile(templateSource);
	var resultsPlaceholder = $(".container-characters");

	setTimeout(function() {
		$("img").addClass("active");
        $(".nav ul").addClass("visible");
	}, 500);
	
	$('.nav li').click(function() {
		
		$('.wrapper').fadeOut('slow');

		$.ajax({
			url : "js/guardians.json",
			dataType :"json",
			type : "GET"
					
		}).done(function(data) {
			resultsPlaceholder.html(template(data));
			console.log(data);
		}).error(function(data){
			console.error('JSON not loaded!');
		});
	});

});

