const m = require("mithril");

module.exports = {
  view: () => {
   return m('div', {class: 'fl w-100'}, [
    m('.fl.w-100.h-100', {style: 'min-height: 300px; background-size: cover !important; background-position: center center; background: url("./img/home-intro-holder-bg.jpg")'}, [
      m('.flex.items-center.flex-row.justify-center.h-100.w-100',{style: 'height: 300px'}, [
        m('.f1.fw6.avenir', "Caesar's Entertainment")
      ])
    ]),
    m('.w-100.center.flex.flex-row.flex-wrap', {style: 'max-width: 1200px;'}, [
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', {style: 'background: url("./img/caesars-ballys.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%'}, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Ballys'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-caesars_palace.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Caesars Palace'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-cromwell.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Cromwell'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-flamingo.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Flamingo'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-harrahs.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Harrahs'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-nobu.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Nobu'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-paris.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Paris'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]), 
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-planet_hollywood.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Planet Hollywood'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-rio.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'Rio'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
      //property
      m('.flex.flex-row.w-50.mb2.bg-white.ba.b--black-10', [
        m('.flex', { style: 'background: url("./img/caesars-the_linq.jpg"); background-size: cover; min-height: 300px; height: 100%; width: 100%' }, [
        ]),
        m('.flex-auto'),
        m('.flex.flex-column.justify-center.w-80.pl2', [
          m('h1.mb0', 'The Linq'),
          m('p.mt0.lh-copy', 'Description placeholder area.')
        ])
      ]),
    ])
   ]);
  }
}
