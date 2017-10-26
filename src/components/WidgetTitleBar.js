const m = require('mithril')

let WidgetTitleBar = {
  view: (vnode) => {
    return m('.pa2.w-100.bg-gradient-primary.flex-auto.flex.h3.white', [
      m('.f3.fw6', vnode.attrs.content),
    ])
  }
}

module.exports = WidgetTitleBar
