const m = require('mithril');

let WidgetTitleBar = {
  view: (vnode) => {
    return m('.fl.w-100.bg-purple.h3.white', [
     m('.f3.fw6.lh-headline.pa3', vnode.attrs.content),
    ]);
   }
};

module.exports = WidgetTitleBar;
