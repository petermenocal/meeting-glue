var m = require("mithril")

// Shell
var Layout = require("./views/Layout")
var Main = require("./views/Main")

// Routes

m.route(document.body, "/main", {
  // Main
  "/main": { render: () => { return m(Layout, m(Main))} }
})
