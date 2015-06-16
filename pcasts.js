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