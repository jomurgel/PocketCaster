/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */

chrome.app.runtime.onLaunched.addListener(function () {
    
    // Center this shiz.  Boom.
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = 1100;
    var height = 700;

    var mainWindow = chrome.app.window.create('index.html', {
        id: "mainWindowID",
        bounds: {
            width: width,
            height: height,
            left: Math.round((screenWidth - width) / 2),
            top: Math.round((screenHeight - height) / 2)
        }
    },
    function(window) {
      
        window.contentWindow.onload = function () {
            // Retrieve the webview element
            var webview = window.contentWindow.document.querySelector('#pcast');

            webview.addEventListener('newwindow', function (e) {
              // Event handler for when external links are clicked because of
				    	// the Chrome packaged app security restriction on opening links in the regular browser
                e.preventDefault();
                window.open(e.targetUrl);
            });
        };
    });
});

// function creationCallback(notID) {
// console.log("Succesfully created " + notID + " notification");
// }

// window.webkitNotifications.createNotification
// ("images/antartica-400x400.png","Notifications App", "Notifications App started").show();

// // When new or updated!
// chrome.app.runtime.onInstalled.addListener(function() {
// //
// });

//https://github.com/aaroncrespo/chrome-packaged-music/blob/master/player.js

// function buttonClick(callback) {

// }

// function pausePlay() {
//   pcTabs = [];
//   chrome.app.window.getAll({ populate : true }, getWindows);
// }

// function getWindows(windows) {
// 	document.getElementById("pcasts").executeScript({ file : "pcasts.js" }, onMainExecuted);
// }

// function onMainExecuted(result) {
// 	if(result == "jqueryIsNotExists")
// 		chrome.tabs.executeScript(pcTabs[0].id, { file : "jquery.js" }, onJqueryExecuted);
// 	 else 
// 		playPause(result);
// }

// function onJqueryExecuted(result) {
// 	chrome.tabs.executeScript(pcTabs[0].id, { file : "pcasts.js" }, onMainExecuted);
// }

// function playPause(result){
// 	if (result != "nothingToPlay") {
// 		console.log('music');
// 	} else { // nothing to play
// 		console.log('nothing');
// 	}
// }