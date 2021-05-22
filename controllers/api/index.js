const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantRoutes = require('./plantRoutes');
const calenderRoutes = require('./calenderRoutes');

router.use('/users', userRoutes);
router.use('/plants', plantRoutes);
router.use('/calendar', calenderRoutes);

module.exports = router;