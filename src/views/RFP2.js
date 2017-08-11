const m = require('mithril')
const Quill = require('quill')

let menuState = require('../models/menuState')
let insertSnippet = require('../models/insertSnippet')
let RFPState = require('../models/RFPState')

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

var quill;


const flatpickr = require('flatpickr')

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


module.exports = {
  oncreate: () => {
    flatpickr("#checkin", config);
    flatpickr("#checkout", config);
    var container = document.querySelector('#editor')
    var quill = new Quill(container)
  },
  view: () => {
    return m('div', {class: 'fl w-100 pa5-ns pa2 bg-near-white'}, [
      m(".fl.w-60-ns.w-100.ba.b--black-10.pa4.bg-white.mr6-ns.shadow-4", {class: RFPState.step == 3 ? "db" : "dn"}, [ m("h1", "RFP Successfully Sent"),
        m(".div", [
          m('p', "Please visit your RFP Status page for response from suppliers" )
        ]),
      ]),
      m(".fl.w-60-ns.w-100.ba.b--black-10.pa4.bg-white.mr6-ns.shadow-4", {class: RFPState.step == 1 ? "db" : "dn"}, [ m("h1", "Event details"),
        m(".flex.flex-column.fl.w-50.pa4-ns", [
          m('label.fl.w-100.b', 'Recipients'),
          m('input.fl.w-100.input.ma2'),
          m('label.fl.w-100.b.mt3', 'Check-in'),
          m('input.fl.w-100.input.ma2#checkin'),
          m('label.fl.w-100.b.mt3', 'Check-out'),
          m('input.fl.w-100.input.ma2#checkout'),
          m('label.fl.w-100.b.mt3', 'Total rooms'),
          m('input.fl.w-100.input.ma2'),
        ]),
        m(".flex.flex-column.fl.w-50.ph4.pb5.shadow-2.bg-light-purple.near-white.br4", [
          m('h3.f1.fw1.lh-headline.mb2', "Working smart isn't hard."),
          m('span.f4.fw6.mt0', "Let us know a few particulars about your event and we'll set automatically setup your RFP with some default data.")
        ]),
        m('a.link.pa2.bg-green.br4.mt4.dim.pointer.shadow-1.near-white.fw5.ttu.mw4.tc.fr.dib', {onclick: RFPState.changeStep}, 'Next step')
      ]),
      m(".ba.b--black-10.pa4.bg-white.fl.w-70-ns.w-100.ba.b--black-10", {class: RFPState.step == 2 ? "db" : "dn"}, [
        m('a.link.pa2.bg-green.br4.mt4.dim.pointer.shadow-1.near-white.fw5.ttu.mw4.tc.fr.dib', {onclick: RFPState.finalStep}, 'Send RFP'),
        m("div#editor.fl.w-100.vh-100", [
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
        m('div.shadow-3', [
          m('.bg-black.h3.w-100.white.flex.items-center.ph4', {onclick: menuState.toggleSnippets}, "Snippets"),
          m('div.fl.w-100.bg-black.tl.white.ph4.pb3', {class: menuState.snippets ? "db" : "dn", style: "overflow: scroll; -webkit-overflow-scrolling: touch;"}, [
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


          m('.bg-black.h3.w-100.white.flex.items-center.ph4', {onclick: menuState.toggleGallery}, "Gallery"),
          // inbox
          m('div.w-100.h6.bg-black-50.tl.white.ph4', {class:menuState.gallery?"db":"dn",style: "overflow: scroll; -webkit-overflow-scrolling: touch;"}, [
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
