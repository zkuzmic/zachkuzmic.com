$(function() {

	//ABOUT PAGE
	if( $("body").hasClass("about-page")){
		$('div#lastfm').lastFM({
			username: 'zachkuzmic',
			apikey: '4096e5ee4c9c6837deff2c5faff61dd8',
			number: 2,
			artSize: 'large',
			noart: 'img/about/listening/noartwork.png',
			onComplete: function(){
				//Done
			}
		});
	
		twitterFetcher.fetch('421865475010600961', 'tweet', 1, true, false, true, undefined, false, undefined, false);
	}

	
	//GLOBAL JS
	var nav = responsiveNav(".main-nav", {
		insert: "after",
		openPos: "static",
		label: "<img src='http://zachkuzmic.com/img/menu.png' alt='Menu'>"
	});
	
});