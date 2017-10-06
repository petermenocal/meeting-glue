const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');

let AboutWidget = {
  view: () => {
    return m('.fl.w-100.bg-white.h-100.shadow-2', {style: 'min-height: 754px'}, [
      m(WidgetTitleBar, {content: 'About us'}),
      m('.fl.w-100.pa4', [
        m('fw2.f4','Welcome to RFP bliss'),
        m('.f5.fw5', 'Content goes here. content goes here. content goes here. content goes here.')
      ])
    ])
  }
};

module.exports = AboutWidget;
