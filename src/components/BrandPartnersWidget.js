const m = require('mithril');

let BrandPartnersWidget = {
  view: () => {
    return m('.fl.w-100.h5.pt4', [
      m('.fl.w-20.pa2', [
        m('img', {src: '//placehold.it/300x300'})
      ]),
      m('.fl.w-20.pa2', [
        m('img', {src: '//placehold.it/300x300'})
      ]),
      m('.fl.w-20.pa2', [
        m('img', {src: '//placehold.it/300x300'})
      ]),
      m('.fl.w-20.pa2', [
        m('img', {src: '//placehold.it/300x300'})
      ]),
      m('.fl.w-20.pa2', [
        m('img', {src: '//placehold.it/300x300'})
      ]),
    ]);
  }
};

module.exports = BrandPartnersWidget;
