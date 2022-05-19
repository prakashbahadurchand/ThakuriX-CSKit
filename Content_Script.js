// Common For All
let SITE_PAGE_URL = window.location.href;
let isYouTubePage = SITE_PAGE_URL.includes('youtube.com');
let isGoogleSearchPage = SITE_PAGE_URL.includes('google.com/search?q=');
let isGitHubSearchPage = SITE_PAGE_URL.includes('github.com/search?q=');
let isGitHubPage = SITE_PAGE_URL.includes('github.com');
let isSearchPage = SITE_PAGE_URL.includes('search?q=');

// Setup For Google Search Page
if (isGoogleSearchPage) {

    let hintText = "<br><div id='google-dork-chips'></div>";
    let googleSearchBar = document.getElementById("searchform");
    let googleSearchBox = document.getElementsByName('q')[0];
    googleSearchBar.innerHTML += hintText;

    let belowSearchBar = document.getElementById("hdtb");
    belowSearchBar.style.marginTop = "50px";

    // add chips
    let googleDorkChips = ['allintext:"keyword"', 'intext:"keyword"', 'inurl:"keyword"', 'allinurl:"keyword"', 'intitle:"keyword"', 'allintitle:"keyword"', 'site:"www.google.com"', 'filetype:"pdf"', 'link:"keyword"', 'numrange:321-325', 'filetype:pdf & (before:2000-01-01 after:2001-01-01)', 'inanchor:rat', 'allinpostauthor:"keyword"', 'related:www.google.com', 'cache:www.google.com'];

    let chipTextIndex;
    for (chipTextIndex=0; chipTextIndex<googleDorkChips.length; chipTextIndex++) {

        var chip = document.createElement("div");
        chip.setAttribute('name','item-chip');
        chip.innerText = googleDorkChips[chipTextIndex];
        chip.style.border = "1px solid grey";
        chip.style.display = "inline-block";
        chip.style.borderRadius = "30px";
        chip.style.padding = "3px 8px 3px 8px";
        chip.style.backgroundColor = "#222";
        chip.style.margin = "2px 5px 2px 5px";
        chip.style.cursor = "pointer";
        document.getElementById('google-dork-chips').appendChild(chip);
    }

    let domChips = document.getElementsByName("item-chip");
    for (chipTextIndex=0; chipTextIndex<domChips.length; chipTextIndex++) {
        // Click Listener
        let chip = domChips[chipTextIndex];
        chip.addEventListener('click', function(event) {
            chip.style.border = "1px solid #222";
            console.log(chip.innerText);
            document.getElementsByName('q')[0].value += " " + chip.innerText;
            });
    }

}

// Setup For GitHub Search Page
if (isGitHubPage && isSearchPage) {

    let hintText = "<hr><div id='github-dork-chips'>" 
    + "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    +"</div><hr>";
    let gitHubSearchBar = document.getElementsByClassName("js-header-wrapper")[0];
    gitHubSearchBar.innerHTML += hintText;

}

function appendSearchWithCustomize(htmlID, appendText, beginSelectIndex, endSelectIndex) {


}



// Search & Block Restricted Words

// let whiteListSites = ["google.com", "facebook.com", "hackerone.com"]

// let listWords = ["porn", "sex", "fuck", "movie", "dubbed", "comedy"];
// let listWordsIndex;
// for (listWordsIndex=0; listWordsIndex<listWords.length; listWordsIndex++) {
// var word = listWords[listWordsIndex],
//     queue = [document.body], curr;
// while (curr = queue.pop()) {
//     if (!curr.textContent.match(word)) continue;
//     for (var i = 0; i < curr.childNodes.length; ++i) {
//         switch (curr.childNodes[i].nodeType) {
//             case Node.TEXT_NODE : // 3
//                 if (curr.childNodes[i].textContent.match(word)) {
//                    // Matched or Found
//                    if (isYouTubePage) {
//                         let onStartPage = document.getElementById("contents")
//                         if (onStartPage != undefined) onStartPage.remove();
//                         let onSearchPage = document.getElementsByTagName("ytd-search")[0];
//                         if (onSearchPage != undefined) onSearchPage.remove();
//                    } else {
//                         document.body.remove();
//                         //window.location.replace('https://google.com');
//                    }
//                 }
//                 break;
//             case Node.ELEMENT_NODE : // 1
//                 queue.push(curr.childNodes[i]);
//                 break;
//         }
//     }
// }
// }