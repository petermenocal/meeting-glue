const m = require('mithril')
let Tabs = require('../models/Tabs')
let Calendar = require('../models/Calendar')
let Slideshow = require('../models/Slideshow')
let Feed = require('../models/Feed')
let Initializer = require('../models/Initializer')

module.exports = {
  oncreate: Initializer.start.bind(Initializer,'lvcva'),
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
          m('div', {class: 'fl w-30 flex flex-column justify-center', style: 'height: 350px'}, [
            m('img', {src: 'img/cvb/logo-las_vegas.png'})
          ]),
          m('div', {class: 'fl w-70 ttu flex flex-column justify-center measure-narrow', style: 'height: 350px;'}, [
            m('h1', {class: 'f4'}, 'Las Vegas Convention and Visitors Authority'),
            m('p', {class: 'lh-copy mt0 mb0'}, '3150 Paradise Road'),
            m('p', {class: 'lh-copy mt0 mb0'}, 'Las vegas, NV 89109'),
            m('a', {class: 'lh-copy mt3 link dim mb0 link bg-white-30 br2 w-40 tc pa1 pointer b white', href: '/rfp', oncreate: m.route.link}, 'send rfp')
          ])
        ]),
        m('div', {class: 'fl flex flex-column justify-center w-30 pb4', style: 'height: 100%; min-height: 350px; background: url("img/cvb/bg-sidebar-gradient.png"); background-size: cover;'}, [
          m('ul', {class: 'list'}, [
            m('li', {class: 'lh-copy'}, 'CVB'),
            m('li', {class: 'lh-copy'}, 'Non-member based'),
            m('li', {class: 'lh-copy'}, 'Las Vegas, NV')
          ])
        ])
      ]),
      //tweets!
      m('div', {class: 'fl w-30 relative bg-purple near-white h-100 pa3', style: 'height: 230px'}, [
        m('div', {class: 'b ttu tracked fl w-100'}, [
          m('img', {class: 'br4 fl mr2', src: Feed.profileImage}),
          m('h1', {class: 'fl f4'}, '@LVCVA')
        ]),
        m('div', {class: 'fl w-100 pa2'}, [
           m('h1', {class: 'f4 fw4 measure-narrow'}, Feed.active.text)
        ])
      ]),
      // slideshow
      m('div', {class: 'fr w-70 relative', style: 'background: url('+ Slideshow.active.src+'); overflow: hidden !important; height: 230px; max-height: 230px; background-size: cover; background-position: center center'}, [
        m('div', {class: 'measure-narrow absolute right-0 w-50 near-white flex flex-column justify-center', style: 'background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0, 0, 0, 0.9), rgba(0,0,0,1)); top:  0; bottom: 0'}, [
          m('h1', {class: 'mb0 w-40 absolute right-2 f3 top-2'}, "Best convention city in the US."),
        ])
      ]),
      // fact panels
      m('div', {class: 'fl w-100 pa3 mt4 mb4'}, [
        m('div', {class: 'fl ml3 shadow-3 pa3 white relative shadow-custom br4', style: ' width: 47%; height: 500px; background: url("img/cvb/bg-quick_facts.png"); background-size: cover;'}, [
          m('h1', {class: 'f4'}, 'Quick Facts'),
          m('p', {onclick: Calendar.toggleModal, class: 'absolute top-0 right-2 ba bw1 pa2 br2 link dim pointer'}, 'Convention Calendar'),
          m('span', {class: 'fl w-100'}, [
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Exhibit Space:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '1,940,631 SF'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Exhibit Halls:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '13'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Meeting Space:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '250,000 SF'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Meeting Rooms:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '144'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Cost Per SF (Avg):'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '$0.33'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Distance from airport:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '4 miles'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'WiFi (Public space):'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, 'Free'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Parking:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '5,000 spaces (daily fees may apply)'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'ADA Accessibility:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, 'Yes'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Wheelchair Rental:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, 'Call FedEx Office at 702-943-6780'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Electrical Power:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '(110/120v 20amps) single phase, (208/480v) three phase'),
          ])
        ]),
        m('div', {class: 'fr mr3 shadow-6 pa3 white relative shadow-custom br4', style: 'width: 47%; height: 500px; background: url("img/cvb/bg-quick_facts.png"); background-size: cover;'}, [
          m('h1', {class: 'f4'}, 'Updates from LVCVA'),
          m('div', {class: 'fl w-100', style: 'height: 500px; overflow-x: scroll'}, [
            m('h1', {class: 'white-70 lh-title'}, "Venetian Las Vegas Launches Booking via Facebook Messenger"),
            m('p', {class: 'lh-copy f4 measure pt3 center ph4'}, "The Venetian Las Vegas launched one of the hopitality industry's first Facebook Messenger direct booking channels and the first for an individual hotel, offering guests the opportunity to book directly and securly through social messaging.  By automatically analyzing and learning the guests conversational patterns, the application will continually improve its vocabulary and functionality to serve guests. ")
          ])
        ]),
      ]),
      // tabs
      m('div', {class: 'fl w-100 bg-light-gray'}, [
        m('div#tabs_container', {class: 'fl w-100'}, [
          Tabs.list.map(function(t) {
            return m('div', {onclick: Tabs.swap.bind(Tabs, t), class: Tabs.isActive(t.id) ? 'sans-serif f5 flex justify-center items-center ttu tracked link pointer h3 fl dib bg-active white w-20 tc' : 'sans-serif f5 flex justify-center items-center ttu tracked link pointer h3 fl dib bg-b-purple-1 white w-20 tc', style: 'border-right: 1px solid rgba(255, 255, 255, 0.3)'}, [
              m('div', {class: 'h3 w-100', style: 'padding-top: 25px'}, t.title)
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
