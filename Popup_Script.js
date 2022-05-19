// Variables Define

let inputUrlListBox;
let taStickyNotes;

// Functions Initialize

document.addEventListener('DOMContentLoaded', function () {

    // Initialize
    inputUrlListBox = document.getElementById('inputUrlListBox');
    taStickyNotes = document.getElementById('taStickyNotes');

    // Init From Saved Values
    loadInitSavedValues();

    // Setup All Listeners

    inputUrlListBox.addEventListener('blur', function () {
        chrome.storage.local.set({'input_url_list_box': inputUrlListBox.value});
    });

    taStickyNotes.addEventListener('blur', function () {
        chrome.storage.local.set({'ta_sticky_notes': taStickyNotes.value});
    });

    
});


// /**
//  * JS Functions
//  */

function loadInitSavedValues() {
    // Init From Saved Values
    chrome.storage.local.get(['input_url_list_box', 'ta_sticky_notes'],
        function (result) {

            let savedInputUrlListBox = result.input_url_list_box;
            if (savedInputUrlListBox !== undefined && savedInputUrlListBox.length > 0) {
                inputUrlListBox.value = savedInputUrlListBox;
            }

            let savedTaStickyNotes = result.ta_sticky_notes;
            if (savedTaStickyNotes !== undefined && savedTaStickyNotes.length > 0) {
                taStickyNotes.value = savedTaStickyNotes;
            }

        });
}

// function importAllEvents() {
//     let message = {
//         key: 'import'
//     }
//     chrome.scripting.query({active: true, currentWindow: true}, function (tabs) {
//         chrome.scripting.sendMessage(tabs[0].id, message, function (response) {
//         });
//     });
// }

// chrome.runtime.onMessage.addListener(function (request) {
//     if (request.key === "refresh") {
//         loadInitSavedValues();
//     }

// });


// // Popup OSINT Webpages



// // END Popup OSINT Webpages

