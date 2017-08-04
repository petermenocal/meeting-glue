const m = require('mithril');

let Feed = require('./Feed')
let Slideshow = require('./Slideshow')

let SlideshowBoulder = require('./SlideshowBoulder')

let Initializer = {
  start: (view) => {
    if(view == 'lvcva') {
      Feed.initialize()
      Slideshow.initialize()
    }
    if(view == 'boulder') {
      Feed.initialize()
      SlideshowBoulder.initialize()
    }
  }
}

module.exports = Initializer
