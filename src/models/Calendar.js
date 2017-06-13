const m = require('mithril')

let Calendar = {
  displayModal: false,
  toggleModal: () => {
    Calendar.displayModal = !Calendar.displayModal
    m.redraw()
  }
}

module.exports = Calendar
