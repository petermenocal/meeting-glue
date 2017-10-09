const m = require('mithril');

let BrandPartnersWidget = {
  view: () => {
    return m('.flex.w-100.flex-row.h-100.bg-white', { style: 'max-height: 150px; overflow: hidden' }, [
      m('.flex', [
        m('img', {src: '../../img/logo-_0000_marriott.jpg'})
      ]),
      m('.flex', [
        m('img', {src: '../../img/logo-_0001_hyatt.jpg'})
      ]),
      m('.flex', [
        m('img', {src: '../../img/logo-_0002_hilton.jpg'})
      ]),
      m('.flex', [
        m('img', {src: '../../img/logo-_0003_ihg.jpg'})
      ]),
      m('.flex', [
        m('img', {src: '../../img/logo-_0004_mgm.jpg'})
      ]),
      m('.flex', [
        m('img', {src: '../../img/logo-_0005_caesars.jpg'})
      ]),
    ]);
  }
};

module.exports = BrandPartnersWidget;
