const m = require("mithril")

let preflightState = {
  specific: false,
  range: false,
  pattern: false,
  directInput: false,
  touched: false,
  toggleSpecific: () => {
    preflightState.specific = !preflightState.specific
    preflightState.range = false
    preflightState.pattern = false
    preflightState.directInput = false
  },
  toggleRange: () => {
    preflightState.range = !preflightState.range
    preflightState.specific = false
    preflightState.pattern = false
    preflightState.directInput = false
  },
  togglePattern: () => {
    preflightState.pattern = !preflightState.pattern
    preflightState.specific = false
    preflightState.range = false
    preflightState.directInput = false
  },
  toggleDirectInput: () => {
    preflightState.directInput = !preflightState.directInput
    preflightState.specific = false
    preflightState.range = false
    preflightState.pattern = false
  },
}

module.exports = preflightState
