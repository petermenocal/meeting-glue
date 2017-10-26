const m = require('mithril')
let Nav = require('../components/Nav')

module.exports = {
  view: (vnode) => {
    return m('div', {class: 'fl w-100 h-100 vh-100'}, [
      m('div', {class: 'fl vh-100 h-100 w-100'}, [
        m('.fl.w-100', [
          m('.center.tc', {style: 'max-width: 1200px'}, [
            m('img', {src: 'img/testad.jpeg'})
          ])
        ]),
        m(Nav),
        m('div', {class: 'fl w-100 h-100', style: 'z-index: 11'}, vnode.children)
      ])
    ])
  }
}
