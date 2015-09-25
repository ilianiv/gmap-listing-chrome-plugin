/* When the browser-action button is clicked... */
/* A function creator for callbacks */
function doStuffWithDOM(href) {
    var start = href ? href.indexOf('uname%3D') : -1;

    if (start < 0 ) {
        alert('Sorry! Cannot find listing ID. :(');

        return;
    }

    start += 8;
    href = href.substr(start);
    var end = href.indexOf('%');
    href = href.substr(0, end);
    href = 'https://plus.google.com/' + href;

    console.log(href);

    chrome.tabs.create({url: href});
}

chrome.browserAction.onClicked.addListener(function (tab) {
    /*...check the URL of the active tab against our pattern and... */
    /* ...if it matches, send a message specifying a callback too */
    chrome.tabs.sendMessage(tab.id, {text: "report_back"},
        doStuffWithDOM);
});