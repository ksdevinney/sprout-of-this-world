const router = require("express").Router()
const { Plant } = require('../../models');

router.post('/add', async (req, res) =>{
  try {
    const newPlant = await Plant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).end();
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a Plant
router.get('/:id', (req, res) => {
    // Get one plant 
    Plant.findOne({ id: req.body.id }).then((plantFound) => {
      res.json(plantFound);
    });
  });

router.delete('/:id', async (req, res) => {
    try {
      const plantData = await Plant.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!plantData) {
        res.status(404).json({ message: 'No plant found with this id!' });
        return;
      }
  
      res.status(200).json(plantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Updates plant based on its id
router.put('/:id', (req, res) => {
    // Calls the update method on the Plant model
    Plant.update(
      {
        // All the fields you can update and the data attached to the request body.
        id: req.body.id,
        name: req.body.name,
        location: req.body.location,
        date_planted: req.body.date_planted,
        user_id: req.body.user_id,
      },
      {
        // Gets the books based on the isbn given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedPlant) => {
        // Sends the updated plant as a json response
        res.json(updatedPlant);
      })
      .catch((err) => res.json(err));
  });

module.exports = router;