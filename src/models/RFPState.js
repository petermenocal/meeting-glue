const m = require('mithril')
const _ = require('underscore')

let RFPState = {
  step: 1,
  changeStep: () => {
    RFPState.step++
    m.redraw()
  },
  finalStep: () => {
    RFPState.step = 3
    m.redraw()
  }
}

module.exports = RFPState
