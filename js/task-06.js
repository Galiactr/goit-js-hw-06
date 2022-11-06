const passwordInput = document.querySelector('#validation-input');
const passwordIndex = document.querySelector('#validation-input[data-length]');

function passwordCheck() {
  if (passwordInput.value.length === Number(passwordInput.dataset.length)) {
    passwordInput.classList.add('valid');
    passwordInput.classList.remove('invalid');
  } else if (passwordInput.value.length > 0) {
    passwordInput.classList.add('invalid');
    passwordInput.classList.remove('valid');
  } else {
    passwordInput.classList.remove('valid');
    passwordInput.classList.remove('invalid');
  }
}

passwordInput.addEventListener('blur', passwordCheck);