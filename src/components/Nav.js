var m = require("mithril")

var Nav = {
    items: [
      {name: "Home", location: "/main"},
      {name: "Compare", location: "/compare"},
      {name: "LVCVA", location: "/cvb"},
      {name: "Hotel", location: "/hotel"},
    ]
}

module.exports = {
  view: () => {
    return  m("nav", {class:"fl w-100", style: "background: url('../img/bg-nav_bar.png'); background-size: cover;"}, [
          m("div", {class: "flex items-center", style: "height: 70px"}, [
            m("div#branding", {class: "w-20 ph3 pointer"}, [
              m("img", {alt: "Meeting Glue logo: Black serif uppercase text with green pineapple leaves over the 'U'", src: "img/logo/logo-meeting-glue.png", height: '64px'})
            ]),
            m("div#nav-items", {class: "w-50 flex items-center"}, [
              m("ul", {class: "avenir list black"}, Nav.items.map(function(navItem) {
                return m("li", {class: "dib fl mr4 f6 ttu tracked link dim pointer"}, [
                  // m("a", {class: "link white dim pointer", oncreate: m.route.link, href: navItem.location}, navItem.name)
                  m("a", {class: "link white dim pointer", href: navItem.location, oncreate: m.route.link}, navItem.name)
                ])
              }))
            ]),
            m("div#social-and-search", {class: "fr white w-30 pb2"}, [
              m("ul", {class: "list"}, [
                m("li", {class: "dib fl mr4 f3 link dim pointer"}, [
                  m("i", {class: "fa fa-twitter"}),
                ]),
                m("li", {class: "dib fl mr4 f3 link dim pointer"}, [
                  m("i", {class: "fa fa-facebook"}),
                ]),
                m("li", {class: "dib fl mr4 f3 link dim pointer"}, [
                  m("i", {class: "fa fa-linkedin"}),
                ]),
                m("li", {class: "dib fl mr4 f3 link dim pointer"}, [
                  m("i", {class: "fa fa-search"}),
                ])
              ])
            ])
          ])
        ])
  }
}
