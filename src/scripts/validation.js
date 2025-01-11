const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(selectors.errorClass);
};

const checkInputValidity = (formElement, inputElement, selectors) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      selectors
    );
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

// функции для работы с кнопокой

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(selectors.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(selectors.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(
    formElement.querySelectorAll(selectors.inputSelector)
  );

  const button = formElement.querySelector(selectors.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, selectors);
      toggleButtonState(inputList, button, selectors);
    });
  });
};

export const enableValidation = (selectors) => {
  const formList = Array.from(
    document.querySelectorAll(selectors.formSelector)
  );

  formList.forEach((form) => {
    setEventListeners(form, selectors);
  });
};

export const clearValidation = (formElement, selectors) => {
  const inputList = Array.from(
    formElement.querySelectorAll(selectors.inputSelector)
  );
  const buttonSubmit = formElement.querySelector(
    selectors.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, selectors);
  });

  toggleButtonState(inputList, buttonSubmit, selectors);
};
