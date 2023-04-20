const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function meetup(year, month, order, weekDay) {

  let dayNumber = getDay(year, month, order, weekDay);
  let monthNumber = month - 1;

  console.log(year, monthNumber, dayNumber);

  return new Date(year, monthNumber, dayNumber)
}

function getDay(year, month, order, weekDay) {
  let week = getWeek(order);
  let day

  let date = new Date(year, month, 0)
  let daysOfMonthNumber = date.getDate()

  let counter = 1

  for (let i = 1; i <= daysOfMonthNumber; i++) {
    let iterationDate = new Date(year, month - 1, i)
    
    if (
      order === 'teenth' && 
      [13, 14, 15, 16, 17, 18, 19].includes(i) && 
      iterationDate.getDay() === days.indexOf(weekDay)
    ) {
      day = iterationDate.getDate()
      break;
    } else if (week === counter && iterationDate.getDay() === days.indexOf(weekDay)) {
      day = iterationDate.getDate()
      break;
    } else if (iterationDate.getDay() === days.indexOf(weekDay)) {
      day = iterationDate.getDate()
    }
    
    if (iterationDate.getDay() === days.indexOf(weekDay)) counter++
  }

  return day;
}

function getWeek(order) {
  let week = 0

  switch (order) {
    case ('first'):
      week = 1;
      break;

    case ('second'):
      week = 2;
      break;

    case ('third'):
      week = 3;
      break;

    case ('fourth'):
      week = 4;
      break;

    case ('last'):
      week = -1;
      break;

    default:
      break;
  }

  return week;
}
