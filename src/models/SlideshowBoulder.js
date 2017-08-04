const m = require('mithril')

let SlideshowBoulder = {
  list: [{ id: 0, src: 'img/boulder-1.jpg' },{ id: 1, src: 'img/boulder-2.png' },{ id: 2, src: 'img/boulder-3.jpg' }],
  active: { id: 0, src: 'img/boulder-2.png' },
  swap: () => {
    var activeIndex = SlideshowBoulder.active.id
    if(activeIndex == 2) {
      activeIndex = 0
    } else {
      activeIndex++
    }
    SlideshowBoulder.active = SlideshowBoulder.list[activeIndex]
    m.redraw()
  },
  initialize: () => {
    setInterval(SlideshowBoulder.swap, 4000)
  }
}

module.exports = SlideshowBoulder
