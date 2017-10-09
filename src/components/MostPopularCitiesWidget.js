const m = require('mithril')
let WidgetTitleBar = require('./WidgetTitleBar');

let MostPopularCitiesWidget = {
  view: () => {
    return m('.fl.w-100.bg-white.shadow-2', [
      m(WidgetTitleBar, {content: 'Most Popular'}),
      m('.fl.w-100.pa3', [
        m('.fl.w-third-ns.w-100.pa2', [
          m('.h3.tc.pt4.f6.fw5', 'New York'),
          m('img', {src: '../../img/city-nyc.png'})
        ]),
       m('.fl.w-third-ns.w-100.pa2', [
          m('.h3.tc.pt4.f6.fw5', 'Las Vegas'),
          m('img', {src: '../../img/city-vegas.png'})
        ]),
       m('.fl.w-third-ns.w-100.pa2', [
          m('.h3.tc.pt4.f6.fw5', 'Washington DC'),
          m('img', {src: '../../img/city-dc.png'})
        ]),
      ])
    ]);
  }
};

module.exports = MostPopularCitiesWidget;
