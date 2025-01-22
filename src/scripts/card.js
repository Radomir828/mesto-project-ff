import { removeCard, addLikeToCard, removeLikeFromCard } from "./api";

export function deleteCard(cardElement, cardId) {
  removeCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.error(err);
    });
}

export const likeCard = (likeButton, cardId, cardElementLikeCount) => {
  if (!likeButton.classList.contains("card__like-button_is-active")) {
    addLikeToCard(cardId)
      .then((result) => {
        cardElementLikeCount.textContent = result.likes.length;
        likeButton.classList.add("card__like-button_is-active");
      })
      .catch((err) => console.error(err));
  } else {
    removeLikeFromCard(cardId)
      .then((result) => {
        cardElementLikeCount.textContent = result.likes.length;
        likeButton.classList.remove("card__like-button_is-active");
      })
      .catch((err) => console.error(err));
  }
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
  const buttonLikeCard = cardElement.querySelector(".card__like-button");
  const cardElementDeleteButton = cardElement.querySelector(
    ".card__delete-button"
  );

  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.name;
  cardElementTitle.textContent = cardData.name;
  cardElementLikeCount.textContent = cardData.likes.length;

  const cardId = cardData._id;

  if (cardData.owner._id !== userId) {
    cardElementDeleteButton.remove();
  }

  // если мы оставили лайк, то добавляем класс для лайка карточки
  if (cardData.likes.some((like) => like._id === userId)) {
    buttonLikeCard.classList.add("card__like-button_is-active");
  }

  cardElementDeleteButton.addEventListener("click", () => {
    deleteCard(cardElement, cardId);
  });

  buttonLikeCard.addEventListener("click", () =>
    likeCard(buttonLikeCard, cardId, cardElementLikeCount)
  );

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.addEventListener("click", () => openImageModal(cardData));

  return cardElement;
}
