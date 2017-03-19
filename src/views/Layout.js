var m = require("mithril")

module.exports = {
  view: (vnode) => {
    return m("div", {class: "fl w-100 h-100 vh-100"}, vnode.children)
  }
}
