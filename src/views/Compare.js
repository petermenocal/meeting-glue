const m = require("mithril")
let Hotel = require("../models/Hotel")
let Nav = require("../components/Nav")
let TitleBar = require("../components/TitleBar")

module.exports = {
  view: () => {
    return m("div", {class: "fl w-100 center h-100 vh-100"}, [
      m("div", {class: "fl w-100"}, m(TitleBar, "Compare")),
      m("div", {class: "fl w-100 pa3"}, [
        m("div", {class: "fl w-25 v-100 bg-black-10 pa2"}, [
          m("h1", "Available Hotels"),
          Hotel.list.map(function(hotel){
            return m("div", {class: "h3 bb b--black-30 flex items-center link dim pointer", onclick: Hotel.compareThis.bind(Hotel, hotel)}, hotel.name)
          })
        ]),
        m("div", {class: "fl w-75 space-between flex flex-row"}, [
          Hotel.compare.map(function(hotel){
            return m("div", {class: "h-100 vh-100 ba b--black-20 shadow-1 mr2 h2", style: "min-width: 300px; max-width: 300px"}, [
              m("div", {class: "tc bb b--black-20 pa2 h6"}, [
                m("h5", hotel.name),
                m("h6", {class: "tc"}, hotel.address),
                m("h6", {class: "tc"}, hotel.website),
                m("h6", {class: "tc"}, "@" + hotel.twitter),
              ]),
              m("div", {class: "pa2 f7 bb b--black-20"}, [
                m("h4", "Sales office"),
                m("p", hotel.salesOffice.phone),
                m("p", hotel.salesOffice.email),
                m("p", "Director of sales: " + hotel.salesOffice.directorOfSales),
                m("p", "Director of catering: " + hotel.salesOffice.directorOfCatering),
              ]),
              m("div", {class: "tl pa2 f7 bb b--black-20"}, [
                m("h4", "Hotel details"),
                m("p", "Sleeping rooms: " + hotel.sleepingRooms),
                m("p", "Rooms tax: " + hotel.roomsTax),
                m("p", "Resort Fee: " + hotel.resortFee),
                m("p", "WiFi Fee: " + hotel.wifiFee),
                m("p", "Parking (self): " + hotel.parking.self),
                m("p", "Parking (valet): " + hotel.parking.valet),
              ])
            ])
          })
        ])
      ])
    ])
  }
}
