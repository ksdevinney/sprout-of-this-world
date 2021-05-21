const router = require('express').Router();
const { Plant, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  if(!req.session.logged_in){
    res.render('homepage1')
  } else {
      try {
        // Get all plants and JOIN with user data
        const plantData = await User.findAll({
          include: [
            {
              model: Plant,
              attributes: ['name', 'location', 'date_planted'],
            },
          ],
        });
    
        // Serialize data so the template can read it
        const plants = plantData.map((project) => project.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('homepage2', { 
          plants, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        res.status(500).json(err);
      }
    }
  });

  

router.get('/inventory', async (req, res) => {
  try {
    const inventoryData = await Plant.findAll(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const myInventory = inventoryData.get({ plain: true });

    res.render('inventory', {
      ...myInventory,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: [ 'password' ] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage2');
    return;
  }

  res.render('login');
});

module.exports = router;
