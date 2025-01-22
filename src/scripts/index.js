import "../pages/index.css";
import { createCard, deleteCard, likeCard } from "./card.js";
import { openModal } from "./modal.js";
import {
  handleProfileEditFormSubmit,
  handleFormAddCardSubmit,
  handleAvatarEditFormSubmit,
} from "./form.js";

import { getInitialProfileData, getInitialCards } from "./api.js";

import { enableValidation, clearValidation } from "./validation.js";

export const cardsContainer = document.querySelector(".places__list");

export const popupEdit = document.querySelector(".popup_type_edit"); // модальное окно для редактирования профиля
export const popupAddCard = document.querySelector(".popup_type_new-card"); // модальное окно для добавления карточки
export const popupOpenImage = document.querySelector(".popup_type_image"); // модальное окно изображения
export const popupOpenAvatar = document.querySelector(".popup_type_new-avatar");

const editProfileButton = document.querySelector(".profile__edit-button"); // кнопка для редактирования профиля
const addCardButton = document.querySelector(".profile__add-button"); // кнопка для добавления карточки
const editAvatarButton = document.querySelector(".profile__image-wrapper");

const formEditProfile = document.forms["edit-profile"]; // форма редактирования профиля
const formAddCard = document.forms["new-place"]; // форма добавления карточки
const formEditAvatar = document.forms["edit-avatar"]; // форма редактирования аватара

export const nameInput = document.querySelector(".popup__input_type_name"); // поле формы редактирования - "Имя"
export const jobInput = document.querySelector(
  ".popup__input_type_description"
); // поле формы редактирования - "Занятие"

export const cardNameInput = document.querySelector(
  ".popup__input_type_card-name"
); // поле формы добавления карточки "Название"
export const cardUrlInput = document.querySelector(".popup__input_type_url"); // поле формы добавления карточки - "Ссылка на картинку"
export const avatarUrlInput = document.querySelector(
  ".popup__input_type_avatar_url"
);

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileImage = document.querySelector(".profile__image");

export const popupImage = document.querySelector(".popup__image");
export const popupImageDescription = document.querySelector(".popup__caption");
export const openImageModal = (cardData) => {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupImageDescription.textContent = cardData.name;
  openModal(popupOpenImage);
};

// ставить значения в поля формы из профиля
const setProfileFormInitialValues = () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
};

// функция для открытыя модального окна "Редактирование профиля"
const openEditProfileModal = () => {
  setProfileFormInitialValues();
  clearValidation(formEditProfile, selectors);
  openModal(popupEdit);
};

// открываем модальные окна
editProfileButton.addEventListener("click", () => openEditProfileModal());
addCardButton.addEventListener("click", () => {
  openModal(popupAddCard);
  clearValidation(formAddCard, selectors);
});
editAvatarButton.addEventListener("click", () => {
  openModal(popupOpenAvatar);
  clearValidation(formEditAvatar, selectors);
});

formEditProfile.addEventListener("submit", handleProfileEditFormSubmit);
formAddCard.addEventListener("submit", handleFormAddCardSubmit);
formEditAvatar.addEventListener("submit", handleAvatarEditFormSubmit);

const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-visible",
};

enableValidation(selectors);

const setInitialProfileData = (profileData) => {
  profileTitle.textContent = profileData.name;
  profileDescription.textContent = profileData.about;
  profileImage.style.backgroundImage = `url(${profileData.avatar})`;
};

const setInitialCards = (cards, userId) => {
  cards.forEach((cardData) => {
    const cardElement = createCard(
      cardData,
      deleteCard,
      likeCard,
      openImageModal,
      userId
    );
    cardsContainer.append(cardElement);
  });
};

Promise.all([getInitialProfileData(), getInitialCards()])
  .then(([profileData, initialCards]) => {
    const userId = profileData._id;
    setInitialProfileData(profileData);
    setInitialCards(initialCards, userId);
  })
  .catch((err) => console.error(err));
