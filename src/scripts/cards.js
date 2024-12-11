export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// export function createCard(cardData, deleteCard) {
//   const cardTemplate = document.querySelector("#card-template").content;

//   const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
//   const cardElementImage = cardElement.querySelector(".card__image");
//   const cardElementTitle = cardElement.querySelector(".card__title");

//   cardElementImage.src = cardData.link;
//   cardElementImage.alt = cardData.name;
//   cardElementTitle.textContent = cardData.name;

//   const cardElementDeleteButton = cardElement.querySelector(
//     ".card__delete-button"
//   );
//   cardElementDeleteButton.addEventListener("click", () => {
//     deleteCard(cardElement);
//   });

//   return cardElement;
// }

// export function deleteCard(cardElement) {
//   cardElement.remove();
// }
