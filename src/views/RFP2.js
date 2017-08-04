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
        m('div', 'option')
      ]),
    ])
  }
}
