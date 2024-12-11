import { closeModal } from "./modal";
import { createCard, deleteCard, handleLike, handleImageModal } from "./card";
import { popupEdit, popupAddCard, cardsList } from "./index.js";

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardUrlInput = document.querySelector(".popup__input_type_url");

export const handleFormEditInput = (event) => {
  event.preventDefault();

  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEdit);
};

export const handleFormAddCard = (event) => {
  event.preventDefault();

  const cardData = {
    name: cardNameInput.value,
    link: cardUrlInput.value,
  };
  const cardElement = createCard(
    cardData,
    deleteCard,
    handleLike,
    handleImageModal
  );
  cardsList.prepend(cardElement);
  closeModal(popupAddCard);
};
