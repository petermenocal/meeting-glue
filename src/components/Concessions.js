const m = require('mithril')

var Concessions = {

}

module.exports = { 
  view: () => {
    return m(".pa4", [
      m('.overflow-auto', [
	m('table.f6.mw7.bg-purple.center', {style: 'min-width: 480px'}, [
	  //heading
//	  m('thead', [
//	    m('tr', [
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	    ])
//	  ]),
	  //table
	  m('tbody.lh-copy', [
	    
	    m('thead', [
	      m('tr', [
		m('th', 'Sleeping Rooms')
	      ]) 
	    ]),

	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Rooms Tax')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Resort Fee')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=$/day]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Cut-Off Date')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=# of days]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Wireless Internet')
	      ]), 
	      m('td.pa3.parent', [
		m('input')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary Room')
	      ]), 
	      m('td.pa3.parent', [
		m('input')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary Upgrade')
	      ]), 
	      m('td.pa3.parent', [
		m('input')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Comp Ratio')
	      ]), 
	      m('td.pa3.parent', [
		m('input')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Group Rate Available (Pre)')
	      ]), 
	      m('td.pa3.parent', [
		m('input')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Group Rate Available (Post)')
	      ]), 
	      m('td.pa3.parent', [
		m('input')
	      ]),
	    ]),



	  ])
	]),


	// table2
	m('table.mt3.f6.mw7.bg-green.center', {style: 'min-width: 480px'}, [
	  //heading
//	  m('thead', [
//	    m('tr', [
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	    ])
//	  ]),
	  //table
	  m('tbody.lh-copy', [
	    
	    m('thead', [
	      m('tr', [
		m('th', 'Meeting Space')
	      ]) 
	    ]),

	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Adequate meeting space based on RFP?')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary meeting room rental')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=$/day]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary wifi in meeting space')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=# of days]')
	      ]),
	    ]),
	  ])
	]),

	// table2
	m('table.mt3.f6.mw7.bg-purple.center',  {style: 'min-width: 480px'}, [
	  //heading
//	  m('thead', [
//	    m('tr', [
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	    ])
//	  ]),
	  //table
	  m('tbody.lh-copy', [
	    
	    m('thead', [
	      m('tr', [
		m('th', 'Audio Visual')
	      ]) 
	    ]),

	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Adequate meeting space based on RFP?')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),

	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Adequate meeting space based on RFP?')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary meeting room rental')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=$/day]')
	      ]),
	    ]),

	  ])
	]),


	// table2
	m('table.mt3.f6.mw7.bg-green.center',  {style: 'min-width: 480px'}, [
	  //heading
//	  m('thead', [
//	    m('tr', [
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	    ])
//	  ]),
	  //table
	  m('tbody.lh-copy', [
	    
	    m('thead', [
	      m('tr', [
		m('th', 'Food & Beverage')
	      ]) 
	    ]),

	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Food & Beverage Minimum')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),


	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Food & Beverage Tax')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=$/day]')
	      ]),
	    ]),
	    
	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Banquet Menu Discount')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=$/day]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Ability to create custom menus')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=# of days]')
	      ]),
	    ]),
	    
	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary breakfast included in rate')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=# of days]')
	      ]),
	    ]),

	  ])
	]),
	
	
	// table2
	m('table.mt3.f6.mw7.bg-purple.center',  {style: 'min-width: 480px'}, [
	  //heading
//	  m('thead', [
//	    m('tr', [
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	    ])
//	  ]),
	  //table
	  m('tbody.lh-copy', [
	    
	    m('thead', [
	      m('tr', [
		m('th', 'General')
	      ]) 
	    ]),

	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Parking Costs')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),


	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', '# of F&B Outlets on Property')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),


	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', '# of Elevators Near Meeting Space')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),


	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Hotel Rating')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Renovations')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=$/day]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Nearest Train/Subway Station')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=# of days]')
	      ]),
	    ]),
	  ])
	]),	
	
	
	// table2
	m('table.mt3.f6.mw7.bg-green.center',  {style: 'min-width: 480px'}, [
	  //heading
//	  m('thead', [
//	    m('tr', [
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	      m('th.fw6.tl.pa3.bg-purple.white', ' '),
//	    ])
//	  ]),
	  //table
	  m('tbody.lh-copy', [
	    
	    m('thead', [
	      m('tr', [
		m('th', 'Concessions')
	      ]) 
	    ]),

	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary Parking')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),
	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Discounted Parking')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),
	    m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary Box Handling')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=%]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Complimentary Amenity')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=$/day]')
	      ]),
	    ]),

	     m('tr', [
	      //rooms tax
	      m('td.pa3.parent', [
		m('p', 'Meeting Planner Points')
	      ]), 
	      m('td.pa3.parent', [
		m('input[placeholder=# of days]')
	      ]),
	    ]),
	  ])
	]),
      ])
    ])
  }
}
