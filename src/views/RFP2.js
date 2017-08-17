const m = require('mithril')
const Quill = require('quill')
const Awesomplete = require('awesomplete')
const flatpickr = require('flatpickr')
var quill;

const DayPlanner = require('../components/DayPlanner')

let menuState = require('../models/menuState')
let insertSnippet = require('../models/insertSnippet')
let RFPState = require('../models/RFPState')
let preflightState = require('../models/preflightState')

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],

  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

module.exports = {
  oncreate: () => {
    var config = {
        timePicker: {
          enableTime: true,
          noCalendar: true,
          enableSeconds: false, // disabled by default
          time_24hr: false, // AM/PM time picker is used by default
          // default format
          dateFormat: "H:i",
          // initial values for time. don't use these to preload a date
          defaultHour: 12,
          defaultMinute: 0
          // Preload time with defaultDate instead:
          // defaultDate: "3:30"
        }
    }

    flatpickr("#checkin", config);
    flatpickr("#checkout", config);
    var container = document.querySelector('#editor')
    var quill = new Quill(container)

    //awesomeplete
    var input = document.getElementById('recipients')
    new Awesomplete('input[data-multiple]', {
    	list: ["MGM", "Caesar's", "Las Vegas", "Colorado", "Nevada", "Boulder", "GSO"],
      filter: function(text, input) {
    		return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
    	},

    	item: function(text, input) {
    		return Awesomplete.ITEM(text, input.match(/[^,]*$/)[0]);
    	},

    	replace: function(text) {
    		var before = this.input.value.match(/^.+,\s*|/)[0];
    		this.input.value = before + text + ", ";
    	}
    });
  },
  view: () => {
    return m('div', {class: 'mw9 center pa5-ns pa2 bg-near-white'}, [
      m(".fl.w-60-ns.w-100.ba.b--black-10.pa4.bg-white.mr6-ns.shadow-4x", {class: RFPState.step == 3 ? "db" : "dn"}, [ m("h1", "RFP Successfully Sent"),
        m(".div", [
          m('p', "Please visit your RFP Status page for response from suppliers" )
        ]),
      ]),
      m(".fl.w-100.ba.b--black-10.pa4.bg-white.mr6-ns.shadow-4", {class: RFPState.step == 1 ? "db" : "dn"}, [
        m("span.fl.w-100.f1.fw3.lh-headline.db.purple", "Tell us what you need."),
        m("span.fl.w-100.f5.fw4.measure.lh-subheadline.mt1.db.gray", "Let us know a few particulars about your event and we'll set automatically setup your RFP with some default data."),
        m('.fl.w-100.usn', [
          m(".flex.flex-column.fl.w-50.pr4", [
            m('.fl.w-100.br4.shadow-2.bg-purple.mt4.pa3', {class: preflightState.specific ? "bg-purple" : "bg-light-purple" }, [
              m('.f4.fw4.white.dim.pointer', {onclick: preflightState.toggleSpecific }, "I have specific dates for my program."),
              m('.fl.w-50-ns.w-100.ph2-ns', {class: preflightState.specific ? "db" : "dn" }, [
                m('label.fl.white.w-100.b.mt3', 'Start date'),
                m('input.fl.ba.b--black-20.br2.w-100.input#checkin'),
              ]),
              m('.fl.w-50-ns.w-100.ph2-ns', {class: preflightState.specific ? "db" : "dn" }, [
                m('label.fl.white.w-100.b.mt3', 'End date'),
                m('input.fl.ba.b--black-20.br2.w-100.input#checkout'),
              ])
            ]),
            m('.fl.w-100.br4.shadow-2.bg-purple.mt4.pa3', {class: preflightState.range ? "bg-purple" : "bg-light-purple" }, [
              m('.dim.pointer', [
                m('.f4.fw4.white.dim.pointer', {onclick: preflightState.toggleRange }, "I have a date range for my program."),
                m('.f5.fw4.lh-subheadline.white-80.dim.pointer', {onclick: preflightState.toggleRange }, "(Works with sleeping rooms and/or meeting space)"),
              ]),
              m('.fl.w-50-ns.w-100.ph2-ns', {class: preflightState.range ? "db" : "dn" }, [
                m('label.fl.white.w-100.b.mt3', 'Start date'),
                m('input.fl.ba.b--black-20.br2.w-100.input#checkin'),
              ]),
              m('.fl.w-50-ns.w-100.ph2-ns', {class: preflightState.range ? "db" : "dn" }, [
                m('label.fl.white.w-100.b.mt3', 'End date'),
                m('input.fl.ba.b--black-20.br2.w-100.input#checkout'),
              ])

            ]),
            m('.fl.w-100.br4.shadow-2.bg-purple.mt4.pa3', {class: preflightState.pattern ? "bg-purple" : "bg-light-purple" }, [
              m('.dim.pointer',[
                m('.f4.fw4.white.dim.pointer', {onclick: preflightState.togglePattern }, "I have a preferred pattern with a date range."),
                m('.f5.fw4.lh-subheadline.white-80', {onclick: preflightState.togglePattern }, "(Works with sleeping rooms and/or meeting space)"),
              ]),
              m('.fl.w-100.mt4.mb3', {class: preflightState.pattern ? "db" : "dn" }, [
                m('.f4.white-50', "Enter preferred pattern:"),
                m('label.white.mr2.ml2', 'SUN'),
                m('input[type="checkbox"][name="day"][value="Sunday"]'),
                m('label.white.mr2.ml4', 'MON'),
                m('input[type="checkbox"][name="day"][value="Sunday"]'),
                m('label.white.mr2.ml4', 'TUES'),
                m('input[type="checkbox"][name="day"][value="Sunday"]'),
                m('label.white.mr2.ml4', 'WED'),
                m('input[type="checkbox"][name="day"][value="Sunday"]'),
                m('label.white.mr2.ml4', 'THURS'),
                m('input[type="checkbox"][name="day"][value="Sunday"]'),
                m('label.white.mr2.ml4', 'FRI'),
                m('input[type="checkbox"][name="day"][value="Sunday"]'),
                m('label.white.mr2.ml4', 'SAT'),
                m('input[type="checkbox"][name="day"][value="Sunday"]'),
              ]),
              m('.fl.w-50-ns.w-100.ph2-ns', {class: preflightState.pattern ? "db" : "dn" }, [
                m('label.fl.white.w-100.b.mt3', 'Start date'),
                m('input.fl.ba.b--black-20.br2.w-100.input#checkin'),
              ]),
              m('.fl.w-50-ns.w-100.ph2-ns', {class: preflightState.pattern ? "db" : "dn" }, [
                m('label.fl.white.w-100.b.mt3', 'End date'),
                m('input.fl.ba.b--black-20.br2.w-100.input#checkout'),
              ])

            ]),
            m('.fl.w-100.br4.shadow-2.bg-purple.mt4.pa3', {class: preflightState.directInput ? "bg-purple" : "bg-light-purple" }, [
              m('.f4.fw4.white.dim.pointer', {onclick: preflightState.toggleDirectInput }, "I would like to type out my date needs."),
              m('textarea.fl.w-100.br2.ba.b--purple.mt2', {class: preflightState.directInput ? "db" : "dn"})
            ]),
          ]),
          m('.fl.w-50.pv4', [
            m('.fl.w-100.br4.white.mt0.mb3.pa3', {class: preflightState.roomsAndSpace ? "bg-dark-red s1" : "bg-light-red" }, [
              m('div.fl.w-100', {onclick: preflightState.selectRoomsAndSpace},  [
                m('.fl.fw4', "Sleeping rooms and meeting space")
              ]),
            ]),
            m('.fl.w-100.br4.white.mt0.mb3.pa3', {class: preflightState.sleepingRoomsOnly ? "bg-dark-red s1" : "bg-light-red" }, [
              m('div.fl.w-100', {onclick: preflightState.selectSleepingRoomsOnly},  [
                m('.fl.fw4', "Sleeping rooms only")
              ]),
            ]),
            m('.fl.w-100.br4.white.mt0.pa3', {class: preflightState.meetingSpaceOnly ? "bg-dark-red s1" : "bg-light-red" }, [
              m('div.fl.w-100', {onclick: preflightState.selectMeetingSpaceOnly},  [
                m('.fl.fw4', "Meeting space only")
              ]),
            ]),
          ]),


          m(".flex.flex-column.fl.w-50.pa4.shadow-2.bg-blue.near-white.br4", [
            m('span.f3.fw1.lh-headline', "Start from a template"),
            m('span.f6.lh-copy.fw6.mt1.measure', "You can choose a pre-configured template of your own or one of our sugggested templates."),
            m('.fl.w-100.mt4', [
              m('label.fl.tr.mr2', "Use one of my templates"),
              m('input[type="checkbox"]', {onclick: RFPState.toggleTemplates}),
              m('select.select.ba.b--black-20.fl.w-100.mt3', {class: RFPState.showTemplates ? "db" : "dn" }, [
                m('option', "Default RFP - March 2017"),
                m('option', "Default RFP - April 2017"),
                m('option', "Default RFP - May 2017"),
                m('option', "Default RFP - June 2017"),
                m('option', "Default RFP - July 2017"),
              ]),
              m('a.link.pa2.bg-green.br4.mt4.dim.pointer.shadow-1.near-white.fw5.ttu.mw4.tc.fr.dib', {onclick: RFPState.changeStep}, 'Next step')
            ])
          ]),
        ]),
      ]),
      m(".fl.w-70-ns.w-100", {class: RFPState.step == 2 ? "db" : "dn"}, [
        m('a.link.pa2.bg-green.br4.mt4.dim.pointer.shadow-1.near-white.fw5.ttu.mw4.tc.dib.fixed.bottom-1.left-1', {onclick: RFPState.finalStep, style: 'z-index: 99'}, [
          m('i.fa.fa-paper-plane.mr2'),
          m('span', 'Send RFP')
        ]),
        m("div#editor.fl.w-100.vh-100.shadow-4.ba.b--black-10.pa4.bg-white", [
          m("img", {src: 'img/rfp-header-img/test.png' }),

          m('div.fl.w-100', " "),
          m('h1', "Request for Proposal"),

          m('div.fl.w-100', " "),
          m('p', "Please send completed regret or completed response forms to:"),

          m('div.fl.w-100', " "),


          m('div.fl.w-100', " "),
          m('p', "Proposal deadline: August 15, 2017"),
          m('p', "Decision date: August 2017"),

          m('div.fl.w-100', " "),
          m('p', "Group profile: Geeky Pixel"),

          m('div.fl.w-100', " "),
          m('p', "Geeky Pixel is a boutique website design and development company based in Las Vegas."),

          m('div.fl.w-100', " "),
          m('p', "Program: 2019 Annual Retreat"),


        ])
      ]),
      m(".fl.w-30-ns.w-100.tc", {class: RFPState.step == 2 ? "db" : "dn"}, [
        m('div', [
          m('.bg-black.h3.w-100.white.flex.items-center.ph4.pointer', {onclick: menuState.toggleSnippets}, [
            m('span', {class: menuState.snippets ? "dn" : "db"}, [
              m('i.fa.fa-caret-right'),
            ]),
            m('span', {class: menuState.snippets ? "db" : "dn"}, [
              m('i.fa.fa-caret-down'),
            ]),
            m('span.ml2', "Snippets"),
          ]),
          m('div.fl.w-100.bg-black.tl.white.ph4.pb3', {class: menuState.snippets ? "db" : "dn", style: "overflow: scroll; -webkit-overflow-scrolling: touch;"}, [
            m('div.bb.b--black.flex.items-center.mb3', [
              m('div.mr4.dim.pointer', [
                m('i.fa.fa-plus'),
                m('span.ml1', "New from selected text")
              ]),
              m('div.mr4.dim.pointer', [
                m('i.fa.fa-edit'),
                m('span.ml1', "Edit")
              ])
            ]),
            //snippet
            m('div.bb.b--black.flex.items-center', [
              m('div.fl.w-100', {onclick: insertSnippet.snippet1}, [
                m('h5', "Send complete to"),
                m('.fl.w-100.ba.br2.pa2',  [
                  m('p.small.f6', 'Contact information (George Yin)')
                ])
              ])
            ]),

            //snippet
            m('div.bb.b--black.flex.items-center.mt4', [
              m('div.fl.w-100', [
                m('h5', "Proposal deadline"),
                m('.fl.w-100.ba.br2.pa2', [
                  m('p.small.f6', 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum')
                ])
              ])
            ]),

            //snippet
            m('div.bb.b--black.flex.items-center.mt4', [
              m('div.fl.w-100', [
                m('h5', "Send complete to"),
                m('.fl.w-100.ba.br2.pa2', [
                  m('p.small.f6', 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum')
                ])
              ])
            ]),

            //snippet
            m('div.bb.b--black.flex.items-center.mt4', [
              m('div.fl.w-100', [
                m('h5', "Send complete to"),
                m('.fl.w-100.ba.br2.pa2', [
                  m('p.small.f6', 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum')
                ])
              ])
            ]),

            //snippet
            m('div.bb.b--black.flex.items-center.mt4', [
              m('div.fl.w-100', [
                m('h5', "Send complete to"),
                m('.fl.w-100.ba.br2.pa2', [
                  m('p.small.f6', 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum')
                ])
              ])
            ]),
          ]),

          //end snipe]s



          m('.bg-dark-gray.h3.w-100.white.flex.items-center.ph4.pointer', {onclick: menuState.toggleRecipients}, [
            m('span', {class: menuState.recipients ? "dn" : "db"}, [
              m('i.fa.fa-caret-right'),
            ]),
            m('span', {class: menuState.recipients ? "db" : "dn"}, [
              m('i.fa.fa-caret-down'),
            ]),
            m('span.ml2', "Recipients"),
          ]),
          m('div.fl.w-100.bg-dark-gray.tl.white.ph4.pb3', {class: menuState.recipients ? "db" : "dn", style: "overflow: scroll; -webkit-overflow-scrolling: touch;"}, [
            m('label.fl.near-white.w-100.b', 'RFP Recipients'),
            m('input.fl.ba.b--black-20.br2.w-100.input#recipients[data-multiple]', {autocomplete: "off"}),
          ]),




          m('.bg-black.h3.w-100.white.flex.items-center.ph4', {onclick: menuState.toggleGallery}, [
            m('span', {class: menuState.gallery ? "dn" : "db"}, [
              m('i.fa.fa-caret-right'),
            ]),
            m('span', {class: menuState.gallery ? "db" : "dn"}, [
              m('i.fa.fa-caret-down'),
            ]),
            m('span.ml2', "Gallery"),
          ]),
          // inbox
          m('div.w-100.h6.bg-black.tl.white.ph4', {class:menuState.gallery?"db":"dn",style: "overflow: scroll; -webkit-overflow-scrolling: touch;"}, [

            m('div.flex.items-center.mb3', [
              m('div.mr4.dim.pointer', [
                m('i.fa.fa-edit'),
                m('span.ml1', {onclick: RFPState.toggleGalleryEditor}, "Edit")
              ])
            ]),

            m('.fixed.top-0.right-0.bottom-0.left-0.bg-black.pa2.w-100.h-100', {class: RFPState.showGalleryEditor ? "fixed" : "dn"}, [
              m('.f1.fw2', 'Gallery Editor'),
              m('.fixed.top-1.right-1.red.i.fa.fa-times.fa-2x', {onclick: RFPState.toggleGallery}),
              m('i.fa.fa-plus.mr2'),
              m('span',  { onclick: RFPState.imageUpload }, "Upload image")
            ]),

            //person
            m('div.flex.flex-row.pa2.flex-wrap', [

              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),

              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),

              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),
            ]),
          ]),

          //Day Planner
          m('.bg-dark-gray.h3.w-100.white.flex.items-center.ph4', {onclick: RFPState.toggleDayPlanner}, [
            m('span', [
              m('i.fa.fa-magic'),
            ]),
            m('span.ml2', "Day planner"),
          ]),
          //edit day planner modal
          m('.fixed.top-0.right-0.bottom-0.left-0.bg-black.white.pa2.w-100.h-100', {class: RFPState.showDayPlanner ? "fixed" : "dn"}, [
            m('.tl', [
              m('.f1.fw2', 'Day Planner'),
              m('.fixed.top-1.right-1.red.i.fa.fa-times.fa-2x', {onclick: RFPState.toggleDayPlanner}, )
            ]),
            m(DayPlanner)
          ]),

          // inbox
          m('div.w-100.h6.bg-black-50.tl.white.ph4', {class:menuState.dayPlanner?"db":"dn",style: "overflow: scroll; -webkit-overflow-scrolling: touch;"}, [

            m('div.flex.items-center.mb3', [
              m('div.mr4.dim.pointer', [
                m('i.fa.fa-edit'),
                m('span.ml1', {onclick: RFPState.toggleGalleryEditor}, "Edit")
              ])
            ]),
            //edit gallery modal
            m('.fixed.top-0.right-0.bottom-0.left-0.bg-gray.pa2.w-100.h-100', {class: RFPState.showGalleryEditor ? "fixed" : "dn"}, [
              m('.f1.fw2', 'Gallery Editor'),
              m('i.fa.fa-plus.mr2'),
              m('span',  { onclick: RFPState.imageUpload }, "Upload image")
            ]),

            //person
            m('div.flex.flex-row.pa2.flex-wrap', [

              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),

              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),

              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),


              m('div.fl.w-third.pa3.tc', [
                m('i.fa.fa-2x.fa-file-image-o'),
                m('.fw4.mt1.f6', 'logo.png')
              ]),
            ]),
          ])




        ])
      ]),
    ])
  }
}
