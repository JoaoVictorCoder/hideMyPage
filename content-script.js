const overlay = document.createElement("div");
overlay.setAttribute("style", "position: fixed; height: 100%; width: 100%; z-index: 9999; background-color: black; left: 0; top: 0;");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "showOverlay") {
        window.alert("hi")
    }
});