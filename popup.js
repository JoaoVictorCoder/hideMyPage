const key = document.getElementById("keyInput")
const storage = localStorage
const keyStored = localStorage.getItem("selectedKey")

document.addEventListener("DOMContentLoaded", () =>{
    if(keyStored !== null){
        key.setAttribute("value", keyStored)
    }
})

window.addEventListener('keydown', (e) => {
    e.preventDefault();
    key.setAttribute("value", e.key);
    chrome.runtime.sendMessage({action: "showOverlay"});
});
