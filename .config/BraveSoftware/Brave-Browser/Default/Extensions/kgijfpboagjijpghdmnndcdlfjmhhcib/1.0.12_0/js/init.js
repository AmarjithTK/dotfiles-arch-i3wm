(function() {
    // GA code
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
    
    ga("create", "UA-121536159-1", "auto");
    ga("set", "checkProtocolTask", null);
        
    chrome.runtime.onInstalled.addListener(function(details) {
        if (details && details.reason && details.reason == "install") {
            chrome.tabs.create({url: "main.html"});
            
            ga("send", "event", "extension", "install", "fired from init.js");
        }
    });
    
    chrome.runtime.setUninstallURL("https://thisismadeinpoland.com/simpli", function() {
        ga("send", "event", "extension", "uninstall", "fired from init.js");
    });

    // whenever new version of extension is available, force extension to reload itself to apply the update
    chrome.runtime.onUpdateAvailable.addListener(function(details) {
        chrome.runtime.reload();
        
        ga("send", "event", "extension", "update available reload", "fired from init.js");
    });
    
    // whenever icon next to address bar is clicked, open home page
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.create({url: "main.html"});
        
        ga("send", "event", "extension", "simpli icon clicked", "fired from init.js");
    });

    // handles events tracking from content script
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.senderMethod == "gaTrackEvent") {
            ga("send", "event", request.gaCategory, request.gaAction, request.gaLabel);
        }
    });
})();
