let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeModal,
  });
});


function removeModal() {
  document.body.classList.remove("tp-modal-open");
  const modal = document.getElementsByClassName("tp-modal");
  if (modal && modal.length > 0) {
    modal[0].parentNode.removeChild(modal[0]);
  }
  const backdrop = document.getElementsByClassName("tp-backdrop");
  if (backdrop && backdrop.length > 0) {
    backdrop[0].parentNode.removeChild(backdrop[0]);
  }
}