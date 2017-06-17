const m = require('mithril');

let Feed = require('./Feed')
let Slideshow = require('./Slideshow')

let Initializer = {
  start: (view) => {
    if(view == 'lvcva') {
      Feed.initialize()
      Slideshow.initialize()
    }
  }
}

module.exports = Initializer
