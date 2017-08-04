var m = require("mithril")
const flatpickr = require('flatpickr')
var UserLocation = require("../models/UserLocation")
var Weather = require("../models/Weather")
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
  oninit: () => {
    UserLocation.load()
    Weather.load(UserLocation.current)
  },
  view: () => {
    return m("div", [
      m('.db', [
        m('.mw9.center.h-100.bg-white.shadow-5', [
          m('.h3.w-100.white.flex.items-center.mt3.ph3', {style: 'background: rgb(50, 45, 89)'}, [
            m('.fl.w-90', [
              m('div', "Day 1"),
              m('div', "January 1, 2018"),
            ]),
            m('.fl.w-20', 'menu')
          ]),
          //Weather
          m("div#weather", {class: "f5 bg-white fl w-50 pa4 db"}, [
            m('div.fl.w-100', [
              m('div.fl.w-50', [
                m("h1", {class: "avenir fw5 blue ttu"}, "Weather"),
                m("div", Weather.loaded ? [
                  m("p", {class: "b"}, Weather.current.name),
                  m("p", {class: "ttc b"}, Weather.current.weather[0].description),
                  m("p", {class: "f6"}, "Humidity: " + Weather.current.main.humidity + "%"),
                  m("p", {class: "f6"}, "Pressure: " + Weather.current.main.pressure + "hpa"),
                  m("p", {class: "f6"}, "Current Temp: " + Weather.current.main.temp + "°F"),
                  m("p", {class: "f6"}, "Min Temp: " + Weather.current.main.temp_min + "°F"),
                  m("p", {class: "f6"}, "Max Temp: " + Weather.current.main.temp_max + "°F"),
                ] : "Loading weather...")
              ]),
              m('div.fl.w-50', [
                m('h1', {class: 'avenir fw5 blue ttu'}, 'Daily A/V Notes'),
                m('textarea.textarea-av',)
              ])
            ])
          ]),
            m('table.f6.w-100', [
              m('thead', [
                m('tr.stripe-dark', [
                  m('th.fw6.tl.pa3.bg-white', 'Start Time'),
                  m('th.fw6.tl.pa3.bg-white', 'End Time'),
                  m('th.fw6.tl.pa3.bg-white', 'Type'),
                  m('th.fw6.tl.pa3.bg-white', 'Attendees'),
                  m('th.fw6.tl.pa3.bg-white', 'Setup'),
                  m('th.fw6.tl.pa3.bg-white', 'AV'),
                  m('th.fw6.tl.pa3.bg-white', 'Notes'),
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
                ]),
                DayPlanner.days.map(function(d) {
                    return m('tr.stripe-dark', {oncreate: DayPlanner.newPickers }, [
                      //start time
                      m('td.pa3', [
                        m('input.w-100.input-reset.input.br2.ba.b--green.startTimePicker.usn.tc', {size: "11"})
                      ]),
                      //end time
                      m('td.pa3.parent', [
                        m('input.w-100.input-reset.input.br2.ba.b--red.endTimePicker.usn.tc')
                      ]),
                      m('td.pa3', [
                        m('select.fl.w-100', [
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
                      m('td.pa3', [
                        m('input.tc.w-100', {type: 'number', placeholder: 0})
                      ]),
                      m('td.pa3', [
                        m('select.w-100', [
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
                      m('td.pa3', {style: 'text-align: center; vertical-align: middle'}, [
                        m('input.tc', {type: 'checkbox'})
                      ]),
                      m('td.pv3', {style: 'vertical-align: middle;text-align:center'}, [
                        m('textarea', {rows: '4', cols: '70'})
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
                ]),
              ])
            ]),
        ]),
      ])
    ]),
    m("div", [
     m('.db', [
       m('.mw9.center.h-100.bg-white.shadow-5', [
         m('.h3.w-100.white.flex.items-center.mt3.ph3', {style: 'background: rgb(50, 45, 89)'}, [
           m('.fl.w-90', [
             m('div', "Day 1"),
             m('div', "January 1, 2018"),
           ]),
           m('.fl.w-20', 'menu')
         ]),
         //Weather
         m("div#weather", {class: "f5 bg-white fl w-50 pa4 db"}, [
           m('div.fl.w-100', [
             m('div.fl.w-50', [
               m("h1", {class: "avenir fw5 blue ttu"}, "Weather"),
               m("div", Weather.loaded ? [
                 m("p", {class: "b"}, Weather.current.name),
                 m("p", {class: "ttc b"}, Weather.current.weather[0].description),
                 m("p", {class: "f6"}, "Humidity: " + Weather.current.main.humidity + "%"),
                 m("p", {class: "f6"}, "Pressure: " + Weather.current.main.pressure + "hpa"),
                 m("p", {class: "f6"}, "Current Temp: " + Weather.current.main.temp + "°F"),
                 m("p", {class: "f6"}, "Min Temp: " + Weather.current.main.temp_min + "°F"),
                 m("p", {class: "f6"}, "Max Temp: " + Weather.current.main.temp_max + "°F"),
               ] : "Loading weather...")
             ]),
             m('div.fl.w-50', [
               m('h1', {class: 'avenir fw5 blue ttu'}, 'Daily A/V Notes'),
               m('textarea.textarea-av',)
             ])
           ])
         ]),
           m('table.f6.w-100', [
             m('thead', [
               m('tr.stripe-dark', [
                 m('th.fw6.tl.pa3.bg-white', 'Start Time'),
                 m('th.fw6.tl.pa3.bg-white', 'End Time'),
                 m('th.fw6.tl.pa3.bg-white', 'Type'),
                 m('th.fw6.tl.pa3.bg-white', 'Attendees'),
                 m('th.fw6.tl.pa3.bg-white', 'Setup'),
                 m('th.fw6.tl.pa3.bg-white', 'AV'),
                 m('th.fw6.tl.pa3.bg-white', 'Notes'),
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
               ]),
               DayPlanner.days.map(function(d) {
                   return m('tr.stripe-dark', {oncreate: DayPlanner.newPickers }, [
                     //start time
                     m('td.pa3', [
                       m('input.w-100.input-reset.input.br2.ba.b--green.startTimePicker.usn.tc', {size: "11"})
                     ]),
                     //end time
                     m('td.pa3.parent', [
                       m('input.w-100.input-reset.input.br2.ba.b--red.endTimePicker.usn.tc')
                     ]),
                     m('td.pa3', [
                       m('select.fl.w-100', [
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
                     m('td.pa3', [
                       m('input.tc.w-100', {type: 'number', placeholder: 0})
                     ]),
                     m('td.pa3', [
                       m('select.w-100', [
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
                     m('td.pa3', {style: 'text-align: center; vertical-align: middle'}, [
                       m('input.tc', {type: 'checkbox'})
                     ]),
                     m('td.pv3', {style: 'vertical-align: middle;text-align:center'}, [
                       m('textarea', {rows: '4', cols: '70'})
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
               ]),
             ])
           ]),
       ]),
     ])
   ])
  }
}
