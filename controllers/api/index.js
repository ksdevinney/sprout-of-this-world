const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantRoutes = require('./plantRoutes');
const calenderRoutes = require('./calenderRoutes')

router.use('/users', userRoutes);
router.use('/plantRoutes', plantRoutes);
router.use('/calenderRoutes', calenderRoutes);

module.exports = router;