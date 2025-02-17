const m = require('mithril')
let Hotel = require('../models/Hotel')
let TitleBar = require('../components/TitleBar')
let RFP = require('../models/RFP')
let _ = require('underscore')

module.exports = {
  view: (vnode) => {
    return m('div', {class: 'fl w-100'}, [
      m('div', {class: RFP.blockEditor ? 'bg-white black pa3 absolute top-0 right-0 bottom-0 left-0' : 'dn', style: 'z-index: 9999'}, [
        m('div', {class: 'relative'}, [
          m('div', {class: 'absolute top-0 right-0 red', onclick: RFP.toggleBlockEditor}, 'Close'),
          m('div', {class: 'fl w-100 mt3'}, [
            m('h1', 'Content Block Editor'),
            m('div', {class: 'fl w-100'}, [
              m('div', {class: 'fl w-50'}, [
                RFP.targetBlock.body.map(function(x) {
                  return m('textarea[rows=10]', {oninput: m.withAttr('value', function(val) { let id = x.id; let thisBody = _.find(RFP.targetBlock.body, function(c) { if(c.id === id) { c.content = val} }) }), value: x.content, class: 'db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2', style: 'height: auto'},  x.content)
                }),
              ]),
              m('div', {class: 'fl w-50'}, [
                m('label', {class: 'fl w-100 fw2 ttu tracked mb3 bb b-black--10'}, 'PREVIEW'),
                RFP.targetBlock.body.map(function(x){
                  return m(x.type, x.content)
                })
              ])
            ]),
          ])
        ])
      ]),
      m('div', {class: RFP.chipEditor ? 'bg-white black pa3 absolute top-0 right-0 bottom-0 left-0' : 'dn', style: 'z-index: 9999'}, [
        m('div', {class: 'relative measure center'}, [
          m('div', {class: 'absolute top-0 right-0 red', onclick: RFP.toggleChipEditor}, 'Close'),
          m('div', {class: 'fl w-100 mt3'}, [
            m('h1', 'Editor'),
            m('div', {class: 'fl w-100'}, [
              m('label', {class: 'fl w-100'}, 'Event name'),
              m('input', {class: 'fl w-100'}),
            ]),
            m('div', {class: 'fl w-100 mt3'}, [
              m('label', {class: 'fl w-100'}, 'Start date'),
              m('input', {class: 'fl w-100'}),
            ]),
            m('div', {class: 'fl w-100 mt3'}, [
              m('label', {class: 'fl w-100'}, 'End date'),
              m('input', {class: 'fl w-100'}),
            ]),
            m('div', {class: 'fl w-100 mt3'}, [
              m('label', {class: 'fl w-100'}, 'Attendance estimate'),
              m('input', {class: 'fl w-100', type: 'number'}),
            ]),
          ])
        ])
      ]),
      m('div', {class: 'fl w-50'}, [
        m('div', {class: 'sans-serif bg-white black-80 fl w-100 pa2 h-100', style: 'min-height: 100vh'}, [
          //header
          m('h1', {class: 'tc'}, 'Request for Proposal'),
          m('div', {class: 'pa3'}, [
            //header rfp range
            m('h3', {class: 'tc'}, '1. Choose RFP range'),
            //options rfp range
            m('div', {class: 'flex flex-row justify-between w-100 mt4'}, [
              m('a', {class: 'shadow-1 fw5 blue link dim pointer pa2 bg-black-10 br2 f6'}, 'Hotel Name'),
              m('a', {class: 'shadow-1 fw5 blue link dim pointer pa2 bg-black-10 br2 f6'}, 'Blanket CITYNAME'),
              m('a', {class: 'shadow-1 fw5 blue link dim pointer pa2 bg-black-10 br2 f6'}, 'Off-site venue'),
              m('a', {class: 'shadow-1 fw5 blue link dim pointer pa2 bg-black-10 br2 f6'}, 'Other supplier'),
            ]),
          ]),
          //NSO CVB reps
          m('h3', {class: 'mt5 tc'}, '2. Choose reps'),
          m('div', {class: 'fl w-100'}, [
            m('ul', {class: 'measure center list h5 w-50 br2 bg-black-10 pr4', style: 'overflow: scroll'}, [
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'Add all reps')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'Add all NSO reps')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'Add all CVB reps')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'NSO rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'NSO rep: Peter Davison')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'NSO rep: David Tennant')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'NSO rep: Matt Smith')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
              m('li', {class: 'h2 bb b-black--10 pv4'}, [
                m('a', {class: 'link dim pointer'}, 'CVB rep: Tom Baker')
              ]),
            ])
          ]),
          m('div', {class: 'fl w-100 mt5'}, [
            m('h3', {class: 'tc'}, '3. Send & track'),
            m('a', {class: 'fl w-100 pa2 br4 tc link dim bg-green white'}, 'Send')
          ])
        ])
      ]),
      //right side
      m('div', {class: 'fl h-100 w-50 bg-light-gray pa2', style: 'min-height: 100vh; overflow-y: scroll; max-height: 100vh'}, [
        //range chips
        m('div', {class: 'mt3', id: 'range'}, [
          m('h3', 'RFP Range'),
          m('div', {class: 'bg-dark-gray br2 white pa2 h3 flex items-center w-100', style: 'overflow-x: scroll'}, [
            m('div', {class: 'pa2 br4 bg-near-white dark-gray mr2 f6'}, 'Hard Rock Hotel LV'),
            m('div', {class: 'pa2 br4 bg-near-white dark-gray mr2 f6'}, 'Other: User entered name'),
            m('div', {class: 'pa2 br4 bg-near-white dark-gray mr2 f6'}, 'Las Vegas, NV')
          ])
        ]),
        //recipients chips
        m('div', {class: 'mt3', id: 'recipients'}, [
          m('h3', 'Recipients'),
          m('div', {class: 'bg-dark-gray br2 white pa2 h3 flex items-center w-100', style: 'overflow-x: scroll'}, [
            m('div', {class: 'pa2 br4 bg-near-white dark-gray mr2 f6'}, 'David Tennant')
          ])
        ]),
        m('div', {class: 'mt3', id: 'rfp-content'}, [
          m('h3', 'RFP Content'),
          m('div', {class: 'bg-light-blue br2 black pa2 h3 flex items-center w-100 shadow-2', style: 'overflow-x: scroll; margin-bottom: -1px'}, [
            m('div', {onclick: RFP.toggleChipEditor.bind(RFP, 'event'), class: 'pa2 br4 bg-near-white dark-gray mr2 f6'}, 'Event name'),
            m('div', {onclick: RFP.toggleChipEditor.bind(RFP, 'dates'), class: 'pa2 br4 bg-near-white dark-gray mr2 f6'}, 'Event dates'),
            m('div', {onclick: RFP.toggleChipEditor.bind(RFP, 'attendance'), class: 'pa2 br4 bg-near-white dark-gray mr2 f6'}, 'Attendance estimate'),
          ]),
          RFP.current.blocks.map(function(b) {
            return m('div', {class: 'fl w-100 bg-white black pa2 h-100'}, [
              m('div', {class: 'fl w-100 bg-near-white pa2 mt3 relative'},[
                m('div', {class: 'absolute top-0 right-0 f6 gray pa2'}, 'drag to reorder'),
                m('div', {class: 'absolute bottom-0 right-0 f6 gray pa2', onclick: RFP.toggleBlockEditor.bind(RFP, b)}, 'edit'),
                b.body.map(function(bb) {
                  return m(bb.type, bb.content)
                })
              ])
            ])
          }),
        ]),
      ])
    ])
  }
}
