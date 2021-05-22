const deletePlant = async() => {

  const plantName = document.querySelector('#plant-name').innerText;
  
  const response = await fetch('/api/plants/deleteplant', {
      method: 'DELETE',
      body: JSON.stringify({ plantName }),
      headers: { 'Content-Type': 'application/json' },
  });

  if(response.ok) {
      window.location.href = window.location.href;
  };
};

document
.querySelector('#delete-plant')
.addEventListener('click', deletePlant);