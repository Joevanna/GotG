var characterData = {
	handlerData:function(resJSON){
 
        var templateSource   = $("#characters-template").html(),

            template = Handlebars.compile(templateSource),

            charactersHTML = template(resJSON);

       $('.container').html(studentHTML);
         
    },
    loadCharactersData : function(){

        $.ajax({
            url:"http://gateway.marvel.com/v1/public/series/16410/characters",
            method:'get',
            success:this.handlerData
        })
    }
}


$(document).ready(function() {
	$.ajax({
		url: 'http://gateway.marvel.com/v1/public/series/16410',
		type: 'GET',
		dataType: 'json',
		data: {
			apikey: '1c917464a5be704887754ef19ffff579'
		},
		success: function(data) {
			console.log(JSON.parse(data));
		}
	});

	setTimeout(function() {
		$("img").addClass("active");
        $(".nav ul").addClass("visible");
	}, 500);
	
	$('.nav li').click(function() {
		$(this).toggleClass('selected');

		// $('.wrapper').fadeOut('slow');
		// $('.container').html(characterData.loadCharactersData());
	});

});
