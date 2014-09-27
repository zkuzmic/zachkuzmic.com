$(function() {

	$.get('http://ws.audioscrobbler.com/1.0/user/zachkuzmic/recenttracks.rss', function (data) {
	    $(data).find("entry").each(function () { // or "item" or whatever suits your feed
	        var el = $(this);
	
	        console.log("------------------------");
	        console.log("title      : " + el.find("title").text());
	        console.log("author     : " + el.find("author").text());
	        console.log("description: " + el.find("description").text());
	    });
	});
	
});