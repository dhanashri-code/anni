document.getElementById("revealBtn").addEventListener("click", () => {
  document.querySelector(".intro-section").style.display = "none";
  document.getElementById("content").style.display = "block";
  window.scrollTo(0, 0);
});
