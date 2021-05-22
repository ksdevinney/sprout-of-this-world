const router = require('express').Router();
const { Plant, User } = require('../models');
const withAuth = require('../utils/auth');
const shouldAlert = require('../utils/isAlert.js');

router.get('/', async (req, res) => {
  if(!req.session.logged_in){
    res.render('homepage', {
      logged_in: false,
    });
  } else {
      try {
        // Get all plants and JOIN with user data
        const plantData = await Plant.findAll({
          where: {
            user_id: req.session.user_id,
          },
        });
    
        // Serialize data so the template can read it
        const plantArr = plantData.map((plant) => plant.get({ plain: true }));
        // console.log(typeof plantArr[0].schedule);
    
        const plants = plantArr.filter(plant => shouldAlert(plant.date_planted, plant.schedule));
        // Pass serialized data and session flag into template
        res.render('homepage', { 
          plants, 
          logged_in: true, 
        });
      } catch (err) {
        res.status(500).json(err);
      }
    }
  });

  

router.get('/inventory', async (req, res) => {
  try {
    // console.log(req.session.user_id);
    const inventoryData = await Plant.findAll({
      where: {
        user_id: req.session.user_id,
      },
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
    // console.log(inventoryData);

    if (inventoryData) {
      const plants = inventoryData.map(plant => plant.get({ plain: true }));

      res.render('inventory', {
        plants,
        logged_in: req.session.logged_in,
      });
    } else {
      res.render('inventory', {
        logged_in: req.session.logged_in,
      });
    }
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/addplant', (req, res) => {
  res.render('addplant', {
    logged_in: req.session.logged_in,
  })
});

module.exports = router;
