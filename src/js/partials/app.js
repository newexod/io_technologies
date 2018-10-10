submit.addEventListener('click', function(e) {
  e.preventDefault();
  var currentEmail = 'test@test.com';
  var currentPass = '1234'

  if (email.value !== currentEmail) {
    addError(email);
  }
  if (password.value !== currentPass) {
    addError(password);
  } 
  
  if (email.value === currentEmail) {
    removeError(email);
  }
  if (password.value === currentPass) {
    removeError(password);
  }
});

function addError(input) {
  input.classList.add('error');

  if (input.id === 'email') {
    document.querySelector('.email-error').style.display = 'block';
  }
  if (input.id === 'password') {
    document.querySelector('.pass-error').style.display = 'block'; 
  }
}

function removeError(input) {
  input.classList.remove('error');

  if (input.id === 'email') {
    document.querySelector('.email-error').style.display = 'none';
  }
  if (input.id === 'password') {
    document.querySelector('.pass-error').style.display = 'none';
  }
}