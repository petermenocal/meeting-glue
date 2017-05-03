const m = require("mithril")

module.exports = {
  view: (vnode) => {
    return m("div", {class: "fl w-100 bg-dark-gray h3 near-white ttu tracked flex items-center justify-center", style: "height: 90px; z-index: 22"}, vnode.children)
  }
}
