const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-29",
  headers: {
    authorization: "7e3be90c-4683-49a5-bd45-3a1bb5f30daf",
    "Content-Type": "application/json",
  },
};

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Произошла ошибка: ${response.status}`);
};

export const getInitialProfileData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkResponse);
};

export const editProfile = (nameInput, aboutInput) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput,
      about: aboutInput,
    }),
  }).then(checkResponse);
};
