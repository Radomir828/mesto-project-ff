// закрытыть попап если нажали "X" или по оверлею
const handleClose = (event) => {
  if (
    event.target.classList.contains("popup__close") ||
    event.currentTarget === event.target
  ) {
    closeModal(event.currentTarget);
  }
};

// закрытыть попап если нажали "Esc"
const handleCloseByEscape = (event) => {
  if (event.key === "Escape") {
    const popupWindow = document.querySelector(".popup_is-opened");
    closeModal(popupWindow);
  }
};

export function closeModal(popupWindow) {
  popupWindow.classList.remove("popup_is-opened");
  popupWindow.removeEventListener("click", handleClose);
  document.removeEventListener("keydown", handleCloseByEscape);
}

export function openModal(popupWindow) {
  popupWindow.classList.add("popup_is-opened");
  popupWindow.addEventListener("click", handleClose);
  document.addEventListener("keydown", handleCloseByEscape);
}
