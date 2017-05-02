const m = require("mithril")

// Shell
let Layout = require("./views/Layout")
let Main = require("./views/Main")
let Compare = require("./views/Compare")

// Routes
m.route(document.body, "/main", {
  // Main
  "/main": { render: () => { return m(Layout, m(Main))} },
  "/compare": { render: () => { return m(Layout, m(Compare))} },
})
