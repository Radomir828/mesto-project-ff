import { removeCard } from "./api";

export function deleteCard(cardElement, cardId) {
  removeCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.error(err);
    });
}

export const likeCard = (likeButton) => {
  likeButton.classList.toggle("card__like-button_is-active");
};

export function createCard(
  cardData,
  deleteCard,
  likeCard,
  openImageModal,
  userId
) {
  const cardTemplate = document.querySelector("#card-template").content;

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementTitle = cardElement.querySelector(".card__title");
  const cardElementLikeCount = cardElement.querySelector(".card__like-count");

  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.name;
  cardElementTitle.textContent = cardData.name;
  cardElementLikeCount.textContent = cardData.likes.length;

  const cardId = cardData._id;

  const cardElementDeleteButton = cardElement.querySelector(
    ".card__delete-button"
  );

  if (cardData.owner._id !== userId) {
    cardElementDeleteButton.remove();
  }

  cardElementDeleteButton.addEventListener("click", () => {
    deleteCard(cardElement, cardId);
  });

  const buttonLikeCard = cardElement.querySelector(".card__like-button");
  buttonLikeCard.addEventListener("click", () => likeCard(buttonLikeCard));

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.addEventListener("click", () => openImageModal(cardData));

  return cardElement;
}
