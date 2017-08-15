var m = require("mithril")
const flatpickr = require('flatpickr')

var config = {
    timePicker: {
      enableTime: true,
      noCalendar: true,
      enableSeconds: false, // disabled by default
      time_24hr: false, // AM/PM time picker is used by default
      // default format
      dateFormat: "H:i",
      // initial values for time. don't use these to preload a date
      defaultHour: 12,
      defaultMinute: 0
      // Preload time with defaultDate instead:
      // defaultDate: "3:30"
    }
}

var DayPlanner = {
  addDate: () => {
    let newDay = DayPlanner.day
    DayPlanner.days.push(newDay)
  },
  days: [],
  day: {date: '', type: '', start: '', end: '', attendees: '', setup: '', av: '', notes: ''},
  drag: function() {
     return console.log('webedragging')
  },
  newPickers: function() {
    DayPlanner.newDatePicker()
    DayPlanner.newStartTimePicker()
    DayPlanner.newEndTimePicker()
  },
  newDatePicker: function(el) {
    let datePicker = document.querySelector(".datePicker");
    let fp =   new flatpickr(datePicker, {});  // Flatpickr
  },
  newStartTimePicker: function(el) {
    let startTimePicker = document.querySelector(".startTimePicker");
    let fp =   new flatpickr(startTimePicker, config.timePicker)
  },
  newEndTimePicker: function(el) {
    let endTimePicker = document.querySelector(".endTimePicker");
    let fp =   new flatpickr(endTimePicker, config.timePicker)
  },
}

module.exports = {
  view: () => {
    return m(".pa4", [
      m('.overflow-auto', [
        m('table.f6.w-100', [
          m('thead', [
            m('tr', [
              m('th.fw6.tl.pa3.bg-purple.white', 'Date'),
              m('th.fw6.tl.pa3.bg-purple.white', 'Type'),
              m('th.fw6.tl.pa3.bg-purple.white', 'Start Time'),
              m('th.fw6.tl.pa3.bg-purple.white', 'End Time'),
              m('th.fw6.tl.pa3.bg-purple.white', 'Attendees'),
              m('th.fw6.tl.pa3.bg-purple.white', 'Setup'),
              m('th.fw6.tl.pa3.bg-purple.white', 'AV'),
              m('th.fw6.tl.pa3.bg-purple.white', 'Notes'),
            ])
          ]),
          m('tbody.lh-copy', [
            m('tr.bg-navy.white', [
              m('td.pa3.tc.f4', {onclick: DayPlanner.addDate}, '+'),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
            ]),
            DayPlanner.days.map(function(d) {
                return m('tr.stripe-light', {oncreate: DayPlanner.newPickers }, [
                  m('td.pa3', [
                    m('input.datePicker.usn', {size: "11"})
                  ]),
                  m('td.pa3', [
                    m('select', [
                      m('option', 'Break'),
                      m('option', 'Breakfast'),
                      m('option', 'Lunch'),
                      m('option', 'Reception'),
                      m('option', 'Dinner'),
                      m('option', 'General Session'),
                      m('option', 'Breakout'),
                      m('option', 'Exhibition'),
                      m('option', 'Setup'),
                      m('option', 'Teardown'),
                      m('option', 'Other'),
                    ])
                  ]),
                  //start time
                  m('td.pa3.parent', [
                    m('input.startTimePicker.usn.tc')
                  ]),
                  //end time
                  m('td.pa3.parent', [
                    m('input.endTimePicker.usn.tc')
                  ]),
                  m('td.pa3', [
                    m('input.tc', {type: 'number', placeholder: 0})
                  ]),
                  m('td.pa3', [
                    m('select', [
                      m('option', "8' x 10' Exhibits"),
                      m('option', "10' x 10' Exhibits"),
                      m('option', "Boardroom"),
                      m('option', "Chevron"),
                      m('option', "Classroom"),
                      m('option', "Conference Style"),
                      m('option', "Crescent-Round"),
                      m('option', "Herringbone"),
                      m('option', "Hollow Square"),
                      m('option', "Reception"),
                      m('option', "Rounds for 8"),
                      m('option', "Rounds for 10"),
                      m('option', "Table Top Exhibits"),
                      m('option', "Theatre"),
                      m('option', "U-Shaped"),
                      m('option', "Other"),
                    ])
                  ]),
                  m('td.pa3', [
                    m('input.tc', {type: 'checkbox'})
                  ]),
                  m('td.pa3', [
                    m('textarea')
                  ]),
                ])
            }),
            m('tr.bg-navy.white', [
              m('td.pa3.tc.f4', {onclick: DayPlanner.addDate}, '+'),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
            ]),
          ])
        ]),
      ])
    ])
  }
}
