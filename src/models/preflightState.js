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
  roomsAndSpace: false,
  sleepingRoomsOnly: false,
  meetingSpaceOnly: false,
  selectRoomsAndSpace: () => {
    preflightState.roomsAndSpace = true
    preflightState.sleepingRoomsOnly = false
    preflightState.meetingSpaceOnly = false
  },
  selectSleepingRoomsOnly: () => {
    preflightState.sleepingRoomsOnly = true
    preflightState.roomsAndSpace = false
    preflightState.meetingSpaceOnly = false
  },
  selectMeetingSpaceOnly: () => {
    preflightState.meetingSpaceOnly = true
    preflightState.roomsAndSpace = false
    preflightState.sleepingRoomsOnly = false
  },
}

module.exports = preflightState
