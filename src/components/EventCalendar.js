const m = require('mithril');
var TitleBar = require('./WidgetTitleBar');

var EventCalendar = {
  view: ()=> { 
    return m('.fl.w-100.mt4', [
      m(TitleBar, {content: "Event Calendar"})
    ]);
  }
};

module.exports = EventCalendar;
