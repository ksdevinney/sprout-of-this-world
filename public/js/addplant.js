const newPlantHandler = async() => {
    const plantName = document.querySelector('#plant-name').value;
    const plantClass = document.querySelector('#plant-class').value;
    const plantSpec = document.querySelector('#plant-species').value;
    const plantLoc = document.querySelector('#plant-location').value;
    const plantWatered = document.querySelector('#plant-watered').value;
    const plantBday = document.querySelector('#plant-birthday').value;

    // need routes for this
    const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ plantName, plantClass, plantSpec, plantLoc, plantWatered, plantBday}),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        // also need routes for this?
    };
};

document
  .querySelector('#add-plant')
  .addEventListener('click', newPlantHandler);