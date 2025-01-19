import { closeModal } from "./modal";
import { createCard, deleteCard, likeCard } from "./card";
import {
  popupEdit,
  popupAddCard,
  cardsContainer,
  nameInput,
  jobInput,
  cardNameInput,
  cardUrlInput,
  profileTitle,
  profileDescription,
  openImageModal,
} from "./index.js";

import { testEditProfile } from "./api.js";

export const handleProfileEditFormSubmit = (event) => {
  event.preventDefault();

  testEditProfile(nameInput.value, jobInput.value)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
    })
    .catch((err) => {
      console.error(err);
    });

  // profileTitle.textContent = nameInput.value;
  // profileDescription.textContent = jobInput.value;
  closeModal(popupEdit);
};

export const handleFormAddCardSubmit = (event) => {
  event.preventDefault();

  const cardData = {
    name: cardNameInput.value,
    link: cardUrlInput.value,
  };
  const cardElement = createCard(
    cardData,
    deleteCard,
    likeCard,
    openImageModal
  );
  cardsContainer.prepend(cardElement);
  closeModal(popupAddCard);

  // после успешного сабмита, очищаем поля формы
  const form = event.target;
  form.reset();
};
