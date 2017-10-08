const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');
let News = require('../models/News');

let NewsWidget = {
  view: () => {
    return m('.fl.w-100.bg-white.h-100.shadow-2', [
      m(WidgetTitleBar, {content: 'Industry news'}),
      News.list.map(function(article) {
       return m('.fl.w-100.pa4.bb.b--black-30', [
            m('.fl.f1.fw6.mr2', article.position),
            m('fw1.f6', article.title),
          ]);
      })
    ]);
  }
};
module.exports = NewsWidget;
