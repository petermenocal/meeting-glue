const m = require('mithril')

let TabsBoulder = {
  active: 1,
  swap: (tab) => {
    TabsBoulder.active = tab 
  },
  isActive: (id) => {
    if(id === TabsBoulder.active) {
      return true
    } else {
      return false
    }
  },
  list: [
    {id: 1, title: 'Promotions', content:
      'Event Grant program' + '\n' + ' [link]' + '\n\n' +
      'Hot Deals and Cash Incentives' + '\n' + ' [link]' + '\n\n' +
      'Hot Events' + '\n' + ' [link]' + '\n\n'
    },
    {id: 2, title: 'Sales staff', content:
      'Andrew Heidt' + '\n' + 'Director of Group Sales and Marketing' + '\n' + '303-938-2071' + '  Message' + '\n\n' +
      'Angela Wirkler' + '\n' + 'Group Sales Manager' + '\n' + '303-938-2088' + '  Message' + '\n\n' +
      'Angela Wirth' + '\n' + 'Group Sales Coordinator' + '\n' + '303-938-2089' + '  Message' + '\n\n'
    }
  ],

}

module.exports = TabsBoulder
