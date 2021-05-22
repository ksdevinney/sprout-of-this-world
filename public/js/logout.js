const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.assign('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout-btn').addEventListener('click', logout);