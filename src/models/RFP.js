const m = require('mithril')
const _ = require('underscore')

let RFP = {
 current: {
   eventName: 'Event name',
   eventDates: {start: '2017-07-01', end: '2017-07-02'},
   attendanceEst: 1,
   blocks: [
     { id: '2563ec02-205c-5939-8604-35ebb658ead7', headline: 'This is a content block', body: [ {id: '1f83b919-8dbf-517c-8d79-e5b0038175f4', type: 'h3', content: 'The text that appears here will appear on the RFP'}, {id: '68b6a898-8efd-580e-8be9-9290e18f8bff', type: 'p', content: 'Planners will be able to adjust pre-composed blocks of text to customize them per event.'}, {id: 'e64c23ac-6957-5d7c-9c41-b00946562df5', type: 'p', content: 'Additionally, planners will have capabilities to save these content block templates for future use after they have been customized'}, {id: '10d25c3f-950b-524d-8886-d4bf8fd7a430', type: 'p', content: 'The more a planner uses the system, the more the system will learn what types of content the planner prefers in the content block templates for RFPs.'},], order: 1 },
     { id: '2563ec02-205c-5939-8604-35ebb658ead7', headline: 'Nescius a singulis.', body: [ {id: '7db084ae-5652-515e-8724-27dd9384c3fa', type: 'h3', content: 'Minim arbitror deserunt.'}, {id: 'd0065419-08e7-5222-8491-cb42ad14c80e', type: 'p', content: 'Iis consequat id cupidatat.'}, {id: '0a751f68-ffe7-53bf-a63e-eefddfa7893d', type: 'p', content: 'Te tempor enim export ullamco do multos transferrem commodo tamen mandaremus te de velit incurreret litteris, admodum noster export doctrina anim, laboris ad ullamco, ita cillum dolore dolore commodo hic fabulas aliqua velit a tamen, vidisse se quem singulis. Te fugiat offendit, in deserunt hic mandaremus. Quo nisi ubi fore. Dolore sed ne malis nostrud, si ingeniis coniunctione, enim fidelissimae cernantur dolore laborum, ea qui voluptatibus.'}, {id: 'db7ac14c-574f-5314-b17a-b8ed0c53c022', type: 'p', content: 'Ullamco duis mandaremus deserunt id do anim officia despicationes. Possumus anim anim hic amet, velit probant voluptatibus.'},], order: 2 },
     { id: '2563ec02-205c-5939-8604-35ebb658ead7', headline: 'Appellat fidelissimae se offendit.', body: [ {id: '4e7cf5b7-b526-5bf1-a175-8258645b3b46', type: 'h3', content: 'E magna singulis incididunt.'}, {type: 'p', content: 'Duis offendit si quem fore, o illum quem et constias. An est tamen sunt quid, irure sed iis quid incurreret.'}, {id: 'f885adf1-00ab-5205-ba4a-66d446161578', type: 'p', content: 'AIrure id excepteur ea duis quamquam litteris.'}, {type: 'p', content: 'A fore tempor do ullamco, sunt ea proident de irure.'},], order: 3 },
     { id: '2563ec02-205c-5939-8604-35ebb658ead7', headline: 'Doctrina labore ingeniis.', body: [ {id: '2b52c1de-0a9f-5c8d-9ed6-20f8f2be7796', type: 'h3', content: 'Ullamco eram quibusdam nescius.'}, {id: 'rab5536ad-e3db-5ea5-b2e6-1871be294882', type: 'p', content: 'Planners will be able to adjust pre-composed blocks of text to customize them per event.'}, {id: '0c01c196-c9a1-58dd-a2f3-86d64ee6b672', type: 'p', content: 'Additionally, planners will have capabilities to save these content block templates for future use after they have been customized'}, {id: 'c8f226fa-ccb4-5edd-ba45-4c59115b57ec', type: 'p', content: 'The more a planner uses the system, the more the system will learn what types of content the planner prefers in the content block templates for RFPs.'},], order: 4 },
   ]
 },
 targetBlock: {body: []},
 addRange: () => {},
 addRep: () => {},
 editAttendance: () => {},
 editDates: () => {},
 editName: () => {},
 editBlock: (b) => {
   RFP.targetBlock = _.find(RFP.current.blocks, (a) => { return a.id === b.id })
   console.log(RFP.targetBlock)
 },
 toggleBlockEditor: (b) => {
   RFP.blockEditor = !RFP.blockEditor
   RFP.editBlock(b)
 },
 blockEditor: false,
 chipEditor: false,
 toggleChipEditor: (type) => {
   if(type === 'name') {

   }
   if(type === 'date') {

   }
   if(type === 'attendance') {

   }
   RFP.chipEditor =  !RFP.chipEditor
 },
 range: [],
 reps: [],
 send: () => {},
 track: [],
}

module.exports = RFP
