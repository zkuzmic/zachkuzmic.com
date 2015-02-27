var http = require("http");
var fs = require("fs");
var handlebars = require("handlebars");
var sass = require('node-sass');
var chokidar = require('chokidar');



//SASS COMPILING STUFF
function scss_callback(suc) {
	console.log("success: " + suc);
}

function scss_error(err) {
	console.log("error: " + err);
}

function render_scss() {
	sass.renderFile({
	    file: scss_filename,
	    success: scss_callback,
	    error: scss_error,
	    outputStyle: "compressed",
	    outFile: css_filename
	});
}

var scss_filename = "ghost/content/themes/zk-theme/assets/css/zk.scss"
var css_filename = "ghost/content/themes/zk-theme/assets/css/zk.css"
render_scss();

var watcher = chokidar.watch(scss_filename, {ignored: /[\/\\]\./, persistent: true});
watcher.on('change', function(path) {
	render_scss();
	console.log('File', path, 'has been changed');
	//restart node here maybe? Or find a way to make it know that the zk.css file has been updated
})




//PAGE REQUEST STUFF

var template = fs.readFileSync("./ghost/content/themes/zk-theme/default.hbs", "utf8");

function onRequest(req, res) {
	console.log("request: " + req.url);

	var existingURL;
	var	bodyClass;
	var currentPage;
	var currentPageScripts;
	var path = req.url;
	
	if (path == "/"){
		path = "index";
		currentPage = "current-page-1"; //this is to mark the current nav item
	} else {
		if (path.charAt(0) == "/") path = path.substr(1);
		if (path.charAt(path.length - 1) == "/") path = path.substr(0, path.length - 1);	
	}
	
	var requestedPage = path + ".hbs";
	var pageContent;
	
	if (fs.existsSync(requestedPage)) {
	    //page exists, load it into a variable
		pageContent = fs.readFileSync(requestedPage, "utf8");
	}else{
		//page does not exist, go to 404
		pageContent = fs.readFileSync("404.hbs", "utf8");
		currentPage = "current-page-0";
	}
	
	//specific page stuff
	if (requestedPage.substring(0, 5) == "work/"){
		bodyClass = "work-item-page " + path;
		currentPage = "current-page-1";
	} else if (requestedPage.substring(0, 5) == "about"){
		bodyClass = "about-page";
		currentPage = "current-page-2";
		currentPageScripts = '<script src="/js/engage.lastfm.js"></script><script src="/js/twitter-fetcher.js"></script>';
	} else if (requestedPage.substring(0, 6) == "google"){
		bodyClass = "work-item-page " + path;
		currentPage = "current-page-0";
	}
	
	//data to be placed in page
	var source = {
		meta_title : "Zach Kuzmic - User Experience Designer in Austin, Texas",
		body_class : bodyClass,
		current_page : currentPage,
		body : pageContent,
		jqueryCDN : '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>',
		current_page_scripts : currentPageScripts
	};

	var pageBuilder = handlebars.compile(template);
	var pageText = pageBuilder(source);
	res.writeHead(200, {"Context-Type": "text/html"});
	res.write(pageText);
	res.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server has started on port 8000.");
