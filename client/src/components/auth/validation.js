function initializeFormValidation(formElement, successHandler) {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (formElement.checkValidity()) {
      successHandler();
    }
    formElement.classList.add('was-validated');
  });
}
export default initializeFormValidation;
