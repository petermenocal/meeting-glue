const m = require('mithril')
const Quill = require('quill')

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

    //set theme for ios vs desktop
    var theme
    if(iOS === true) {
      theme = 'snow'
    } else {
      theme = 'bubble'
    }

    var quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions,
        history: {
          delay: 2000,
          maxStack: 500,
          userOnly: true
        }
      },
      theme: theme
    });


  },

  view: () => {
    return m('div', {class: 'fl w-100 pa5-ns pa2'}, [
      m("h1.f2.fw4", "RFP"),
      m(".fl.w-70-ns.w-100", [
        m("div#editor.fl.w-100.vh-100", [
          m("img", {src: 'img/rfp-header-img/test.png' }),

          m('div.fl.w-100', " "),
          m('h1', "Request for Proposal"),

          m('div.fl.w-100', " "),
          m('p', "Please send completed regret or completed response forms to:"),

          m('div.fl.w-100', " "),
          m('p', "Contact: George Yin"),
          m('p', "Phone: 202-495-0828"),
          m('p', "Email: George@YinHospitality.com"),

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
      m(".fl.w-30-ns.w-100.tc", [
        m('div', [
          m('.bg-black.h3.w-100.white.flex.items-center.ph4', "Snippets"),
          m('div.fl.w-100.h5.bg-black.tl.white.ph4.pb3', {style: "overflow: scroll"}, [
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
          m('.bg-black-50.h3.w-100.white.flex.items-center.ph4', "Contacts"),
          //contact list
          m('div.fl.w-100.h5.bg-black-50.tl.white.ph4', {style: "overflow: scroll"}, [
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
            //person
            m('div.h3.bb.b--black.flex.items-center', [
              m('div.fl.w-10', [
                m('i.fa.fa-2x.fa-user')
              ]),
              m('div.fl.w-80', "John Smith")
            ]),
          ]),
          m('.bg-black.h3.w-100.white.flex.items-center.ph4', "Communication"),
          // inbox
          m('div.fl.w-100.h4.bg-black.tl.white.ph4', {style: "overflow: scroll"}, [
            m('div.h2', [
              m('div.fl.w-10.tr.pr2', [
                m('i.fa.fa.fa-inbox')
              ]),
              m('div.fl.w-90', "Inbox"),
            ]),
            m('div.h2', [
              m('div.fl.w-10.tr.pr2', [
                m('i.fa.fa.fa-paper-plane')
              ]),
              m('div.fl.w-90', "Sent"),
            ]),
            m('div.h2', [
              m('div.fl.w-10.tr.pr2', [
                m('i.fa.fa.fa-pencil')
              ]),
              m('div.fl.w-90', "Drafts"),
            ]),
            m('div.h2', [
              m('div.fl.w-10.tr.pr2', [
                m('i.fa.fa.fa-star')
              ]),
              m('div.fl.w-90', "Starred"),
            ]),
          ]),
          m('.bg-black-50.h3.w-100.white.flex.items-center.ph4', "Gallery"),
          // inbox
          m('div.w-100.h6.bg-black-50.tl.white.ph4', {style: "overflow: scroll"}, [
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
