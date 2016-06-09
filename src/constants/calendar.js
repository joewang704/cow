import moment from 'moment'

//export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
export const days = [0, 1, 2, 3, 4, 5, 6].map((num) => {
  return moment().startOf('isoWeek').add(num, 'days')
})

export const timeIntervals = ['12am', '1am', '2am', '3am', '4am', '5am', '6am',
                              '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
                              '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
                              '10pm', '11pm']
export const normalTimeIntervals = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
  '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm',
  '10pm', '11pm', '12am'
]

export const halfTimeIntervals = [
  '12:00am', '12:30am', '1:00am', '1:30am', '2:00am', '2:30am', '3:00am', '3:30am',
  '4:00am', '4:30am', '5:00am', '5:30am', '6:00am', '6:30am', '7:00am', '7:30am',
  '8:00am', '8:30am', '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am',
  '12pm', '12:30pm', '1pm', '1:30pm', '2pm', '2:30pm', '3pm', '3:30pm', '4pm', '4:30pm',
  '5pm', '5:30pm', '6pm', '6:30pm', '7pm', '7:30pm', '8pm', '8:30pm',
  '9pm', '9:30pm', '10pm', '10:30pm', '11pm', '11:30pm']
