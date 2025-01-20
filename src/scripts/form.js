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

import { editProfile, addNewCard } from "./api.js";

export const handleProfileEditFormSubmit = (event) => {
  event.preventDefault();

  editProfile(nameInput.value, jobInput.value)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
    })
    .catch((err) => {
      console.error(err);
    });

  closeModal(popupEdit);
};

export const handleFormAddCardSubmit = (event) => {
  event.preventDefault();

  addNewCard(cardNameInput.value, cardUrlInput.value)
    .then((data) => {
      const cardElement = createCard(
        data,
        deleteCard,
        likeCard,
        openImageModal,
        data.owner._id
      );
      cardsContainer.prepend(cardElement);
      closeModal(popupAddCard);

      // после успешного сабмита, очищаем поля формы
      const form = event.target;
      form.reset();
    })
    .catch((err) => {
      console.error(err);
    });
};
