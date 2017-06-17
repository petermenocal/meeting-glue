const m = require("mithril")
let Nav = require("../components/Nav")

module.exports = {
  view: (vnode) => {
    return m("div", {class: "fl w-100 h-100 vh-100 bg-near-white "}, [
      m("div", {class: "fl vh-100 h-100 w-100"}, [
        m(Nav),
        m("div", {class: "fl w-100 h-100 bg-near-white", style: "z-index: 11"}, vnode.children)
      ])
    ])
  }
}
