const m = require("mithril")

// Shell
let Layout = require("./views/Layout")
let Main = require("./views/Main")
let Compare = require("./views/Compare")
let ReqFP = require("./views/RFP")

// Routes
m.route(document.body, "/main", {
  // Main
  "/main": { render: () => { return m(Layout, m(Main))} },
  "/compare": { render: (vnode) => { return m(Layout, m(Compare))} },
  "/rfp": { render: () => { return m(Layout, m(ReqFP))} },
})
