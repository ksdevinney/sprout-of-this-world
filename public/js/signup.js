const signUpBtnHandler = async () => {

  // TODO: figure out what id's assigned to input fields for username and password
  const userName = document.querySelector('#user-name-input').value;
  const password = document.querySelector('#user-pass-input').value;

  const response = fetch('/api/users/signup', {
    method: 'POST',
    body: JSON.stringify({ userName, password }),
    header: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // TODO: figure out what path the user's profile is at
    window.location.assign('/dashboard');
  };
};

document
  // TODO: figure out id assigned to signup button
  .querySelector('#signup-btn')
  .addEventListener('click', signUpBtnHandler);