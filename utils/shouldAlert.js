const moment = require('moment');


module.exports = (datePlanted, schedule) => {

  let shouldAlert;

  const dateArr = datePlanted.split('-');
  const plantedOn = moment([dateArr[0], dateArr[1], dateArr[2]]);
  const today = moment();
  const difference = today.diff(plantedOn, 'days');
  (difference % schedule) === 0 ? shouldAlert = true : shouldAlert = false;

  return shouldAlert;
}