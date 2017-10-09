const m = require('mithril');
var TitleBar = require('./WidgetTitleBar');
var ReviewsContent = require('../models/ReviewsContent');

var Reviews = {
  view: ()=> {
    return m('.fl.w-100.mt4.shadow-2', [
      m(TitleBar, {content: "Reviews"}),
      ReviewsContent.list.map(function(r) {
        return m('.fl.bg-white.w-100.pa3.bb.b--black-10', [
          m('.f6.fw5', '"' + r.content + '"'),
          m('.f6.fw5.gray.mt2.mb2', r.venue + ' - ' + r.city + ',' + r.state),
          m('.f6.fw6.tr', 'by ' + r.uid),
          m('.f6.fw5.green.tr', r.month + ' ' + r.year),
          m('.f6.fw5.orange.tr', r.type + ': ' + r.attendees + ' attendees')
        ]);
      })
    ]);
  }
};

module.exports = Reviews;
