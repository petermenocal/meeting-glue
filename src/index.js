const m = require('mithril')

// Views
let Layout = require('./views/Layout')
let Main = require('./views/Main')
let Compare = require('./views/Compare')
let ReqFP = require('./views/RFP')
let LVCVA = require('./views/LVCVA')
let SupplierResponse = require('./views/SupplierResponse')
let Hotel = require('./views/Hotel')
let Test = require('./views/Test')

// Routes
m.route(document.body, '/main', {
  '/main': { render: () => { return m(Layout, m(Main)) } },
  '/compare': { render: (vnode) => { return m(Layout, m(Compare)) } },
  '/rfp': { render: () => { return m(Layout, m(ReqFP)) } },
  '/cvb': { render: () => { return m(Layout, m(LVCVA)) } },
  '/supplierResponse': { render: ()=> { return m(Layout, m(SupplierResponse)) } },
  '/hotel': { render: ()=> { return m(Layout, m(Hotel)) } },
  '/test': { render: () => { return m(Layout, m(Test)) } }
})
