const loginHandler = async () => {

  const userName = document.querySelector('#login-user').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ userName, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.assign('/');
  } else {
    // example div that could be placed above or below username/password fields for when a user fails to login
    // <div class="text-danger" id="error-message"></div>  <------ uses bootstrap 'text-danger' to color the text red
    document.querySelector('#error-message').innerText = 'Incorrect email or password, please try again';
  }
  
};

document
  .querySelector('#login-btn')
  .addEventListener('click', loginHandler);