const m = require('mithril')

let InviteAPlanner = {
  view: () => {
    return m('.flex.flex-auto.h-100.pa2.white.w-100.bg-gradient-secondary', [
      m('.center.pb3', {style: 'max-width: 1200px'}, [
        m('.fl.w-50-ns.w-100.pt3.mt1', [
          m('.f1.fw3', 'Let\'s grow our community')
        ]),
        m('.fl.flex.flex-column.w-50-ns.w-100.pt3', [
          m('div.pb1', 'Invite a fellow planner'),
          m('div.flex.flex-row', [
            m('input[type=text][placeholder=Name].mr2'),
            m('input[type=text][placeholder=Email].mr2'),
            m('button.hk-button--primary.white.br2', 'Send'),
          ])
        ]),

      ])
    ])
  }
}

module.exports = InviteAPlanner
