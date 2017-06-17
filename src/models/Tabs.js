const m = require('mithril')

let Tabs = {
  active: 1,
  current: {id: 1, title: 'Details', content: 'Fugiat comprehenderit fabulas quorum nescius non e mandaremus relinqueret. Cillum singulis illustriora ut nulla consequat ab velit dolor. Vidisse elit quae laborum quorum, se sunt ubi eram. Incididunt cillum appellat ad o quis summis legam proident.  Ubi legam distinguantur, ex dolore illustriora. Ingeniis voluptatibus si quamquam se ne voluptate si mentitum. Te dolore nostrud transferrem aut si ne firmissimum.'},
  swap: (tab) => {
    Tabs.active = tab.id
    Tabs.current = tab
  },
  isActive: (id) => {
    if(id === Tabs.active) {
      return true
    } else {
      return false
    }
  },
  list: [
    {id: 1, title: 'Info', content: 'Fugiat comprehenderit fabulas quorum nescius non e mandaremus relinqueret. Cillum singulis illustriora ut nulla consequat ab velit dolor. Vidisse elit quae laborum quorum, se sunt ubi eram. Incididunt cillum appellat ad o quis summis legam proident.  Ubi legam distinguantur, ex dolore illustriora. Ingeniis voluptatibus si quamquam se ne voluptate si mentitum. Te dolore nostrud transferrem aut si ne firmissimum.'},
    {id: 2, title: 'Promotions', content: 'Fugiat comprehenderit fabulas quorum nescius non e mandaremus relinqueret. Cillum singulis illustriora ut nulla consequat ab velit dolor. Vidisse elit quae laborum quorum, se sunt ubi eram. Incididunt cillum appellat ad o quis summis legam proident.  Ubi legam distinguantur, ex dolore illustriora. Ingeniis voluptatibus si quamquam se ne voluptate si mentitum. Te dolore nostrud transferrem aut si ne firmissimum.'},
    {id: 3, title: 'Sales staff', content: 'Fugiat comprehenderit fabulas quorum nescius non e mandaremus relinqueret. Cillum singulis illustriora ut nulla consequat ab velit dolor. Vidisse elit quae laborum quorum, se sunt ubi eram. Incididunt cillum appellat ad o quis summis legam proident.  Ubi legam distinguantur, ex dolore illustriora. Ingeniis voluptatibus si quamquam se ne voluptate si mentitum. Te dolore nostrud transferrem aut si ne firmissimum.'},
  ]
}

module.exports = Tabs
