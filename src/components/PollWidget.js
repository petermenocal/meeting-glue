const m = require('mithril');
let WidgetTitleBar = require('./WidgetTitleBar');

let PollWidget = {
 view: () => {
  return m('.fl.w-100.bg-white.h-100.shadow-1', [
    m(WidgetTitleBar, {content: 'Poll'}),
    m('.fl.w-100.pa3.lh-subheadline.f4.fw5', 'What kind of planner are you?'),
    m('.fl.w-50.pa3', [
      m('input.fl.mr2', {type: 'radio', name: 'poll', value: '1'}),
      m('.f4.fl.fw4.pb1', 'Corporate')
    ]),
    m('.fl.w-50.pa3', [
      m('input.fl.mr2', {type: 'radio', name: 'poll', value: '1'}),
      m('.f4.fl.fw4.pb1', 'Association')
    ]),
    m('.fl.w-50.pa3', [
      m('input.fl.mr2', {type: 'radio', name: 'poll', value: '1'}),
      m('.f4.fl.fw4.pb1', 'Religious')
    ]),
    m('.fl.w-50.pa3', [
      m('input.fl.mr2', {type: 'radio', name: 'poll', value: '1'}),
      m('.f4.fl.fw4.pb1', 'Non-profit')
    ]),
    m('.fl.w-50.pa3', [
      m('input.fl.mr2', {type: 'radio', name: 'poll', value: '1'}),
      m('.f4.fl.fw4.pb1', 'Sports')
    ]),
    m('.fl.w-50.pa3', [
      m('input.fl.mr2', {type: 'radio', name: 'poll', value: '1'}),
      m('.f4.fl.fw4.pb1', 'Third party')
    ]),
  ]);
 }
};

module.exports = PollWidget;
