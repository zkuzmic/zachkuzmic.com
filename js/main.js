$(function() {

	//GLOBAL
	var nav = responsiveNav(".main-nav", {
		insert: "after",
		openPos: "static",
		label: "<img src='/img/menu.png' alt='Menu'>"
	});

	//ABOUT PAGE
	if( $("body").hasClass("about-me")){
		$('div#lastfm').lastFM({
			username: 'zachkuzmic',
			apikey: '4096e5ee4c9c6837deff2c5faff61dd8',
			number: 2,
			artSize: 'large',
			noart: '/img/about/listening/noartwork.png',
			onComplete: function(){
				//Done
			}
		});

		var fetcherConfig = {
			"id": '421865475010600961',
			"domId": 'tweet',
			"maxTweets": 1,
			"enableLinks": true,
			"showUser": false,
			"showTime": true,
			"showRetweet": false,
			"showInteraction": false
		};
	
		twitterFetcher.fetch(fetcherConfig);
	}

});