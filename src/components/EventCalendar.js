const m = require('mithril');
var TitleBar = require('./WidgetTitleBar');
var IndustryEvents = require('../models/IndustryEvents');

var EventCalendar = {
  view: ()=> { 
    return m('.fl.w-100.mt4.bg-white.shadow-2', [
      m(TitleBar, {content: "Event Calendar"}),
      m('.fl.w-100', {style: 'height: 720px; overflow: scroll'}, IndustryEvents.list.map(function(e) {
        return m('div.bb.b--black-10.pa4.w-100', {style: 'height: 220px'}, [
          m('.fw3.f4.tl', e.name),
          m('.fw6.f6.pv2.tl', 'Parent: ' + e.parent),
          m('.fl.w-100.pt1.tl', [
            m('.fw4.f6', e.date.location),
          ]),
          m('.fl.w-100.mt2.mb2', [
            m('.fl.w-50.tc.fw3.f6.bg-green.white.pa1.br2', e.type),
            m('.fl.w-50.tc.fw3.f6.bg-light-gray.black.pa1.br2', e.market),
          ]),
          m('.fw4.f6.tl.purple', 'Starts on ' + e.date.start),
          m('.fw4.f6.tl.purple', 'Ends on ' + e.date.end),
        ]);
      }))
    ]);
  }
};

module.exports = EventCalendar;
