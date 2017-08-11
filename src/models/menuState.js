const m = require("mithril")

let menuState = {
  snippets: false,
  contacts: false,
  communication: false,
  gallery: false,
  rfps: false,
  toggleSnippets: () => { menuState.snippets = !menuState.snippets },
  toggleMyRFPs: () => { menuState.rfps = !menuState.rfps },
  toggleContacts: () => { menuState.contacts = !menuState.contacts },
  toggleCommunication: () => { menuState.communication = !menuState.communication },
  toggleGallery: () => { menuState.gallery = !menuState.gallery }
}

module.exports = menuState
