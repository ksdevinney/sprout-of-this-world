const getEvents = async () => {
  await fetch('/api/calendar/getAlerts', {
    method: 'GET'
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    
    // console.log(data);
    const calendarEle = document.querySelector('#calendar');
    const calendar = new FullCalendar.Calendar(calendarEle, {
      initialView: 'dayGridMonth',
      timeZone: 'local',
    });
    data.forEach(event => {
      // console.log(event.start);
      calendar.addEvent({
        title: event.title,
        start: event.start
      });
    });
    calendar.render();
  })
  .catch(err => {
    console.log(err);
  });
  // console.log(response);
  // return response;
};
getEvents();


