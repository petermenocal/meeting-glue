const m = require('mithril');
var WidgetTitleBar = require('./WidgetTitleBar');
let EventCalendar = require('../components/EventCalendar')

let Hero = {
  oninit: () => {
    setInterval(function() {
      if(Hero.current === 'hero') { Hero.current = 'hero2'; m.redraw(); } else { Hero.current = 'hero'; m.redraw(); }
    }, 4500);
  },
  current: 'hero',
  view: () => {
    return m('.fl.w-100.relative', {style: 'height: 400px;overflow: hidden;'}, [
      m('.fl.w-100.h-100', {style: 'background-size: cover; background-position: center bottom; background-image: url("../../img/'+ Hero.current +'.png")'}, [
       m('.fl.w-20', [
         m(EventCalendar)
       ]),
      ])
    ]);
  }
};

module.exports = Hero;
