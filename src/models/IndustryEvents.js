const m = require('mithril');

var IndustryEvents = {
  list: [
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Meetings Today Live! California', parent: 'Meetings Today', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Hilton San Diego Bayfront - San Diego, CA'}},
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Meetings Today Live! California', parent: 'Meetings Today', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Hilton San Diego Bayfront - San Diego, CA'}},
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Meetings Today Live! California', parent: 'Meetings Today', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Hilton San Diego Bayfront - San Diego, CA'}},
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Meetings Today Live! California', parent: 'Meetings Today', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Hilton San Diego Bayfront - San Diego, CA'}},
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Meetings Today Live! California', parent: 'Meetings Today', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Hilton San Diego Bayfront - San Diego, CA'}},
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Meetings Today Live! California', parent: 'Meetings Today', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Hilton San Diego Bayfront - San Diego, CA'}},
    {name: 'Convening Leaders', parent: 'PCMA', type: 'Fee Based', market: 'All markets', date: {start: '1/7/2017', end: '1/10/2017', location: 'Nashville, TN'}},
    {name: 'Incentive Live', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Incentive', date: {start: '1/18/2017', end: '1/21/2017', location: 'Aria Resort - Las Vegas, NV'}},
    {name: 'SMU International', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Westin Grand Center - New York, NY'}},
    {name: 'Meetings Today Live! California', parent: 'Meetings Today', type: 'Hosted buyer', market: 'All markets', date: {start: '3/10/2017', end: '3/12/2017', location: 'Hilton San Diego Bayfront - San Diego, CA'}},
    {name: 'Independent Planner Education Conference (IPEC)', parent: 'Northstar Meetings Group', type: 'Hosted buyer', market: 'Independent 3rd Party', date: {start: '3/10/2017', end: '3/12/2017', location: 'The Broadmoor | Colorado Springs, Co'}},
  ]
};

module.exports = IndustryEvents;
