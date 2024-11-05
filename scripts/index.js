// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsList = document.querySelector(".places__list");
const addButton = document.querySelector(".profile__add-button");

function addCard(cardData, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementTitle = cardElement.querySelector(".card__title");

  cardElementImage.src = cardData.link;
  cardElementTitle.textContent = cardData.name;

  const cardElementDeleteButton = cardElement.querySelector(
    ".card__delete-button"
  );
  cardElementDeleteButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove();
}

// добавляем все карточки на страницу
initialCards.forEach((cardData) => {
  const cardElement = addCard(cardData, deleteCard);

  // для второй карточки добавляем фильтр, чтобы была видна инонка удаления карточки
  if (cardData.name === "Челябинская область") {
    let cardImage = cardElement.querySelector(".card__image");
    cardImage.classList.add("filter-brightness");
  }
  cardsList.append(cardElement);
});
