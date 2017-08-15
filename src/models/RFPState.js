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
  },
  showTemplates: false,
  toggleTemplates: () => {
    RFPState.showTemplates  = !RFPState.showTemplates
  },
  showGalleryEditor: false,
  toggleGalleryEditor: () => {
    RFPState.showGalleryEditor = !RFPState.showGalleryEditor
  },
  toggleDayPlanner: () => {
    RFPState.showDayPlanner = !RFPState.showDayPlanner
  },
  showDayPlanner: false,
  current: { images:[] },
  imageUpload: function() {
  		cloudinary.openUploadWidget({ cloud_name: 'geekypixel', upload_preset: 'i4kcgih7'},
  			function(error, result) {
  				RFPState.current.images = result
          console.log(RFPState.current)
  				m.redraw()
  			})
  	},
}

module.exports = RFPState
