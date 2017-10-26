const m = require('mithril')
let WidgetTitleBar = require('./WidgetTitleBar')

let AboutWidget = {
  view: () => {
    return m('.fl.w-100.bg-white.h-100.shadow-2', {style: 'min-height: 754px'}, [
      m(WidgetTitleBar, {content: 'About us'}),
      m('.fl.w-100.pa4', [
        m('.f4.fw4.mb4','Welcome to RFP bliss'),
        m('.f2.fw4.mt4.green', 'Let your people know'),
        m('.f4.fw2.mb4.lh-copy', 'Our database of venue, convention & visitors bureau, and national sales representatives make it easy to add your favorite contacts and keep them in the loop as selection process progresses.'),
        m('.f2.fw4.green', 'Edit a REAL RFP'),
        m('.f4.fw2.mb4.lh-copy', 'Unlike other sites, we let you edit your RFP directly after pre-populating it with some data. You can edit your RFP just like a regular word processor with all the power of Meeting Glue at your fingertips.'),
        m('.f2.fw4.green', 'Quick and Simple'),
        m('.f4.fw2.mb4.lh-copy', 'Our RFP wizard is easy and intuitive. No need to answer all those miscellaneous questions if they don\'t pertain to your event. Widgets on the side bar make entering important sections of the RFP a breeze.'),
        m('.f2.fw4.green', 'Get responses in real-time'),
        m('.f4.fw2.mb4.lh-copy', 'Receive alerts as soon as a supplier answers your RFP. Reply right back in the planner dashboard to reduce those cumbersome emails and phone calls.'),
      ])
    ])
  }
}

module.exports = AboutWidget
