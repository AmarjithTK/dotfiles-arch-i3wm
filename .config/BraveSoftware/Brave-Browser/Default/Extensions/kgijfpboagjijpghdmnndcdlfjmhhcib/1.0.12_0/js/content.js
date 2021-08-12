(function() {
    // content script
    var contentScript = function() {
        window.removeEventListener("load", contentScript);
        
        function initSmartSelect() {
            function buildSmartSelectElement(selectedText, posTop, posLeft) {
                var bodyEl = document.getElementsByTagName("body")[0],
                    ssEl = document.createElement("div"),
                    ssSearchEl = document.createElement("span"),
                    ssCopyEl = document.createElement("span");
                
                ssEl.id = "simpli-smart-select";
                
                ssEl.style.top = posTop - 50 + "px";
                ssEl.style.left = posLeft - 65 + "px";
                ssEl.style.position = "absolute";
                ssEl.style.margin = "0";
                ssEl.style.padding = "8px 16px";
                ssEl.style.backgroundColor = "#212121"; /* gray 900 */
                ssEl.style.color = "#fff"; /* white */
                ssEl.style.fontWeight = "400";
                ssEl.style.fontStyle = "normal";
                ssEl.style.fontSize = "12px";
                ssEl.style.fontFamily = "'Roboto', Helvetica, Arial, sans-serif";
                ssEl.style.lineHeight = "1";
                ssEl.style.letterSpacing = "0.4px";
                ssEl.style.zIndex = "1000000";
                ssEl.style.boxShadow = "0px 5px 10px -4px rgba(0, 0, 0, 0.4)";
                ssEl.style.borderRadius = "8px";
                ssEl.style.border = "0";

                // smart select options
                ssSearchEl.className = "simpli-smart-select-option";
                ssSearchEl.style.position = "relative";
                ssSearchEl.style.lineHeight = "1";
                ssSearchEl.style.display = "inline-block";
                ssSearchEl.style.cursor = "pointer";
                ssSearchEl.style.fontSize = "12px";
                ssSearchEl.style.fontWeight = "400";
                ssSearchEl.style.fontStyle = "normal";
                ssSearchEl.style.fontFamily = "'Roboto', Helvetica, Arial, sans-serif";
                ssSearchEl.style.letterSpacing = "0.4px";
                ssSearchEl.style.paddingRight = "14px";
                ssSearchEl.style.borderRight = "solid 1px #fff"; /* white */
                ssSearchEl.innerHTML = "Search";
                
                ssCopyEl.className = "simpli-smart-select-option";
                ssCopyEl.style.position = "relative";
                ssCopyEl.style.lineHeight = "1";
                ssCopyEl.style.display = "inline-block";
                ssCopyEl.style.cursor = "pointer";
                ssCopyEl.style.fontSize = "12px";
                ssCopyEl.style.fontWeight = "400";
                ssCopyEl.style.fontStyle = "normal";
                ssCopyEl.style.fontFamily = "'Roboto', Helvetica, Arial, sans-serif";
                ssCopyEl.style.letterSpacing = "0.4px";
                ssCopyEl.style.marginLeft = "14px";
                ssCopyEl.innerHTML = "Copy";
                
                ssSearchEl.addEventListener("click", function() {
                    var searchEngineUrl = getStorage("simpli_searchEngineUrl") == null ? "https://www.google.com/search?q=" : getStorage("simpli_searchEngineUrl");
                    
                    setTimeout(function() {
                        window.open(searchEngineUrl + selectedText);
                        
                        gaTrackEvent("smart select", "search", searchEngineUrl);
                        
                        ssEl.remove();
                    }, 100);
                });
                
                ssCopyEl.addEventListener("click", function() {
                    copyTextToClipboard(selectedText);
                    
                    gaTrackEvent("smart select", "copy", "");
                    
                    setTimeout(function() {
                        ssEl.remove();
                    }, 100);
                });
                
                ssEl.appendChild(ssSearchEl);
                ssEl.appendChild(ssCopyEl);
                
                bodyEl.appendChild(ssEl);
                
                gaTrackEvent("smart select", "init", "");
            }
            
            function copyTextToClipboard(textToCopy) {
                var bodyEl = document.getElementsByTagName("body")[0],
                    tmpTextArea = document.createElement("textarea");
                
                tmpTextArea.style.width = "0px";
                tmpTextArea.style.height = "0px";
                tmpTextArea.style.outline = "none";
                tmpTextArea.style.backgroundColor = "transparent";
                tmpTextArea.style.webkitAppearance = "none";
                tmpTextArea.style.color = "transparent";
                tmpTextArea.style.resize = "none";
                tmpTextArea.style.textIndent = "-9999px";
                tmpTextArea.value = textToCopy;
                
                bodyEl.appendChild(tmpTextArea);
                
                tmpTextArea.select();
                tmpTextArea.focus();
                
                document.execCommand("copy");
                
                setTimeout(function() {
                    bodyEl.removeChild(tmpTextArea);
                }, 100);
            }
        
            function handleSelectedText(event) {
                var userSelectedText = window.getSelection().toString();
                
                getChromeStorage("simpli_settingsSmartSelectEnable");
                getChromeStorage("simpli_searchEngineUrl");
                
                if (event.target.className != undefined && event.target.className != "simpli-smart-select-option") {
                    var existingSSEl = document.getElementById("simpli-smart-select");
                    if (existingSSEl) {
                        existingSSEl.remove();
                    }
                }
                
                if (userSelectedText != "") {
                    if (getStorage("simpli_settingsSmartSelectEnable") == "true") {
                        var cursorPosTop = event.pageY,
                            cursorPosLeft = event.pageX;
                        
                        buildSmartSelectElement(userSelectedText, cursorPosTop, cursorPosLeft);
                    }
                }
            }
            
            document.addEventListener("mouseup", handleSelectedText);
            document.addEventListener("keyup", handleSelectedText);
            
            // added to handle properly clicks in already selected text,
            // and remove Smart Select afterwards
            document.addEventListener("selectionchange", function(event) {
                var existingSSEl = document.getElementById("simpli-smart-select");
                if (existingSSEl) {
                    setTimeout(function() {
                        existingSSEl.remove();
                    }, 150);
                }
            });
        }

        initSmartSelect();
    }

    // tools
    function gaTrackEvent(category, action, label) {
        chrome.runtime.sendMessage({senderMethod: "gaTrackEvent", gaCategory: category, gaAction: action, gaLabel: label}, function(response) {
            // do nothing
        });
    }

    function setStorage(key, value) {
        localStorage.removeItem(key);
        localStorage.setItem(key, value);
    }

    function getStorage(key) {
        return localStorage.getItem(key);
    }
    
    function setSessionStorage(key, value) {
        sessionStorage.removeItem(key);
        sessionStorage.setItem(key, value);
    }

    function getSessionStorage(key) {
        return sessionStorage.getItem(key);
    }

    function getChromeStorage(key) {
        chrome.storage.local.get(key, function(result) {
            var tmpValue = result[key];
            setStorage(key, tmpValue);
        });
    }
    
    window.addEventListener("load", contentScript);
})();
