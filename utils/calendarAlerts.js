const moment = require('moment');

module.exports = (datePlanted, schedule) => {

  let nextAlertDate = moment();
  const dateArr = datePlanted.split('-');
  const plantedOn = moment([dateArr[0], dateArr[1], dateArr[2]]);
  let difference;

  while ((difference % schedule) !== 0) {
    difference = nextAlertDate.diff(plantedOn, 'days');
    nextAlertDate.add(1, 'days');
  };

  let datesToAlert = [];
  let iter = 0;

  while (iter < 14) {
    datesToAlert.push(nextAlertDate.format('YYYY-MM-DD'));
    nextAlertDate.add(schedule, 'days');
    iter += schedule;
  }

  return datesToAlert;
}