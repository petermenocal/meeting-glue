var m = require("mithril")

//components
let PollWidget = require('../components/PollWidget');
let MostPopularCitiesWidget = require('../components/MostPopularCitiesWidget');
let BrandPartnersWidget = require('../components/BrandPartnersWidget');
let AboutWidget = require('../components/AboutWidget'); 
let NewsWidget = require('../components/NewsWidget'); 
let NewOpeningsWidget = require('../components/NewOpeningsWidget'); 
let NeedsDatesWidget = require('../components/NeedsDatesWidget'); 
let InviteAPlanner = require('../components/InviteAPlanner'); 
let Hero = require('../components/Hero'); 

module.exports = {
  view: () => {
    return m('.fl.w-100', [
//      m(Advertisement),
     m('.fl.w-100', [
      m(Hero)
     ]), 
      m('.fl.w-100', [
        m(InviteAPlanner)
      ]),
      m('.fl.w-100', [
        m('.fl.w-100.w-third-ns.pa2', [
          m(AboutWidget)
        ]),
        m('.fl.w-100.w-third-ns.pa2', [
          m(NewsWidget)
        ]),
        m('.fl.w-100.w-third-ns.pa2', [
          m(NewOpeningsWidget),
          m(NeedsDatesWidget)
        ]),
      ]),
      m('.fl.w-100', [
        m(BrandPartnersWidget)
      ]), 
      m('.fl.w-100', [
        m('.fl.w-50-ns.w-100.pa4', [
          m(MostPopularCitiesWidget)
        ]),
        m('.fl.w-50-ns.w-100.pa4', [
          m(PollWidget)
        ])
      ]),
    ])
  }
}
