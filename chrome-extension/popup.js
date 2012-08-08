



function onLoad() {
    var input = $("#input");
    var output = $("#output");

    output.hide();
    output.css("font-family", "courier new");
    chrome.tabs.executeScript(null, {file:"jquery.js"}, null);

    function onEnter(evt) {
        // When the user presses enter, find the current tab and generate the
        // password for the site, given the domain name.
        if(evt.keyCode == 13) {
            chrome.tabs.getSelected(null, onTab);
        }
    }

    function onTab(tab) {
        // Callback for tab request.  Generate the passphrase here using the 
        // domain name given by the current tab, plus the user's input.
        var passphrase = input.val();
        var domain = tab.url.split("/")[2].match(/([^.]+\.[^.]+)$/)[1]
        var text = passphrase+domain;
        var hash = CryptoJS.SHA256(passphrase+domain).toString();
        var result = Base62.encode(hash).substring(0, 8);

        input.hide();
        output.html(domain + "&nbsp;" + result);
        output.show();

        code = "$(':password').each(function(i,e) { $(e).val('"+result+"'); });";
        chrome.tabs.executeScript(null, {code:code});
        // Auto-fill the password field!
    }
    
    input.keyup(onEnter);
}

$(document).ready(onLoad);

