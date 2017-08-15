const m = require('mithril')
const _ = require('underscore')

let RFPState = {
  step: 2,
  changeStep: () => {
    RFPState.step++
    m.redraw()
  },
  finalStep: () => {
    RFPState.step = 3
    m.redraw()
  },
  showTemplates: false,
  toggleTemplates: () => {
    RFPState.showTemplates  = !RFPState.showTemplates
  },
  showGalleryEditor: false,
  editGallery: () => {
    RFPState.showGalleryEditor = !RFPState.showGalleryEditor
  }
}

module.exports = RFPState
