// ============ Create Context Menu Entry List Items ============


//#region ===| Context Menu |===

var consoleGreeting = "Hello World! - from event_script.js";
function logSuccess(task) {console.log("%s Successful!",task);}
function logFailure(task) {console.log("%s Failed!",task);}
var ID_CONTEXT_MENU_ITEM_HELLO = "ID_CONTEXT_MENU_ITEM_HELLO";

var TYPES_CONTEXT_MENU_ITEM = { //Object used as an enum
 "NORMAL" : "normal",
 "CHECKBOX" : "checkbox",
 "RADIO" : "radio",
 "SEPARATOR" : "separator"
};

var TYPES_CONTEXT = {
 "ALL" : "all",
 "PAGE" : "page",
 "FRAME" : "frame",
 "SELECTION" : "selection",
 "LINK" : "link",
 "EDITABLE" : "editable",
 "IMAGE" : "image",
 "VIDEO" : "video",
 "AUDIO" : "audio",
 "LAUNCHER" : "launcher",
 "BROWSER_ACTION" : "browser_action",
 "PAGE_ACTION" : "page_action"
};

var match_pattern_stackoverflow = "*://*.stackoverflow.com/*";
var createProperties = {
 "type" : TYPES_CONTEXT_MENU_ITEM.NORMAL,
 "id" : ID_CONTEXT_MENU_ITEM_HELLO,
 "title" : "Custom search '%s'",
 "contexts" : [TYPES_CONTEXT.SELECTION],
 "documentUrlPatterns" : [match_pattern_stackoverflow],
 //Use "targetUrlPatterns" for TYPES_CONTEXT.IMAGE,
 //TYPES_CONTEXT.VIDEO, TYPES_CONTEXT.AUDIO, etc.
 "targetUrlPatterns" : []
};

// Functions

console.log(consoleGreeting);
chrome.contextMenus.create(createProperties,function() {
 if(!chrome.runtime.lastError) {
 logSuccess("ContextMenus.Create");
 chrome.contextMenus.onClicked.addListener(
 function(info,tab) {
 console.log(
 "id: %s, selection: %s, url: %s",
 info.menuItemId,info.selectionText,
 tab.url
 );
 }
 );
 } else {
 logFailure("ContextMenus.Create");
 }
});

//#endregion


//#region ===| Ad Blocker |===

// const defaultFilters = [
// 	"*://*.doubleclick.net/*",
// 	"*://partner.googleadservices.com/*",
// 	"*://*.googlesyndication.com/*",
// 	"*://*.google-analytics.com/*",
// 	"*://creative.ak.fbcdn.net/*",
// 	"*://*.adbrite.com/*",
// 	"*://*.exponential.com/*",
// 	"*://*.quantserve.com/*",
// 	"*://*.scorecardresearch.com/*",
// 	"*://*.zedo.com/*",
// ]

// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) { return { cancel: true }},
//     { urls: defaultFilters },
//     ["blocking"]
// );

//#endregion














// chrome.contextMenus.create({
//   id: 'remove_element',
//   "title": "Remove this element", 
//   "contexts":["all"]
// });

// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//   if (tab) {

//     if (info.menuItemId === 'remove_element') {
//       // remove current element code
//       chrome.scripting.executeScript({
//         target: {tabId: tab.id, allFrames: true},
//         code: `chrome.contextMenus.getTargetElement(${info.targetElementId}).remove();`,
//     });
//     }

//   }
// });

// chrome.contextMenus.create({
//     title: "Remove element",
//     documentUrlPatterns: ["*://*/*"],
//     contexts: ["audio", "editable", "frame", "selection", "image", "link", "page", "password", "video"],
//     onclick(info, tab) {
//       browser.tabs.executeScript(tab.id, {
//         frameId: info.frameId,
//         code: `chrome.contextMenus.getTargetElement(${info.targetElementId}).remove();`,
//       });
//     },
//   });

//   chrome.contextMenus.create({
//     title: "Width: 700px",
//     documentUrlPatterns: ["*://*/*"],
//     contexts: ["audio", "editable", "frame", "image", "link", "page", "password", "video"],
//     onclick(info, tab) {
//       browser.tabs.executeScript(tab.id, {
//         frameId: info.frameId,
//         code: `chrome.contextMenus.getTargetElement(${info.targetElementId}).style.width = "700px";`,
//       });
//     },
//   });

//   chrome.contextMenus.create({
//     title: "Type: text",
//     documentUrlPatterns: ["*://*/*"],
//     contexts: ["audio", "editable", "frame", "image", "link", "page", "password", "video"],
//     onclick(info, tab) {
//       browser.tabs.executeScript(tab.id, {
//         frameId: info.frameId,
//         code: `chrome.contextMenus.getTargetElement(${info.targetElementId}).setAttribute('type','text');`,
//       });
//     },
//   });

//   chrome.contextMenus.create({
//     title: "Demo <script> Tag",
//     documentUrlPatterns: ["*://*/*"],
//     contexts: ["audio", "editable", "frame", "image", "link", "page", "password", "video"],
//     onclick(info, tab) {
//       browser.tabs.executeScript(tab.id, {
//         frameId: info.frameId,
//         code: `chrome.contextMenus.getTargetElement(${info.targetElementId}).value = "<script>alert('Hello-World')</script>";`,
//       });
//     },
//   });

//   chrome.contextMenus.create({
//     title: "Demo SQLi Syntax",
//     documentUrlPatterns: ["*://*/*"],
//     contexts: ["audio", "editable", "frame", "image", "link", "page", "password", "video"],
//     onclick(info, tab) {
//       browser.tabs.executeScript(tab.id, {
//         frameId: info.frameId,
//         code: `chrome.contextMenus.getTargetElement(${info.targetElementId}).value = "SELECT * FROM";`,
//       });
//     },
//   });

//   chrome.contextMenus.create({
//     title: "RaNdOmIzE: ScRiPt / SqLi",
//     documentUrlPatterns: ["*://*/*"],
//     contexts: ["audio", "editable", "frame", "image", "link", "page", "password", "video"],
//     onclick(info, tab) {
//       browser.tabs.executeScript(tab.id, {
//         frameId: info.frameId,
//         code: `
//         // Make Random Toggle CaSeS:
//         let text = chrome.contextMenus.getTargetElement(${info.targetElementId}).value;
//         console.log(text);
//         // For XSS and SQLi
//         var repWords = {
//             script:"ScRiPt",
//             SCRIPT:"sCrIpT",
//             ScRiPt:"script",
//             sCrIpT:"SCRIPT",
//             SELECT:"SeLeCt",
//             select:"sElEcT",
//             FROM:"FrOm",
//             from:"fRoM",
//             WHERE:"WhErE",
//             where:"wHeRe",
//             AND:"AnD",
//             and:"aNd",
//             OR:"Or",
//             or:"oR",
//          };
//          text = text.replace(/script|SCRIPT|ScRiPt|sCrIpT|SELECT|select|FROM|from|WHERE|where|AND|and|OR|or/gi, function(matched){
//            return repWords[matched];
//          });
                  
//          chrome.contextMenus.getTargetElement(${info.targetElementId}).style.width = "700px";
//         chrome.contextMenus.getTargetElement(${info.targetElementId}).value = text;
        
//         `,
//       });
//     },
//   });


// // setting state
// chrome.storage.local.set({
//     name: "Jack"
// }, function ());

// // getting state
// chrome.storage.local.get("name", function (retrieved_data));