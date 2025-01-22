import { closeModal } from "./modal";
import { createCard, deleteCard, likeCard } from "./card";
import {
  popupEdit,
  popupAddCard,
  popupOpenAvatar,
  cardsContainer,
  nameInput,
  jobInput,
  cardNameInput,
  cardUrlInput,
  profileTitle,
  profileDescription,
  openImageModal,
  profileImage,
  avatarUrlInput,
} from "./index.js";

import { editProfile, addNewCard, addNewAvatar } from "./api.js";

const cleanForm = (event) => {
  const form = event.target;
  form.reset();
};

export const handleAvatarEditFormSubmit = (event) => {
  event.preventDefault();
  addNewAvatar(avatarUrlInput.value)
    .then((result) => {
      profileImage.style.backgroundImage = `url(${result.avatar})`;
      cleanForm(event);
    })
    .catch((err) => console.error(err));

  closeModal(popupOpenAvatar);
};

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
      cleanForm(event);
    })
    .catch((err) => {
      console.error(err);
    });
};
