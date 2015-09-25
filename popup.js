/**
 * Created by iivanov on 25.9.2015 г..
 */
/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    var listings = document.getElementsByClassName('lukpm')[0];

    if (listings) {
        listings = listings.innerHTML;
    }

    sendResponse(listings);
});