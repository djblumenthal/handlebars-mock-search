

$(document).on('ready', function(){
	var resultsTemplateSource = $('#results-template').html();
	var resultsTemplate = Handlebars.compile(resultsTemplate);
	$('#search-button').on('click', function(){
		$.get('/search', {'search-term': $('#search-term').val()}, function(data){
			console.log(data);

		});
	});
});