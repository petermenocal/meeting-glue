const m = require('mithril')
const Quill = require('quill')

let insertSnippet = {
  cursorPosition: 0,
  snippet1: () => {
    var container = document.querySelector('#editor')
    var quill = new Quill(container)
    quill.insertText(insertSnippet.cursorPosition, 'Contact: George Yin \nPhone: 202-495-0828 \nEmail: George@YinHospitality.com',)

  }
}

module.exports = insertSnippet
