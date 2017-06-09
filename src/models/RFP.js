const m = require('mithril')

let RFP = {
 content: {
   eventName: 'Event name',
   eventDates: {start: '2017-07-01', end: '2017-07-02'},
   attendanceEst: 1,
   blocks: [
     { headline: "This is a content block", body: [ {content: 'The text that appears here will appear on the RFP'}, {content: 'Planners will be able to adjust pre-composed blocks of text to customize them per event.'}, {content: 'Additionally, planners will have capabilities to save these content block templates for future use after they have been customized'}, {content: 'The more a planner uses the system, the more the system will learn what types of content the planner prefers in the content block templates for RFPs.'},], order: 1 },
     { headline: "This is a content block", body: [ {content: 'The text that appears here will appear on the RFP'}, {content: 'Planners will be able to adjust pre-composed blocks of text to customize them per event.'}, {content: 'Additionally, planners will have capabilities to save these content block templates for future use after they have been customized'}, {content: 'The more a planner uses the system, the more the system will learn what types of content the planner prefers in the content block templates for RFPs.'},], order: 2 },
     { headline: "This is a content block", body: [ {content: 'The text that appears here will appear on the RFP'}, {content: 'Planners will be able to adjust pre-composed blocks of text to customize them per event.'}, {content: 'Additionally, planners will have capabilities to save these content block templates for future use after they have been customized'}, {content: 'The more a planner uses the system, the more the system will learn what types of content the planner prefers in the content block templates for RFPs.'},], order: 3 },
     { headline: "This is a content block", body: [ {content: 'The text that appears here will appear on the RFP'}, {content: 'Planners will be able to adjust pre-composed blocks of text to customize them per event.'}, {content: 'Additionally, planners will have capabilities to save these content block templates for future use after they have been customized'}, {content: 'The more a planner uses the system, the more the system will learn what types of content the planner prefers in the content block templates for RFPs.'},], order: 4 },
   ]
 },
 addRange: () => {},
 addRep: () => {},
 editAttendance: () => {},
 editDates: () => {},
 editName: () => {},
 editor: false,
 toggleEditor: (type) => {
   if(type === 'name') {

   }
   if(type === 'date') {

   }
   if(type === 'attendance') {

   }
   RFP.editor =  !RFP.editor
 },
 range: [],
 reps: [],
 send: () => {},
 track: [],
}

module.exports = RFP
