import "../pages/index.css";
import { initialCards } from "./cards.js";
import {
  createCard,
  deleteCard,
  handleLike,
  handleImageModal,
} from "./card.js";
import { openModal } from "./modal.js";
import { handleFormEditInput, handleFormAddCard } from "./form.js";

export const cardsList = document.querySelector(".places__list");

export const popupEdit = document.querySelector(".popup_type_edit"); // модальное окно для редактирования
export const popupAddCard = document.querySelector(".popup_type_new-card"); // модальное окно для добавления карточки

const editProfileButton = document.querySelector(".profile__edit-button"); // кнопка для редактирования профиля
const addCardButton = document.querySelector(".profile__add-button"); // кнопка для добавления карточки

const formEditInput = document.forms["edit-profile"]; // форма редактирования профиля
const formAddCard = document.forms["new-place"]; // форма добавления карточки

// добавляем все карточки на страницу
initialCards.forEach((cardData) => {
  const cardElement = createCard(
    cardData,
    deleteCard,
    handleLike,
    handleImageModal
  );
  cardsList.append(cardElement);
});

// открываем модальные окна
editProfileButton.addEventListener("click", () => openModal(popupEdit));
addCardButton.addEventListener("click", () => openModal(popupAddCard));

formEditInput.addEventListener("submit", handleFormEditInput);
formAddCard.addEventListener("submit", handleFormAddCard);
