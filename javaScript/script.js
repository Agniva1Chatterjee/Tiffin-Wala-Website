const modal = document.getElementById("contactModal");



function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

function backdropClick(e) {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
}