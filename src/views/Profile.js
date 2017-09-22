const m = require("mithril");

module.exports = {
  view: () => {
    return m('div', [
      m('.flex.f3.tc.justify-center.white.h2.fw2.bg-purple.items-center.ph2', 'John Smith'),
      m('.fl.w-100.h5.bg-gray', 'Placeholder, cover'),
      m('.fl.pb4.w-100.tc.bg-light-blue.br2.pa2', [
	m('h1', 'Work affiliation'),
	m('p.mb0.fw6', 'Harrah\'s Entertainment'),
	m('p.fw4.mt1', 'Vice President'),
	m('a.bg-dark-blue.pa2.white', 'Send RFP')
      ]),
      m('.fl.w-100.bg-near-white.br2.pa2', [
	m('h1', 'Timeline'),
      ]),
   
    ]) 
  }
}
