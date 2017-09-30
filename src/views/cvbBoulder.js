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
            m('.f3.fw5.mb2.measure-narrow', 'Boulder Convention & Visitors Bureau'),
            m('p', {class: 'lh-copy mt0 mb0'}, '2440 Pearl Street'),
            m('p', {class: 'lh-copy mt0 mb0'}, 'Boulder, CO 80302'),
            m('p', {class: 'lh-copy mt0 mb0'}, '(303) 442-2911'),
            m('a', {class: 'lh-copy mt3 link dim mb0 link bg-white-30 br2 w-40 tc pa1 pointer b white', href: '/rfp', oncreate: m.route.link}, 'send rfp')
          ])
        ]),
        m('div', {class: 'fl flex flex-column justify-center w-30 pb4', style: 'height: 100%; min-height: 350px; background: url("img/cvb/bg-sidebar-gradient.png"); background-size: cover;'}, [
          m('ul', {class: 'list'}, [
            m('li', {class: 'lh-copy'}, 'CVB'),
            m('li', {class: 'lh-copy'}, 'Non-member based'),
            m('li', {class: 'lh-copy'}, 'Boulder, CO')
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
          m('script[async]', {src:'//platform.twitter.com/widgets.js', charset: "utf-8"})
           //m('h1', {class: 'f4 fw4 measure-narrow'}, Feed.active.text)
        ])
      ]),
      // slideshow
      m('div', {class: 'fr w-70 relative', style: 'background: url('+ SlideshowBoulder.active.src+'); overflow: hidden !important; height: 530px; max-height: 530px; background-size: cover; background-position: center center'}, [
        m('div', {class: 'measure-narrow absolute right-0 w-50 near-white flex flex-column justify-center', style: 'top:  0; bottom: 0'}, [
        ])
      ]),
      // fact panels
      m('div', {class: 'fl w-100 pa3 mt4 mb4'}, [
        m('div', {class: 'fl ml3 shadow-3 pa3 white relative shadow-custom br4', style: ' width: 47%; height: 600px; background: url("img/cvb/bg-quick_facts.png"); background-size: cover;'}, [
          m('h1', {class: 'f4'}, 'Quick Facts'),
          m('p', {onclick: Calendar.toggleModal, class: 'absolute top-0 right-2 ba bw1 pa2 br2 link dim pointer'}, 'Convention Calendar'),
          m('span', {class: 'fl w-100'}, [
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Hotel Inventory:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '2,000 rooms'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Total meeting Space SF:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, '36,000 SF'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Airport:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, 'Denver International Airport (DEN)'),
            m('p', {class: 'fl h1 mb1 w-50 tr ph2 b ttu tracked'}, 'Public Transportation:'),
            m('p', {class: 'fr h1 mb1 w-50 ph2'}, 'Green Ride Boulder ($34) or RTD Bus ($9)'),
            m('p', {class: 'tc f3 underline w-100 fl fw4'}, 'Awards'),
            //2016
            m('p', {class: 'fl f6 h1 mb4 w-50 tr ph2 b ttu tracked'}, '#10 "Highest Well Being Communities"'),
            m('p', {class: 'fr h1 mb4 w-50 ph2'}, 'Gallup-Healthways Well-Being Index, March 2017'),
            //2017
            m('p', {class: 'fl f6 h2 mb4 w-50 tr ph2 b ttu tracked'}, '18 Best Cities in America for Solo Travelers'),
            m('p', {class: 'fr h2 mb4 w-50 ph2 flex items-center'}, 'TravelandLeisure.com, December 2016'),
            m('p', {class: 'fl f6 h1 mb4 w-50 tr ph2 b ttu tracked'}, 'The Best US Cities to Spend a Weekend'),
            m('p', {class: 'fr h1 mb4 w-50 ph2'}, 'Thrillist, March 2016'),
            m('p', {class: 'fl f6 h1 mb4 w-50 tr ph2 b ttu tracked'}, 'Top 15 Cities for Seasonal Brews'),
            m('p', {class: 'fr h1 mb4 w-50 ph2'}, 'Travelocity.com, November 2016'),


          ])
        ]),
        m('div', {class: 'fr mr3 shadow-6 pa3 white relative shadow-custom br4', style: 'width: 47%; height: 600px; background: url("img/cvb/bg-quick_facts.png"); background-size: cover;'}, [
          m('h1', {class: 'f4'}, 'Updates from Boulder'),
          m('div', {class: 'fl w-100', style: 'height: 500px; overflow-x: scroll'}, [
            m('h1', {class: 'white-70 lh-title'}, "Number 10 'Highest Well Being Communities'"),
            m('p', {class: 'lh-copy f6 measure pt3 center ph4'}, "The mission of the Boulder Convention & Visitors Bureau (CVB) is to advocate and provide leadership to develop and promote the natural environment, art/culture, historic and visitor potential for the express purpose of aiding the Boulder economy."),
            m('p', {class: 'lh-copy f6 measure pt1 center ph4'}, "Whether you’re a visitor, meeting planner or Boulder tourism business, we’re here to serve you. You’ll find that our website is filled with information, but please don’t hesitate to reach out should you need personal assistance.")
          ])
        ]),
      ]),
      // TabsBoulder
      m('div', {class: 'fl w-100 bg-light-gray'}, [
        m('div#tabs_container', {class: 'fl w-100'}, [
          TabsBoulder.list.map(function(t) {
            return m('div', {onclick: TabsBoulder.swap.bind(TabsBoulder, t), class: TabsBoulder.isActive(t.id) ? 'sans-serif f5 flex justify-center items-center ttu tracked link pointer h3 fl dib bg-active white w-20 tc' : 'sans-serif f5 flex justify-center items-center ttu tracked link pointer h3 fl dib bg-b-purple-1 white w-20 tc', style: 'border-right: 1px solid rgba(255, 255, 255, 0.3)'}, [
              m('div', {class: 'h3 w-100', style: 'padding-top: 25px'}, t.title)
            ])
          })
        ]),
        m('div#tabs_content', {class: 'fl w-100 h6', style: 'background: rgb(98, 103, 160)'}, [
          m('div', {class: 'pa3 near-white'}, [
            m('h1', {class: 'measure center lh-copy tc'}, TabsBoulder.current.title),
            m('p', {class: 'measure center lh-copy pre tc'}, TabsBoulder.current.content)
          ])
        ]),
      ])
    ])
  }
}
