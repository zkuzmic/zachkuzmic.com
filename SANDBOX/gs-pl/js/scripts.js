$( document ).ready(function() {
	
	$.get('head.mst', function(template) {
	    var rendered = Mustache.render(template);
	    $('head').html(rendered);
	    $("body").show();
	});
	
	$.get('sidebar.mst', function(template) {
	    var rendered = Mustache.render(template);
	    $('#sidebar').html(rendered);
	});
	
	


});