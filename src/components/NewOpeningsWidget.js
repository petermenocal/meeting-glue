const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');

let NewOpeningsWidget = {
  view: () => {
    return m('.fl.w-100.bg-white.h-100.shadow-2', [
      m(WidgetTitleBar, {content: 'Hot New Openings'}),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f6.mb1','1. Opening content goes here'),
      ]),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f6.mb1','2. Opening content goes here'),
      ]),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f6.mb1','3. Opening content goes here'),
      ]),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f6.mb1','4. Opening content goes here'),
      ]),
    ])
  }
};

module.exports = NewOpeningsWidget;
