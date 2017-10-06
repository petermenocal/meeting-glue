const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');

let NeedsDatesWidget = {
  view: () => {
    return m('.fl.mt3.w-100.bg-white.h-100.shadow-2', [
      m(WidgetTitleBar, {content: 'Needs Dates'}),
      m('.fl.w-100.pa2.tr.bg-green.white', 'Las Vegas'),
      m('.fl.w-100.pa3.bb.b--black-30', [
        m('fw2.f6.mb1','Flamingo'),
      ]),
      m('.fl.w-100.pa3.bb.b--black-30', [
        m('fw2.f6.mb1','Westgate'),
      ]),
      m('.fl.w-100.pa3.bb.b--black-30', [
        m('fw2.f6.mb1','SLS'),
      ]),
      m('.fl.w-100.pa3.bb.b--black-30', [
        m('fw2.f6.mb1','Caesars'),
      ]),
      m('.fl.w-100.pa3.bb.b--black-30', [
        m('fw2.f6.mb1','MGM Grand'),
      ]),
    ])
  }
};

module.exports = NeedsDatesWidget;
