const newPlantHandler = async() => {
  console.log('in handler');
    const name = document.querySelector('#plant-name').value;
    // const plantClass = document.querySelector('#plant-class').value;
    // const plantSpec = document.querySelector('#plant-species').value;
    const location = document.querySelector('#plant-location').value;
    const schedule = document.querySelector('#schedule').value;
    const date_planted = document.querySelector('#plant-birthday').value;

    // need routes for this
    const response = await fetch('/api/plants/add', {
        method: 'POST',
        body: JSON.stringify({ name, location, date_planted, schedule}),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        window.location.assign('/inventory');
    };
};

document
  .querySelector('#add-plant')
  .addEventListener('click', newPlantHandler);