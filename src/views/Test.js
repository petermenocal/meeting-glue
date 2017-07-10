const m = require('mithril')
let DayPlanner = require("../components/DayPlanner")

module.exports = {
  view: () => {
    return m('div', {class: 'fl w-100 pa2'}, [
      m("h1.f3", "Component test"),
      m(DayPlanner)
    ])
  }
}
