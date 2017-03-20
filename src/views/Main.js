var m = require("mithril")
var Nav = require("../components/Nav")
var ArticleCarousel = require("../components/ArticleCarousel")
var UserLocation = require("../models/UserLocation")
var Weather = require("../models/Weather")


module.exports = {
  oninit: () => {
    UserLocation.load()
    Weather.load(UserLocation.current)

    document.addEventListener('DOMContentLoaded', function(){
     Typed.new('.element', {
       strings: ["^1000 meeting planning.^1000 ", "^1000 event coordination.^1000 ", "^1000 requests for proposals.^1000 ", "^1000 venue search.^1000"],
       typeSpeed: 0,
       loop: true,
     });
   });
  },
  view: () => {
    return m("main", {class: "w-100 h-100 bg-near-white"}, [
      //navigation
      m(Nav),
      //main hero
      m("div#main-hero", {class: "relative mt4 pa3 near-white flex flex-column justify-center", style: "background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('img/main-hero.jpg'); background-size: cover; margin-top: 70px; height: 650px;"}, [
        m("div#caption", {class: "fl w-100"}, [
          m("div", {class: "fl w-50 pa5"}, [
            m("span", {class: "fl w-100"}, [
              m("h1", {class: "fl f2"}, "Defining the future of"),
              m("h1.element", {class: "pl3 fl f2"})
            ]),
            m("div#hero-cta", {class: "flex flex-column w-50"}, [
              m("h1", {class: "f4 mb0"}, "Join now"),
              m("p", {class: "f6 mt1 lh-copy"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet lacus ut lacus dictum faucibus eu et tellus. Nunc sit amet sodales magna. Donec malesuada nisi quis lacus posuere bibendum."),
              m("input", {class: "input ba b--yellow pa2 bg-white-20 h2 mb2 tc f6 tracked white", placeholder: "your email address"}),
              m("a", {class: "flex items-center justify-center button ba b--yellow bg-black near-white h3"}, "Sign me up!")
            ])
          ]),
          m("div", {class: "fl w-50 pa5"}, [
            m("h1", {class: "f5 ttu mt4 tracked"}, "The latest news"),
            m("h1", {class: "f2 measure"}, "The State of Meeting Planning in 2017"),
            m("p", {class: "f4 measure mb4"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet lacus ut lacus dictum faucibus eu et tellus. Nunc sit amet sodales magna. Donec malesuada nisi quis lacus posuere bibendum."),
            m("a", {class: "bg-yellow black dib link button pa3 tracked pointer tracked dim"}, "READ MORE")
          ])
        ])
      ]),
      //article carousel
      m(ArticleCarousel),
      //call to action
      m("div#cta", {class: "flex flex-row items-center justify-center ph3 yellow avenir fw4 h3 fl w-100 bg-dark-green"}, [
        m("p", "Get your daily dose of Meeting Glue everyday!"),
        m("div", {class: "fl w-30 border-box"}, [
          m("input", {class: "fl w-50 input-reset bg-black yellow avenir pa2 ba ml2", placeholder: "name@email.com"}),
          m("a", {class: "fl w-20 link dim h-100 flex items-center justify-center bg-yellow green b shadow-2", style: "padding: 11px"}, "Submit")
        ])
      ]),
      //what we offer
      m("div#what-we-offer", {class: "f5 bg-near-white fl w-100 pa4 db"}, [
        m("div", {class: "mw8 center"}, [
          m("h1", {class: "avenir fw5 green ttu"}, "What We Offer"),
          m("div", {class: "fl w-100"}, [
            m("div", {class: "fl w-third"}, [
              m("h1", {class: "f4 avenir fw4 underline"}, "Supplier Reviews"),
              m("p", {class: "measure-narrow ph3"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis lacus vitae leo commodo pulvinar. Maecenas vel pharetra leo. Nullam condimentum eu ex ac bibendum. Suspendisse in tortor nisl. Aliquam iaculis lacinia imperdiet. Nunc porta ipsum sit amet consequat cursus. Nam vitae dolor viverra, mattis metus vel, sollicitudin massa.")
            ]),
            m("div", {class: "fl w-third"}, [
              m("h1", {class: "f4 avenir fw4 underline"}, "Analytics"),
              m("p", {class: "measure-narrow ph3"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis lacus vitae leo commodo pulvinar. Maecenas vel pharetra leo. Nullam condimentum eu ex ac bibendum. Suspendisse in tortor nisl. Aliquam iaculis lacinia imperdiet. Nunc porta ipsum sit amet consequat cursus. Nam vitae dolor viverra, mattis metus vel, sollicitudin massa.")
            ]),
            m("div", {class: "fl w-third"}, [
              m("h1", {class: "f4 avenir fw4 underline"}, "RFP System"),
              m("p", {class: "measure-narrow ph3"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis lacus vitae leo commodo pulvinar. Maecenas vel pharetra leo. Nullam condimentum eu ex ac bibendum. Suspendisse in tortor nisl. Aliquam iaculis lacinia imperdiet. Nunc porta ipsum sit amet consequat cursus. Nam vitae dolor viverra, mattis metus vel, sollicitudin massa.")
            ])
          ])
        ])
      ]),
      //Weather
      m("div#weather", {class: "f5 bg-white fl w-100 pa4 db"}, [
        m("h1", {class: "avenir fw5 green ttu"}, "Weather"),
        m("div", Weather.loaded ? [
          m("p", {class: "b"}, Weather.current.name),
          m("p", {class: "ttc b"}, Weather.current.weather[0].description),
          m("p", {class: "f6"}, "Humidity: " + Weather.current.main.humidity + "%"),
          m("p", {class: "f6"}, "Pressure: " + Weather.current.main.pressure + "hpa"),
          m("p", {class: "f6"}, "Current Temp: " + Weather.current.main.temp + "°F"),
          m("p", {class: "f6"}, "Min Temp: " + Weather.current.main.temp_min + "°F"),
          m("p", {class: "f6"}, "Max Temp: " + Weather.current.main.temp_max + "°F"),
        ] : "Loading weather...")
      ])
    ])
  }
}
