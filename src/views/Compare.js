const m = require("mithril")
let Hotel = require("../models/Hotel")
let TitleBar = require("../components/TitleBar")

module.exports = {
  view: (vnode) => {
    return m("div", {class: "fl w-100 center"}, [
      m("div", {class: "fl w-100"}, [
        m("div", {class: "fl w-25 v-100 bg-black-10 pa2"}, [
          m("h1", "Available Hotels"),
          Hotel.list.map(function(hotel){
            return m("div", {class: "h3 bb b--black-30 flex items-center link dim pointer", onclick: Hotel.compareThis.bind(Hotel, hotel)}, hotel.name)
          })
        ]),
        m("div", {class: "fl w-75 space-between flex flex-row db", style: "max-width: 100%; overflow-x: scroll;"}, [
          Hotel.compare.map(function(hotel){
            return m("div", {class: "avenir h-100 shadow-1 mr2 h2 fl bg-dark-gray", style: "min-width: 300px; max-width: 300px; position: relative !important"}, [
              m("div", {class: "fl w-100 bg-green near-white avenir bb b--black-20 pa2 h6 relative", style: "min-width: 300px;"}, [
                //hotel name
                m("h5", {class: "tc"}, hotel.name),
                m("h5", {class: "tc em"}, hotel.hotelRating),
              ]),
              m("div", {class: "tl bg-dark-gray near-white pa2 fl w-100"}, [
                //street address
                m("div", {class: ""}, [
                  m("a", {class: "fl w-100 bb b--white-30"}, [
                    m("p", {class: "fl w-100 mb0"}, [
                      m("i", {class: "fa fa-map-marker mr2"}),
                      m("span", hotel.address.street)
                    ]),
                    m("p", {class: "fl mr1 mt0"}, hotel.address.city),
                    m("p", {class: "fl mr1 mt0"}, hotel.address.state),
                    m("p", {class: "fl mr1 mt0"}, hotel.address.zip),
                  ])
                ]),
                m("p", {class: "fl w-100 mt3 mb1"}, hotel.website),
                m("p", {class: "fl w-100 mb2 mt0"}, "@" + hotel.twitter),
              ]),
              m("div", {class: "pa2 f7 bg-dark-green near-white bb b--black-20 fl w-100"}, [
                m("h4", "Sales office"),
                m("p", {}, [
                  m("i", {class: "fa fa-phone mr2"}),
                  m("span", hotel.salesOffice.phone)
                ]),
                m("p", {}, [
                  m("i", {class: "fa fa-paper-plane mr2"}),
                  m("span", hotel.salesOffice.email)
                ]),
                m("p", {}, [
                  m("i", {class: "fa fa-user-circle mr2"}),
                  m("span", "Director of Catering: "),
                  m("span", hotel.salesOffice.directorOfCatering)
                ]),
                m("p", {}, [
                  m("i", {class: "fa fa-user-circle mr2"}),
                  m("span", "Director of Sales: "),
                  m("span", hotel.salesOffice.directorOfSales)
                ]),
              ]),
              m("div", {class: "tl fl w-100 bg-dark-gray pa2 near-white f7 bb b--black-20"}, [
                m("h4", "Hotel Fees"),
                m("p", {}, [
                  m("span", {class: "gold"}, "Rooms tax: "),
                  m("span", hotel.roomsTax)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Resort fee: "),
                  m("span", hotel.resortFee)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "WiFi fee: "),
                  m("span", hotel.wifiFee)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Public WiFi fee: "),
                  m("span", hotel.publicWifiSpace)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Rooms tax: "),
                  m("span", hotel.roomsTax)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Sales tax: "),
                  m("span", hotel.salesTax)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Service charge: "),
                  m("span", hotel.serviceCharge)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Parking (self): "),
                  m("span", hotel.parking.self)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Parking (valet): "),
                  m("span", hotel.parking.valet)
                ]),
              ]),
              m("div", {class: "pa2 f7 bg-dark-green near-white bb b--black-20 fl w-100"}, [
                m("h4", "Space details"),
                m("p", {}, [
                  m("i", {class: "fa fa-bed mr2 gold"}),
                  m("span", {class: "gold"}, "Sleeping rooms: "),
                  m("span", hotel.sleepingRooms)
                ]),
                m("p", {}, [
                  m("i", {class: "fa fa-users mr2 gold"}),
                  m("span", {class: "gold"}, "Meeting rooms: "),
                  m("span", hotel.meetingRoomCount)
                ]),
                m("p", {}, [
                  m("span", {class: "fl w-100"}, [
                    m("i", {class: "fa fa-users mr2 gold"}),
                    m("span", {class: "gold"}, "Largest rooms: "),
                  ]),
                  m("span", {class: "mt1 mb2 fl w-100 ph4"}, [
                    m("span", {class: "fl f6 w-100"}, hotel.largestRooms[0].name + " (" + hotel.largestRooms[0].sqft + " Square Feet)"),
                    m("span", {class: "fl f6 w-100 mt1"}, hotel.largestRooms[1].name + " (" + hotel.largestRooms[1].sqft + " Square Feet)"),
                  ])
                ]),
                m("p", {}, [
                  m("span", {class: "fl w-100"}, [
                    m("i", {class: "fa fa-users mr2 gold"}),
                    m("span", {class: "gold"}, "Downloads: "),
                  ]),
                  m("span", {class: "fl mt2 link dim pointer"}, [
                    m("i", {class: "fa fa-link mr1"}),
                    m("span", hotel.meetingSpace.capacityChart)
                  ]),
                  m("span", {class: "fr mt2 link dim pointer"}, [
                    m("i", {class: "fa fa-link mr1"}),
                    m("span", hotel.meetingSpace.floorPlan)
                  ]),
                ]),
              ]),
              m("div", {class: "tl fl w-100 bg-dark-gray pa2 near-white f7 bb b--black-20"}, [
                m("h4", "Hotel Fees"),
                m("p", {}, [
                  m("span", {class: "gold"}, "Rooms tax: "),
                  m("span", hotel.roomsTax)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Resort fee: "),
                  m("span", hotel.resortFee)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "WiFi fee: "),
                  m("span", hotel.wifiFee)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Rooms tax: "),
                  m("span", hotel.roomsTax)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Sales tax: "),
                  m("span", hotel.salesTax)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Service charge: "),
                  m("span", hotel.serviceCharge)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Parking (self): "),
                  m("span", hotel.parking.self)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Parking (valet): "),
                  m("span", hotel.parking.valet)
                ]),
              ]),
              m("div", {class: "tl fl w-100 bg-dark-green pa2 near-white f7 bb b--black-20"}, [
                m("h4", "Food & Beverage"),
                m("p", {}, [
                  m("span", {class: "gold"}, "Banquet Menu: "),
                  m("span", hotel.banquetMenu)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Custom menu available: "),
                  m("span", hotel.customMenuAvailable)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Restaurants " + "(" + hotel.restaurants.length + "): "),
                  m("span", hotel.restaurants[0].name)
                ]),
              ]),
              m("div", {class: "tl fl w-100 bg-dark-gray pa2 near-white f7 bb b--black-20"}, [
                m("h4", "Audio and Video"),
                m("p", {}, [
                  m("span", {class: "gold"}, "AV Company: "),
                  m("span", hotel.avCompany.name)
                ]),
              ]),
              m("div", {class: "tl fl w-100 bg-dark-green pa2 near-white f7 bb b--black-20"}, [
                m("h4", "Amenities"),
                m("p", {}, [
                  m("span", {class: "gold"}, "Loyalty Program: "),
                  m("span", hotel.loyaltyProgram.name)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Fitness Center: "),
                  m("span", hotel.fitnessCenter)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Pool: "),
                  m("span", hotel.pool.available)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Pool indoors: "),
                  m("span", hotel.pool.indoor)
                ]),
                m("p", {}, [
                  m("span", {class: "gold"}, "Spa: "),
                  m("span", hotel.spa.name)
                ]),
              ]),
              m("div", {class: "tl fl w-100 bg-dark-gray pa2 near-white f7 bb b--black-20"}, [
                m("h4", "Points of interest"),
              ]),
              m("div", {class: "tl fl w-100 bg-dark-green pa2 near-white f7 bb b--black-20"}, [
                m("h4", "Airport"),
                m("p", {}, [
                  m("span", {class: "gold"}, "Name: "),
                  m("span", {class: "fl w-100"}, hotel.airport.name + " (" + hotel.airport.abbreviation + ")")
                ]),
                m("p", {class: "fl w-100 mt2"}, [
                  m("span", {class: "gold"}, "Distance to hotel: "),
                  m("span", hotel.airport.distance)
                ]),
              ]),
            ])
          })
        ])
      ])
    ])
  }
}
