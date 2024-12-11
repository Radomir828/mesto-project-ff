import { openModal } from "./modal";
const popupOpenImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");

export function deleteCard(cardElement) {
  cardElement.remove();
}

export const handleLike = (event) => {
  event.target.classList.toggle("card__like-button_is-active");
};

export const handleImageModal = (cardData) => {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  openModal(popupOpenImage);
};

export function createCard(cardData, deleteCard, handleLike, handleImageModal) {
  const cardTemplate = document.querySelector("#card-template").content;

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementTitle = cardElement.querySelector(".card__title");

  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.name;
  cardElementTitle.textContent = cardData.name;

  const cardElementDeleteButton = cardElement.querySelector(
    ".card__delete-button"
  );
  cardElementDeleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  const buttonLikeCard = cardElement.querySelector(".card__like-button");
  buttonLikeCard.addEventListener("click", handleLike);

  const cardImage = cardElement.querySelector(".card__image");

  cardImage.addEventListener("click", () => handleImageModal(cardData));

  return cardElement;
}
