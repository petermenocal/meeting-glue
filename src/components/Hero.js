const m = require('mithril');
var WidgetTitleBar = require('./WidgetTitleBar');

let Hero = {
  view: () => {
    return m('.fl.w-100.relative', {style: 'height: 400px;overflow: hidden;'}, [
      m('.left-triangle.white', [
        m('h1', 'messages'),
        m('h1', 'messages'),
        m('h1', 'messages'),
        m('h1', 'messages'),
        m('h1', 'messages'),
        m('h1', 'messages'),
      ]), 
      m('.fl.w-100.h-100', {style: 'background-size: cover; background-position: center bottom; padding-left: 200px; background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url("../../img/hero.png")'}, [
       m('.fl.w-70', [
        m('.f1.fw5.white.mt3.ml4', 'Caption goes here')
       ]),
       m('.fl.w-30.h-100.bg-white.pa2.black', [
        m('.fl.w-100.h-70', {style: 'height: 220px'}, [
          m(WidgetTitleBar, {content: "Event Calendar"}),
          
        ]),
        m('.fl.w-100.h-30', [
          m(WidgetTitleBar, {content: "Recent Reviews"})
        ])
       ]),
      ])
    ])
  }
};

module.exports = Hero;
