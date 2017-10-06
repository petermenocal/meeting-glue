const m = require('mithril');

let InviteAPlanner = {
  view: () => {
    return m('.fl.w-100.h4.pa4.pt3.bg-purple.white.shadow-2', [
      m('.fl.w-50-ns.w-100', [
        m('.f2.fw5', "Let's grow our community")
      ]),
      m('.fl.w-50-ns.w-100.pt3', [
        m('.fr.fw4.f4', "Invite a fellow planner"),
        m('.fr', [
          m('input[type=text][placeholder=Name].mr2'),
          m('input[type=text][placeholder=Email].mr2'),
          m('button.bg-purple.white.br2', 'Send'),
        ])
      ]),
    ]);
  }
};

module.exports = InviteAPlanner;
