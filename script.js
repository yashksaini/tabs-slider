let activeTab = 0;
const content = document.querySelector("#content");
function selectOption(tabNumber) {
  let x = "tab-" + tabNumber;
  activeTab = tabNumber;
  scrollContent();
  clearActive();
  document.getElementById(x).className = "active";
}
function scrollContent() {
  const contentWidth = content.scrollWidth / 3;
  content.scrollTo({ left: activeTab * contentWidth, behavior: "smooth" });
}

function clearActive() {
  for (let i = 0; i < 3; i++) {
    let y = "tab-" + i;
    document.getElementById(y).className = "";
  }
}
