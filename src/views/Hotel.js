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
          m('div', {class: 'fl w-100 bg-black', style: 'background: url("../img/hotel/HRH-Exterior-Dusk.png"); background-size: cover; height: 450px'}, [
            m('div', {class: 'fr w-40 bg-black-50 pa2 white h-100 flex items-center'}, [
              m('div', {class: 'db fl ph4'}, [
                m('h1', {class: 'fw4 ttu tracked'}, 'Hard Rock Hotel'),
                m('p', {class: 'mb0 f4 tracked'}, '4455 Paradise Road'),
                m('p', {class: 'mt1 f4 tracked'}, 'Las Vegas, NV 89109'),
                m('a', {class: "ba pa2 b--white tracked mt2 fl br1 bg-black-20 link dim pointer"}, 'SEND RFP'),
                m('span', {class: 'w-100 flex ttu tracked white-70 pt4 justify-between'}, [
                  m('p', 'CVB Member'),
                  m('p', 'Hotel'),
                  m('p', 'Casino'),
                  m('p', 'Resort'),
                ])
              ])
            ])
          ]),

          //content area
          m('div', {class: 'fl w-100 pa4'}, [
            m('div', {class: 'fl w-50 pr3'}, [
              m('div', {class: 'fl w-100 h5', style: 'overflow: hidden'}, [
                m('div', {class: 'db pa2 fl w-60 h5 white', style: 'background: linear-gradient(rgba(0, 160, 238, 0.8), rgba(0, 160, 238, 0.9)),  url("../img/bg-polylines.png"); background-size: cover; height: 300px'}, [
                  m('h4', {class: 'f3 fw5 lh-copy mb0 pl2'}, "What's included"),
                  m('ul', {class: 'mt1 list lh-copy yellow f5 fw5'}, [
                    m('li', 'In-room internet access'),
                    m('li', 'Daily newspaper'),
                    m('li', 'Access to fitness room'),
                    m('li', 'Roundtrip shuttle to Fashion Show Mall'),
                    m('li', 'Unlimited local and toll free calls'),
                  ])
                ]),
                m('div', {class: 'db fl w-40 h5 pl4', style: 'height: 300px; background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("../img/bg-polyboxes.png"); background-size: cover'}, [
                  m('p', {class: 'b f5 mt5 pt2'}, '1-855-693-5500'),
                  m('p', {class: 'b f5'}, 'hardrockhotel.com'),
                  m('p', {class: 'b f5'}, 'sales@hrhvegas.com'),
                ]),
              ]),
              m('div', {class: 'fl w-100 h5'}, [
                m('div', {class: 'db fl w-40 h5 flex flex-column justify-center ph5', style: 'height: 300px; background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("../img/bg-polyboxes.png"); background-size: cover'}, [
                    m('p', 'RESORT FEE'),
                    m('h1', {class: 'mb0'}, '$35.15'),
                    m('p', {class: 'mt0'}, 'per day')
                ]),
                m('div', {class: 'db pa2 fl w-60 h5 white', style: 'background: linear-gradient(rgba(47, 40, 92, 0.5), rgba(47, 40, 92, 0.7)),  url("../img/bg-polylines.png"); background-size: cover; height: 300px'}, [
                  m('h4', {class: 'f3 fw5 lh-copy mb0 pl2'}, "What's included"),
                  m('ul', {class: 'mt1 list lh-copy yellow f5 fw5'}, [
                    m('li', 'In-room internet access'),
                    m('li', 'Daily newspaper'),
                    m('li', 'Access to fitness room'),
                    m('li', 'Roundtrip shuttle to Fashion Show Mall'),
                    m('li', 'Unlimited local and toll free calls'),
                    m('li', 'Unlimited domestic long distance calls'),
                    m('li', 'Notary service at concierge'),
                    m('li', 'Boarding pass printing')
                  ])
                ])
              ])
            ]),
            m('div', {class: 'fl w-50', style: 'background-image: url("../img/hotel/HRH-pool.png"); background-size: cover; height: 556px'}, [
              m('div', {class: 'fr w-60 bg-black-80 h-100 pv2 ph4 white'}, [
                m('h1', "Headline goes here"),
                m('p', {class: 'measure-narrow lh-copy'}, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
                m('p', {class: 'measure-narrow lh-copy'}, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'),
              ])
            ]),
          ])
        ])
      }
  }
