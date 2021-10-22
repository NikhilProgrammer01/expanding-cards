const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveListener();
    panel.classList.add("active");
  });
});

function removeActiveListener() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
