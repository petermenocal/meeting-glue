const m = require('mithril')

let Slideshow = {
  list: [{ id: 0, src: 'img/cvb/slideshow-1.png' },{ id: 1, src: 'img/cvb/slideshow-2.png' },{ id: 2, src: 'img/cvb/slideshow-3.png' }],
  active: { id: 0, src: 'img/cvb/slideshow-1.png' },
  swap: () => {
    var activeIndex = Slideshow.active.id
    if(activeIndex == 2) {
      activeIndex = 0
    } else {
      activeIndex++
    }
    Slideshow.active = Slideshow.list[activeIndex]
    m.redraw()
  },
  initialize: () => {
    setInterval(Slideshow.swap, 4000)
  }
}

module.exports = Slideshow
