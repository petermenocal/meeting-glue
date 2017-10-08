const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');
let Openings = require('../models/Openings');

let NewOpeningsWidget = {
  view: () => {
    return m('.fl.w-100.bg-white.h-100.shadow-2', [
      m(WidgetTitleBar, {content: 'Hot New Openings'}),
    Openings.list.map(function(o) {
      return m('.fl.w-100.pa4.bb.b--black-30',[
        m('.fl.w-100.fw6.f6', o.venue),
        m('.fl.w-100.fw4.f6', o.city + ', ' + o.state),
        m('.fl.tr.w-100.fw4.f5.mt2.dark-gray', o.rooms + ' rooms'),
        m('.fl.tr.w-100.fw4.f5.dark-gray', o.sqft+ ' sq. feet'),
      ]);
    })
   ]);
  }
};

module.exports = NewOpeningsWidget;
