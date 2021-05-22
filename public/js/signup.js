const signUpBtnHandler = async (event) => {
  event.preventDefault();
  // TODO: figure out what id's assigned to input fields for username and password
  const userName = document.querySelector('#signup-user').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  console.log(userName, password);

  if (userName && password){
    console.log("in fetch");
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // TODO: figure out what path the user's profile is at
      window.location.assign('/');
    };
  };

  
};

document
  // TODO: figure out id assigned to signup button
  .querySelector('#signup-btn')
  .addEventListener('click', signUpBtnHandler);