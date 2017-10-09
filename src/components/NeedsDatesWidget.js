const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');
let Dates = require('../models/Dates');

let NeedsDatesWidget = {
  view: () => {
    return m('.fl.mt3.w-100.bg-white.h-100.shadow-2', [
      m(WidgetTitleBar, {content: 'Needs Dates'}),
      m('.fl.w-100.pa2.tr.bg-green.white', 'Las Vegas'),
      Dates.list.map(function(d){
       return m('.fl.w-100.pa3.bb.b--black-30', {style: 'text-overflow: ellipsis; white-space: nowrap; overflow-x: hidden;'}, [
          m('fw2.f6.mb1.gray', d.stateAbbr + ' | ' + d.city + '  '),
          m('fw6.f6.mb1.b', d.venue),
        ]);
      })
    ]);
  }
};

module.exports = NeedsDatesWidget;
