const m = require('mithril')

// Views
let Layout           = require('./views/Layout')
let Main             = require('./views/Main')
let Compare          = require('./views/Compare')
let ReqFP            = require('./views/RFP')
let RFP2             = require('./views/RFP2')
let LVCVA            = require('./views/LVCVA')
let cvbBoulder       = require('./views/cvbBoulder')
let SupplierResponse = require('./views/SupplierResponse')
let Hotel            = require('./views/Hotel')
let Test             = require('./views/Test')
let Test2            = require('./views/Test2')
let Inbox            = require('./views/Inbox')
let Profile          = require('./views/Profile')

// Routes
m.route(document.body, '/main', {
  '/main':                 { render: () => { return m(Layout, m(Main)) } },
  '/compare':              { render: (vnode) => { return m(Layout, m(Compare)) } },
  '/rfp':                  { render: () => { return m(Layout, m(ReqFP)) } },
  '/rfp2':                 { render: () => { return m(Layout, m(RFP2)) } },
  '/cvb/lasvegas/lvcva':   { render: () => { return m(Layout, m(LVCVA)) } },
  '/cvb/colorado/boulder': { render: () => { return m(Layout, m(cvbBoulder)) } },
  '/supplierResponse':     { render: ()=> { return m(Layout, m(SupplierResponse)) } },
  '/hotel':                { render: ()=> { return m(Layout, m(Hotel)) } },
  '/test':                 { render: () => { return m(Layout, m(Test)) } },
  '/inbox':                { render: () => { return m(Layout, m(Inbox)) } },
  '/test2':                { render: () => { return m(Layout, m(Test2)) } },
  '/profile':              { render: () => { return m(Layout, m(Profile)) } },
})
