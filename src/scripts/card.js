export function deleteCard(cardElement) {
  cardElement.remove();
}

export const likeCard = (likeButton) => {
  likeButton.classList.toggle("card__like-button_is-active");
};

export function createCard(cardData, deleteCard, likeCard, openImageModal) {
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
  buttonLikeCard.addEventListener("click", () => likeCard(buttonLikeCard));

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.addEventListener("click", () => openImageModal(cardData));

  return cardElement;
}
