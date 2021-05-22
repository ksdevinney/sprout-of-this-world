const moment = require('moment');


module.exports = (datePlanted, schedule) => {

  let shouldAlert;

  switch (schedule) {
    case 1:
      shouldAlert = true;
      break;
    case 2:{
      const dateArr = datePlanted.split('-');
      const plantedOn = moment([dateArr[0], dateArr[1], dateArr[2]]);
      const today = moment();
      const difference = today.diff(plantedOn, 'days');
      (difference % 2) === 0 ? shouldAlert = true : shouldAlert = false;
      break;}
    case 3:{
      const dateArr = datePlanted.split('-');
      const plantedOn = moment([dateArr[0], dateArr[1], dateArr[2]]);
      const today = moment();
      const difference = today.diff(plantedOn, 'days');
      (difference % 3) === 0 ? shouldAlert = true : shouldAlert = false;
      break;}
  
    default:
      shouldAlert = false;
      break;
  }
  return shouldAlert;
}