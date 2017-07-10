var m = require("mithril")

var DayPlanner = {
  addDate: () => {
    let newDay = DayPlanner.day
    DayPlanner.days.push(newDay)
  },
  days: [],
  day: {date: '', type: '', start: '', end: '', attendees: '', setup: '', av: '', notes: ''},
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
            m('tr.stripe-dark', [
              m('td.pa3.tc.f4', {onclick: DayPlanner.addDate}, '+'),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
              m('td.pa3', ' '),
            ]),
            DayPlanner.days.map(function() {
                return m('tr.stripe-dark', [
                  m('td.pa3', '8/8/18'),
                  m('td.pa3', 'Registration'),
                  m('td.pa3', '8:00 AM'),
                  m('td.pa3', '5:00 PM'),
                  m('td.pa3', '300'),
                  m('td.pa3', 'Rounds (8)'),
                  m('td.pa3', 'YES'),
                  m('td.pa3', 'Breakfast setup in foyer to bring into G/S'),
                ])
            }),
            m('tr.stripe-dark', [
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
