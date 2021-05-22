const router = require("express").Router()
const { Plant } = require('../../models');
const shouldAlert = require('../../utils/shouldAlert.js');
const calendarAlert = require('../../utils/calendarAlerts.js');

router.get('/getAlerts', async (req, res) => {
  const plantData = await Plant.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });
  
  const plantsToAlert = plantData.map((plant) => plant.get({ plain: true }));
  
  let events = [];
  plantsToAlert.forEach(plant => {
    const thisPlantAlerts = calendarAlert(plant.date_planted, plant.schedule);
    // console.log(thisPlantAlerts);
    thisPlantAlerts.forEach(date => {
      events.push({
        title: `Water ${plant.name}`,
        start: `${date}`,
      });
    });
  });
  // console.log(events);
  
  res.json(events);
});

module.exports = router;