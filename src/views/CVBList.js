const m = require('mithril');
var list = require('../models/CVBList');

var CVBList = {
  view: function() {
    return m('.mw9.center.pa3', {style: 'height: 100%;'}, [
      // headline
      m('.f1.fw2', 'CVB Directory'),
      m('.f3.fw4', 'Find suppliers in your target geographic region.'),
      list.all.map(function(cvb) {
      // listing
      return m('div.fl.mt4.w-100.ba.b--black-30.pa3.br.br3.shadow-2.bg-white', [
          m('.fl.w-100.w-50-ns', [
            m('img.pa2.ba.b--black-20.w-90', {src: '../img/listinghero-boulder-cvb.png'})
          ]),
          m('.fl.w-100.w-50-ns', [
            m('.f3.lh-title', 'Boulder Convention & Visitors Bureau'),
            m('.f5.mb4.lh-subtitle', '2440 Pearl Street. Boulder, CO 80302'),
            m('.fl.dim.pointer.a.w-third.bg-near-white.pa2.ba.b--black-20.tc.ttu.mt2', {href: '/cvb/colorado/boulder', oncreate: m.route.link}, 'View profile'),
            m('.fl.dim.pointer.w-third.bg-near-white.pa2.ba.b--black-20.tc.ttu.mt2', 'Send RFP'),
            m('.fl.dim.pointer.w-third.bg-near-white.pa2.ba.b--black-20.tc.ttu.mt2', 'Follow CVB'),
            // stats
            m('.fl.w-100.pa3.tc.f2.fw5', [
              m('.fl.w-third.pink', [
                m('.fl.w-100', [
                  m('.f1', '33%')
                ]),
                m('.fl.w-100', [
                  m('.f5', 'popularity')
                ]),
              ]),
              m('.fl.w-third.green', [
                m('.fl.w-100', [
                  m('.f1', '$600b')
                ]),
                m('.fl.w-100', [
                  m('.f5', 'revenue last yr.')
                ]),
              ]),
              m('.fl.w-third.orange', [
                m('.fl.w-100', [
                  m('.f1', '33%')
                ]),
                m('.fl.w-100', [
                  m('.f5', 'profile traffic')
                ]),
              ]),
              // end stats
            ]),
          ]),
        ])
      }),
    ]);
  }
};

module.exports = CVBList;
