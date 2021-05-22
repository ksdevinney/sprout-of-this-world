const deleteUser = async () => {

  // in route will use req.session to grab the user id to find the user to delete
  const response = await fetch('../api/posts/delete', {
    method: 'DELETE',
    // body: JSON.stringify({ postTitle }),
    // headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.assign('/');
  };

};

document
  .querySelector('#delete-post')
  .addEventListener('click', deletePost);