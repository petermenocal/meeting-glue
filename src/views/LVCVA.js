const m = require('mithril')
let Tabs = require('../models/Tabs')
let Calendar = require('../models/Calendar')
let Slideshow = require('../models/Slideshow')

module.exports = {
  oncreate: Slideshow.initialize,
  view: () => {
    return m('div', {class: 'avenir'},  [
      // calendar modal
      m('div', {class: Calendar.displayModal ? 'bg-b-purple-1 fixed top-0 right-0 left-0 bottom-0 pa4 shown' : 'bg-b-purple-1 absolute top-0 right-0 left-0 bottom-0 pa4 hidden', style: 'z-index: 9999'}, [
        m('a', {class: 'absolute right-2 f3 white', onclick: Calendar.toggleModal}, 'Close'),
        m('h1', {class: 'white'}, 'Calendar'),
        m('p', {class: 'white'}, 'placeholder for calendar')
      ]),
      // header
      m('div', {class: 'fl w-100 bg-b-purple-1 near-white avenir fw4 ttu', style: 'margin-bottom: -60px;'}, [
        m('div', {class: 'fl w-70'}, [
          m('div', {class: 'fl w-30'}, [
            m('img', {src: 'img/cvb/logo-las_vegas.png'})
          ]),
          m('div', {class: 'fl w-70 ttu flex flex-column justify-center measure-narrow pb4', style: 'height: 250px;'}, [
            m('h1', {class: 'f4'}, 'Las Vegas Convention and Visitors Authority'),
            m('p', {class: 'lh-copy mt0 mb0'}, '3150 Paradise Road'),
            m('p', {class: 'lh-copy mt0 mb0'}, 'Las vegas, NV 89109'),
            m('a', {class: 'lh-copy mt0 mb0 link  pointer b'}, 'send rfp')
          ])
        ]),
        m('div', {class: 'fl flex flex-column justify-center w-30 pb4', style: 'height: 250px; background: url("img/cvb/bg-sidebar-gradient.png"); background-size: cover;'}, [
          m('ul', {class: 'list'}, [
            m('li', {class: 'lh-copy'}, 'CVB'),
            m('li', {class: 'lh-copy'}, 'Non-member based'),
            m('li', {class: 'lh-copy'}, 'Las Vegas, NV')
          ])
        ])
      ]),
      // slideshow
      m('div', {class: 'fl w-100 relative', style: 'background: url('+ Slideshow.active.src+'); overflow: hidden !important; height: 230px; max-height: 230px; background-size: cover; background-position: center center'}, [
        m('div', {class: 'measure-narrow absolute right-0 w-50 near-white flex flex-column justify-center', style: 'background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0, 0, 0, 0.9), rgba(0,0,0,1)); top:  0; bottom: 0'}, [
          m('h1', {class: 'mb0 w-40 absolute right-2 f3 top-2'}, "Best convention city in the US."),
        ])
      ]),
      // fact panels
      m('div', {class: 'fl w-100 pa3 mt4 mb4'}, [
        m('div', {class: 'fl ml3 shadow-3 pa3 white relative shadow-custom br4', style: ' width: 47%; height: 300px; background: url("img/cvb/bg-quick_facts.png"); background-size: cover;'}, [
          m('h1', {class: 'f4'}, 'Quick Facts'),
          m('p', {onclick: Calendar.toggleModal, class: 'absolute top-0 right-2 ba bw1 pa2 br2 link dim pointer'}, 'Convention Calendar'),
          m('span', {class: 'fl w-100'}, [
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
          ])
        ]),
        m('div', {class: 'fr mr3 shadow-6 pa3 white relative shadow-custom br4', style: 'width: 47%; height: 300px; background: url("img/cvb/bg-quick_facts.png"); background-size: cover;'}, [
          m('h1', {class: 'f4'}, 'Quick Facts'),
          m('p', {onclick: Calendar.toggleModal, class: 'absolute top-0 right-2 ba bw1 pa2 br2 link dim pointer'}, 'Convention Calendar'),
          m('span', {class: 'fl w-100'}, [
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
            m('p', {class: 'fl w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr w-50 ph2'}, '150,000 rooms'),
          ])
        ]),
      ]),
      // tabs
      m('div', {class: 'fl w-100 bg-light-gray'}, [
        m('div#tabs_container', {class: 'fl w-100'}, [
          Tabs.list.map(function(t) {
            return m('div', {onclick: Tabs.swap.bind(Tabs, t), class: Tabs.isActive(t.id) ? 'sans-serif f5 flex justify-center items-center ttu tracked link pointer h3 fl dib bg-active white w-20 tc' : 'sans-serif f5 flex justify-center items-center ttu tracked link pointer h3 fl dib bg-b-purple-1 white w-20 tc', style: 'border-right: 1px solid rgba(255, 255, 255, 0.3)'}, [
              m('div', {class: 'h3 w-100', style: 'padding-top: 25px'}, 'Tab ' + t.id)
            ])
          })
        ]),
        m('div#tabs_content', {class: 'fl w-100 h6', style: 'background: rgb(98, 103, 160)'}, [
          m('div', {class: 'pa3 near-white'}, [
            m('h1', {class: 'tc'}, 'Content for tab ' + Tabs.current.id),
            m('p', {class: 'measure center lh-copy'}, Tabs.current.content)
          ])
        ]),
      ])
    ])
  }
}
