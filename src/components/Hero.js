const m = require('mithril');
var WidgetTitleBar = require('./WidgetTitleBar');

let Hero = {
  view: () => {
    return m('.fl.w-100.relative', {style: 'height: 400px;overflow: hidden;'}, [
      m('.left-triangle.pl4.white.pa2.pv4', [
        m('.f6.fw4.mt3', 'Redefining hospitality:'),
        m('.f5.fw4.mt3', 'Planner networking'),
        m('.f5.fw4.mt3', 'Destination/venue research'),
        m('.f5.fw4.mt3', 'Site selection'),
        m('.f5.fw4.mt3', 'Contract negotiation'),
        m('.f5.fw4.mt3', 'Hotel marketing'),
        m('.f5.fw4.mt3', 'Planner feedback'),
        m('.f5.fw4.mt3', 'Supplier recommendations'),
      ]),
      m('.fl.w-100.h-100', {style: 'background-size: cover; background-position: center bottom; padding-left: 200px; background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url("../../img/hero.png")'}, [
       m('.fl.w-100', [
       ]),
      ])
    ]);
  }
};

module.exports = Hero;
