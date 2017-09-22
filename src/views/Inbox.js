const m = require("mithril");

module.exports = {
  view: () => {
   return m('div', {class: 'fl w-100'}, [
    m('.flex.flex-row.items-center.ph2.mb3.fw5.w-100.h2.bg-purple.white', 'Inbox'),
    m('.flex.flex-row.items-center.ph2.bb.b--black-20.pb3', [
      m('img', {src: '//placehold.it/100x100', class: 'br4 fl mr2'}),
      m('.fl.fw5', 'John Smith'),
    ]),
    m('.flex.flex-row.items-center.ph2.bb.b--black-20.pb3.pt2', [
      m('img', {src: '//placehold.it/100x100', class: 'br4 fl mr2'}),
      m('.fl.fw5', 'John Smith'),
    ]),
    m('.flex.flex-row.items-center.ph2.bb.b--black-20.pb3.pt2', [
      m('img', {src: '//placehold.it/100x100', class: 'br4 fl mr2'}),
      m('.fl.fw5', 'John Smith'),
    ]),
   ]); 
  }
}
