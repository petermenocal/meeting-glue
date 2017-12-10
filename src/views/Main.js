var m = require('mithril')

//components
let PollWidget = require('../components/PollWidget')
let MostPopularCitiesWidget = require('../components/MostPopularCitiesWidget')
let BrandPartnersWidget = require('../components/BrandPartnersWidget')
let AboutWidget = require('../components/AboutWidget')
let NewsWidget = require('../components/NewsWidget')
let NewOpeningsWidget = require('../components/NewOpeningsWidget')
let NeedsDatesWidget = require('../components/NeedsDatesWidget')
let InviteAPlanner = require('../components/InviteAPlanner')
let Hero = require('../components/Hero')
let Reviews = require('../components/Reviews')

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
        m('.center.pa3', { style: 'max-width: 1200px' }, [
          m('.fl.w-100.w-third-ns.pa4', [
            m(AboutWidget),
          ]),
          m('.fl.w-100.w-third-ns.pa4', [
            m(NewsWidget),
            m(Reviews)
          ]),
          m('.fl.w-100.w-third-ns.pa4', [
            m(NewOpeningsWidget),
          ]),
          m('.fl.w-100.mb4', [
            m(NeedsDatesWidget)
          ])
        ])
      ]),
      m('.fl.w-100.shadow-2.mb4', [
        m(BrandPartnersWidget)
      ]),
      m('.fl.w-100', [
        m('.center', { style: 'max-width: 1200px' }, [
          m('.fl.w-50-ns.w-100.pa4', [
            m(MostPopularCitiesWidget)
          ]),
          m('.fl.w-50-ns.w-100.pa4', [
            m(PollWidget)
          ])

        ])
      ]),
    ])
  }
}
