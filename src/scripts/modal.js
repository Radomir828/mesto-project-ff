const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardUrlInput = document.querySelector(".popup__input_type_url");

// получение значений из профиля
const getProfileInfo = () => {
  console.log("вызывается ф-ия getProfileInfo");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  // cardNameInput.value = "";
  // cardUrlInput.value = "";
};

// При открытии, поля формы для добавления карточки будут пустым
const setCardInfo = () => {
  console.log("вызывается ф-ия setCardInfo");
  cardNameInput.value = "";
  cardUrlInput.value = "";
};

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
  if (popupWindow.classList.contains("popup_type_edit")) {
    getProfileInfo();
  } else if (popupWindow.classList.contains("popup_type_new-card")) {
    setCardInfo();
  }

  popupWindow.classList.add("popup_is-opened");

  popupWindow.addEventListener("click", handleClose);

  document.addEventListener("keydown", handleCloseByEscape);
}
