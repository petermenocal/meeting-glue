var m = require("mithril")
var DayPlanner = {
  addDate: () => {
    let newDay = DayPlanner.day
    DayPlanner.days.push(newDay)
  },
  days: [],
  day: {date: '', type: '', start: '', end: '', attendees: '', setup: '', av: '', notes: ''},
  drag: function() {
     return console.log('webedragging')
  }
}

module.exports = {
  view: () => {
    return m(".pa4", [
      m('.overflow-auto', [
        m('table.f6.w-100.mw8.center', [
          m('thead', [
            m('tr.stripe-dark', [
              m('th.fw6.tl.pa3.bg-white', 'Date'),
              m('th.fw6.tl.pa3.bg-white', 'Type'),
              m('th.fw6.tl.pa3.bg-white', 'Start'),
              m('th.fw6.tl.pa3.bg-white', 'End'),
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
              m('td.pa3', ' '),
            ]),
            DayPlanner.days.map(function(d) {
                return m('tr.stripe-dark', {draggable: true, ondragstart: DayPlanner.drag}, [
                  m('td.pa3', '8/8/18'),
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
                  m('td.pa3.parent', [
                    m("input#dt")
                  ]),
                  m('td.pa3', '5:00 PM'),
                  m('td.pa3', '300'),
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
                  m('td.pa3', 'YES'),
                  m('td.pa3', 'Breakfast setup in foyer to bring into G/S'),
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
