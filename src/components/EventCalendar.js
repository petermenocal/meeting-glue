const m = require('mithril')
var TitleBar = require('./WidgetTitleBar')
var IndustryEvents = require('../models/IndustryEvents')

var EventCalendar = {
  view: ()=> { 
    return m('.fl.w-100.bg-white.shadow-2', [
      m(TitleBar, {content: 'Event Calendar'}),
      m('div.hk-tabs.w-100', [
        m('a.hk-tabs__tab--active.f6', 'Hosted Buyer'),
        m('a.hk-tabs__tab.f6', 'All markets'),
        m('a.hk-tabs__tab.f6', 'Incentive'),
        m('div.spacer.flex-auto.bb.b--light-silver')
      ]),
      m('.fl.w-100', {style: 'height: 720px; overflow: scroll'}, IndustryEvents.list.map(function(e) {
        return m('div.bb.b--black-10.pa4.w-100.flex-column', [
          m('.f2.purple.fw3.tl', e.name),
          m('.fw6.f6.mt2.tl.near-black', 'Parent: ' + e.parent),
          m('.fw6.f6.tl.near-black', e.date.location),
          m('.w-100.mt2.mb2', [
            m('div.hk-button-group', [
              m('button.hk-button-sm--secondary', e.type),
              m('button.hk-button-sm--secondary', e.market),
            ]),
          ]),
          m('.flex.flex-auto.h2', [
            m('.fw4.f6.tl.purple.mr2', 'Starts on ' + e.date.start),
            m('.fw4.f6.tl.purple', 'Ends on ' + e.date.end),
          ])
        ])
      }))
    ])
  }
}

module.exports = EventCalendar
