const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-29",
  headers: {
    authorization: "7e3be90c-4683-49a5-bd45-3a1bb5f30daf",
    "Content-Type": "application/json",
  },
};

export const getInitialProfileData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка: ${res.status}`);
    }
  });
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Произошла ошибка: ${res.status}`);
    }
  });
};
