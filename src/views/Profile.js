const m = require("mithril");

module.exports = {
  view: () => {
    return m('div', [
      m('.fl.w-100.h5.flex.flex-column.justify-center.items-center', {style: 'background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url("../img/cover.png")'}, [
	m('img', {style: 'border-radius: 50%; border: 6px solid purple', src: '../img/17.jpg'}),
	m('h4.white.mt0', 'Emma Lauren')
      ]),
      m('.fl.pb4.w-100.tc.bg-purple.white.br2.pa2', [
	m('p.f3.mb0.fw6', 'Harrah\'s Entertainment'),
	m('p.fw4.mt1', 'Vice President'),
	m('a.bg-green.br2.pa2.white', 'Send RFP')
      ]),
      m('.fl.w-50.mv3.br2.pa2', [
	m('h1', 'Public timeline'),
	m('.fl.w-100.pa2.ba.b--black-20.pa2.bg-white.shadow-2', [
	  m('.f3', 'New opportunity available'),
	  m('.f6', 'September 1, 2017'),
	  m('.f6.mt2.bt.pt2.b--black-30', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo posuere luctus. Cras sed pellentesque metus. Donec sollicitudin quis sapien at volutpat. Morbi lacinia, nunc nec viverra commodo, mi orci tempus ipsum, eget lacinia felis eros eget urna. Sed tellus nisl, commodo id quam nec, facilisis sodales sem. Vivamus facilisis nisi dui, at mollis massa ullamcorper non. Nunc molestie dictum laoreet. Aliquam vel imperdiet nibh, at mattis purus. Nunc id libero arcu. Integer nibh neque, malesuada ac venenatis sit amet, elementum vitae metus. Donec condimentum augue in purus semper sagittis vitae quis nulla.'),
	]),
	m('.fl.w-100.ba.pa2.b--black-20.pa2.bg-white.mt3', [
	  m('.f3', 'New opportunity available'),
	  m('.f6', 'September 1, 2017'),
	  m('f6.mt2', 'Read more')
	]),
	m('.fl.w-100.pa2.ba.b--black-20.pa2.bg-white.mt3', [
	  m('.f3', 'New opportunity available'),
	  m('.f6', 'September 1, 2017'),
	  m('f6.mt2', 'Read more')
	])
      ]),
      
      m('.fl.w-50.mv3.br2.pa2', [
	m('h1', 'Response timeline'),
	m('.fl.w-100.ba.b--black-20.pa2.bg-white.mt3', [
	  m('.f3', 'RFP opened'),
	  m('.f6', 'September 1, 2017'),
	]),
	m('.fl.w-100.ba.b--black-20.pa2.bg-white.mt3', [
	  m('.f3', 'Jerry Flanaghan replied to RFP'),
	  m('.f6', 'September 1, 2017'),
	]),
	m('.fl.w-100.ba.b--black-20.pa2.bg-white.mt3', [
	  m('.f3', 'RFP accepted'),
	  m('.f6', 'September 1, 2017'),
	]),
      ]),
  

      m('.fl.w-100.bg-white.pa2', [
	m('h1', 'My RFP Templates'),
	m('.flex.flex-row.items-center.ph2.bb.b--black-20.pb3', [
	  m('img', {src: '//placehold.it/100x100', class: 'br4 fl mr2'}),
	  m('.fl.fw5', 'Annual Summit'),
	]),
	m('.flex.flex-row.items-center.ph2.bb.b--black-20.pb3.pt2', [
	  m('img', {src: '//placehold.it/100x100', class: 'br4 fl mr2'}),
	  m('.fl.fw5', 'CES'),
	]),
	m('.flex.flex-row.items-center.ph2.bb.b--black-20.pb3.pt2', [
	  m('img', {src: '//placehold.it/100x100', class: 'br4 fl mr2'}),
	  m('.fl.fw5', 'Fight Night'),
	]),
     
      ])

    ]) 
  }
}
