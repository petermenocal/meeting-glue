var m = require("mithril")

var Nav = {
    items: [
      {name: "Home", location: "/main"},
      {name: "Compare", location: "/compare"},
    ]
}

module.exports = {
  view: () => {
    return m("nav", {class: "bg-blue fl w-100 flex items-center pa1 h3", style: "z-index: 9999"}, [
      m("div#branding", {class: "w-20 ph3 pointer"}, [
        m("img", {alt: "Meeting Glue logo: Black serif uppercase text with green pineapple leaves over the 'U'", src: "img/logo/logo-meeting-glue.png"})
      ]),
      m("div#nav-items", {class: "w-60"}, [
        m("ul", {class: "avenir list black"}, Nav.items.map(function(navItem) {
          return m("li", {class: "dib fl mr4 f4 link dim pointer"}, [
            m("a", {class: "link white dim pointer", oncreate: m.route.link, href: navItem.location}, navItem.name)
          ])
        }))
      ]),
      m("div#social-and-search", {class: "w-20 pb2"}, [
        m("ul", {class: "list near-black"}, [
          m("li", {class: "dib fl mr4 f3 black link dim pointer"}, [
            m("i", {class: "fa fa-twitter"}),
          ]),
          m("li", {class: "dib fl mr4 f3 dark-gray link dim pointer"}, [
            m("i", {class: "fa fa-facebook"}),
          ]),
          m("li", {class: "dib fl mr4 f3 dark-gray link dim pointer"}, [
            m("i", {class: "fa fa-linkedin"}),
          ]),
          m("li", {class: "dib fl mr4 f3 dark-gray link dim pointer"}, [
            m("i", {class: "fa fa-search"}),
          ])
        ])
      ])
    ])
  }
}
