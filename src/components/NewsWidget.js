const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');

let NewsWidget = {
  view: () => {
    return m('.fl.w-100.bg-white.h-100.shadow-2', [
      m(WidgetTitleBar, {content: 'Industry news'}),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f4.ttu.mb1','Headline goes here'),
        m('.f6.fw4.gray.bb.b--black-10', 'October 1, 2017'),
        m('.f6.fw4.gray.pt3', 'Content goes here.')
      ]),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f4.ttu.mb1','Headline goes here'),
        m('.f6.fw4.gray.bb.b--black-10', 'October 1, 2017'),
        m('.f6.fw4.gray.pt3', 'Content goes here.')
      ]),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f4.ttu.mb1','Headline goes here'),
        m('.f6.fw4.gray.bb.b--black-10', 'October 1, 2017'),
        m('.f6.fw4.gray.pt3', 'Content goes here.')
      ]),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f4.ttu.mb1','Headline goes here'),
        m('.f6.fw4.gray.bb.b--black-10', 'October 1, 2017'),
        m('.f6.fw4.gray.pt3', 'Content goes here.')
      ]),
      m('.fl.w-100.pa4.bb.b--black-30', [
        m('fw2.f4.ttu.mb1','Headline goes here'),
        m('.f6.fw4.gray.bb.b--black-10', 'October 1, 2017'),
        m('.f6.fw4.gray.pt3', 'Content goes here.')
      ]),
    ])
  }
};

module.exports = NewsWidget;
