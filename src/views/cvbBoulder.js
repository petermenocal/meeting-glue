const m = require('mithril')
let TabsBoulder = require('../models/TabsBoulder')
let Calendar = require('../models/Calendar')
let SlideshowBoulder = require('../models/SlideshowBoulder')
let Feed = require('../models/Feed')
let Initializer = require('../models/Initializer')

module.exports = {
  oncreate: Initializer.start.bind(Initializer, 'boulder'),
  oninit: Feed.getTimeline,
  view: () => {
    return m('div', {class: 'avenir'},  [
      // calendar modal
      m('div', {class: Calendar.displayModal ? 'bg-b-purple-1 fixed top-0 right-0 left-0 bottom-0 pa4 shown' : 'bg-b-purple-1 absolute top-0 right-0 left-0 bottom-0 pa4 hidden', style: 'z-index: 9999; overflow-x: scroll;'}, [
        m('a', {class: 'absolute right-2 f3 white', onclick: Calendar.toggleModal}, 'Close'),
        m('h1', {class: 'white'}, 'Calendar'),
        //calendar table
        m('table', {class: 'fl w-100 bg-white collapse ba br2 b--black-10 pv2 ph3'}, [
          //event headings
          m('tr', {class: 'striped--light-gray'}, [
            m('th', {class: 'pv2 ph3 tl f6 fw6'}, 'CONVENTION'),
            m('th', {class: 'pv2 ph3 tl f6 fw6'}, 'VENUE'),
            m('th', {class: 'pv2 ph3 tl f6 fw6'}, 'START DATE'),
            m('th', {class: 'pv2 ph3 tl f6 fw6'}, 'END DATE'),
            m('th', {class: 'pv2 ph3 tl f6 fw6'}, 'ATTENDEES'),
          ]),
          //events
          Calendar.events.map((event) => {
            return m('tr', {class: 'striped--light-gray'}, [
              m('td', {class: 'pv2 ph3 b measure-narrow'}, event.convention),
              m('td', {class: 'pv2 ph3'}, event.venue),
              m('td', {class: 'pv2 ph3'}, event.startDate),
              m('td', {class: 'pv2 ph3'}, event.endDate),
              m('td', {class: 'pv2 ph3'}, event.attendees),
            ])
          })
        ])
      ]),
      // header
      m('div', {class: 'fl w-100 bg-b-purple-1 near-white avenir fw4 ttu', style: 'overflow: hidden'}, [
        m('div', {class: 'fl w-70'}, [
          m('div', { class: 'fl w-50 flex flex-column items-center justify-center', style: 'height: 350px' }, [
            m('img.pa4-ns', { src: 'img/cvb/logo-cvb-boulder.png', style: 'max-width: 200px'})
          ]),
          m('div', {class: 'fl w-50 ttu flex flex-column justify-center', style: 'height: 350px;'}, [
            m('.f1.fw5.mb2.measure', 'Boulder Convention & Visitors Bureau'),
            m('p', {class: 'f3 lh-copy mt0 mb0'}, '2440 Pearl Street'),
            m('p', {class: 'f3 lh-copy mt0 mb0'}, 'Boulder, CO 80302'),
            m('p', {class: 'f3 lh-copy mt0 mb0'}, '(303) 442-2911'),
            m('a', {class: 'f3 lh-copy mt3 link dim mb0 link bg-white-30 br2 w-40 tc pa1 pointer b white', href: '/rfp', oncreate: m.route.link}, 'send rfp')
          ])
        ]),
        m('div', {class: 'fl flex flex-column justify-center w-30 pb4', style: 'height: 100%; min-height: 350px; background: url("img/cvb/bg-sidebar-gradient.png"); background-size: cover;'}, [
          m('ul', {class: 'list'}, [
            m('li', {class: 'f1 lh-copy'}, 'CVB'),
            m('li', {class: 'f1 lh-copy'}, 'Non-member based'),
            m('li', {class: 'f1 lh-copy'}, 'Boulder, CO')
          ])
        ])
      ]),
      //tweets!
      m('div', {class: 'fl w-30 relative bg-purple near-white h-100 pa3', style: 'height: 530px'}, [
        m('div', {class: 'b ttu tracked fl w-100'}, [
          //m('img', {class: 'br4 fl mr2', src: Feed.profileImage}),
          m('h1', {class: 'fl f4'}, '@visitBoulder')
        ]),
        m('div', {class: 'fl w-100 pa2'}, [
          m('a.twitter-timeline[data-theme=dark][data-height=400][data-link-color=#981CEB][href=https://twitter.com/VisitBoulder]'),
          m('script[async]', {src:'//platform.twitter.com/widgets.js', charset: 'utf-8'})
          //m('h1', {class: 'f4 fw4 measure-narrow'}, Feed.active.text)
        ])
      ]),
      // slideshow
      m('div', {class: 'fr w-70 relative', style: 'background: url('+ SlideshowBoulder.active.src+'); overflow: hidden !important; height: 530px; max-height: 530px; background-size: cover; background-position: center center'}, [
        m('div', {class: 'measure-narrow absolute right-0 w-50 near-white flex flex-column justify-center', style: 'top:  0; bottom: 0'}, [
        ])
      ]),
      m('.fl.w-100.bg-light-gray.pa4', [
        m('.center.w-100', {style: 'max-width: 600px'}, [ 
          m('.f2.fw5.purple.mb2', 'Updates from Boulder'),
          m('.f5.fw3.mb2', 'Number 10 Highest Well Being Communities'),
          m('.f5.fw4.lh-copy', 'The mission of the Boulder Convention & Visitors Bureau (CVB) is to advocate and provide leadership to develop and promote the natural environment, art/culture, historic and visitor potential for the express purpose of aiding the Boulder economy.  Whether you’re a visitor, meeting planner or Boulder tourism business, we’re here to serve you. You’ll find that our website is filled with information, but please don’t hesitate to reach out should you need personal assistance.'),
        ]),

      ]),
      m('.center.w-100', {style: 'max-width: 600px'}, [
        m('div.hk-tabs.w-100', [
          m('a.hk-tabs__tab--active', {
            'attributes': {
              'href': '#',
              'draggable': 'false',
              'className': 'hk-tabs__tab'
            }
          }, 'Quick Facts'),
          m('a.hk-tabs__tab', {
            'attributes': {
              'href': '#',
              'draggable': 'false',
              'className': 'hk-tabs__tab'
            }
          }, 'Awards'),
          m('a.hk-tabs__tab', {
            'attributes': {
              'href': '#',
              'draggable': 'false',
              'className': 'hk-tabs__tab'
            }
          }, 'Updates from Boulder'),
          m('a.hk-tabs__tab', {
            'attributes': {
              'href': '#',
              'draggable': 'false',
              'className': 'hk-tabs__tab'
            }
          }, 'Promotions'),
          m('a.hk-tabs__tab', {
            'attributes': {
              'href': '#',
              'draggable': 'false',
              'className': 'hk-tabs__tab',
            }
          }, 'Sales staff'),
        ]),
        //quickfacts
        m('.fl.w-100.pa4.dn', [
          m('.f3.b.dark-gray', 'Quick Facts'),
          m('.f4.near-black.lh-copy', 'Hotel Inventory: 2,000 rooms'),
          m('.f4.near-black.lh-copy', 'Total meeting space: 3600sqft'),
          m('.f4.near-black.lh-copy', 'Airport: Denvery International Airport (DEN)'),
          m('.f4.near-black.lh-copy', 'Public Transportation: Green Ride Boulder [$34] or RTD Bus [$9]'),
        ]),
        
        m('.fl.w-100.pa4', [
          m('.f3.b.dark-gray', 'Awards'),
          m('.fl.w-100.mt2', [
            m('.flex.w-100.items-center.mb2', [
              m('.flex.w-100.ph4.flex-column', [
                m('.f4.near-black.lh-copy.b', 'No. 10 Highest Well Being Communities'),
                m('.f4.near-black.lh-copy', 'Gallup-Healthways Well Being Index, March 2017'),
              ]),
            ]),
          ]),
          m('.fl.w-100.mt2', [
            m('.flex.w-100.items-center.mb2', [
              m('.flex.w-100.ph4.flex-column', [
                m('.f4.near-black.lh-copy.b', '18 Best Cities in America for Solo Travelers'),
                m('.f4.near-black.lh-copy', 'TravelAndLeisure.com, December2016'),
              ]),
            ]),
          ]),
          m('.fl.w-100.mt2', [
            m('.flex.w-100.items-center.mb2', [
              m('.flex.w-100.ph4.flex-column', [
                m('.f4.near-black.lh-copy.b', '18 Best Cities in America for Solo Travelers'),
                m('.f4.near-black.lh-copy', 'TravelAndLeisure.com, December2016'),
              ]),
            ]),
          ]),
        ]),

        m('.fl.w-100.pa4.dn', [
          m('.f3.b.dark-gray', 'Sales staff'),
          m('.fl.w-100.mt2', [
            m('.flex.w-100.items-center.mb2', [
              m('img.ba.b--light-gray.bw4', {style: 'border-radius: 50%', src: 'https://randomuser.me/api/portraits/women/71.jpg'}),
              m('.flex.w-100.ph4.flex-column', [
                m('.f4.near-black.lh-copy.b', 'Andrew Heidt'),
                m('.f4.near-black.lh-copy', 'Director of Group Sales and Marketing'),
                m('.f4.near-black.lh-copy', '303-938-2071'),
              ]),
            ]),
            m('.flex.w-100.items-center.mb2', [
              m('img.ba.b--light-gray.bw4', {style: 'border-radius: 50%', src: 'https://randomuser.me/api/portraits/women/71.jpg'}),
              m('.flex.w-100.ph4.flex-column', [
                m('.f4.near-black.lh-copy.b', 'Andrew Heidt'),
                m('.f4.near-black.lh-copy', 'Director of Group Sales and Marketing'),
                m('.f4.near-black.lh-copy', '303-938-2071'),
              ]),
            ]),
            m('.flex.w-100.items-center.mb2', [
              m('img.ba.b--light-gray.bw4', {style: 'border-radius: 50%', src: 'https://randomuser.me/api/portraits/women/71.jpg'}),
              m('.flex.w-100.ph4.flex-column', [
                m('.f4.near-black.lh-copy.b', 'Andrew Heidt'),
                m('.f4.near-black.lh-copy', 'Director of Group Sales and Marketing'),
                m('.f4.near-black.lh-copy', '303-938-2071'),
              ]),
            ]),
            m('.flex.w-100.items-center.mb2', [
              m('img.ba.b--light-gray.bw4', {style: 'border-radius: 50%', src: 'https://randomuser.me/api/portraits/women/71.jpg'}),
              m('.flex.w-100.ph4.flex-column', [
                m('.f4.near-black.lh-copy.b', 'Andrew Heidt'),
                m('.f4.near-black.lh-copy', 'Director of Group Sales and Marketing'),
                m('.f4.near-black.lh-copy', '303-938-2071'),
              ]),
            ]),
          ])
        ])
      ])
    ])
  }
}
