const m = require('mithril')
const Twitter = require('twitter');
const _ = require('underscore');

var client = new Twitter({
  consumer_key: 'lE3xRhMnu2vu1hrnRwP0CZgRN',
  consumer_secret: 'LQt4QH66okjWahikdDn2PPA0hREjdN2RcsuuvAk5WizBfNj2ph',
  access_token_key: '265805403-6cPMdiOttt4hfFQlFEeliFbyQMObCWkY67QGv7lk',
  access_token_secret: 'f0itACktYeSakP9K3yhwv5fFyrWhQZo1rhLrh9sNTbAwY'
});

var params = {screen_name: 'LVCVA'};

let Feed = {
  profileImage: '',
  getTimeline: () => {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        Feed.timeline = tweets
        Feed.active = Feed.timeline[0]
        Feed.profileImage = Feed.active.user.profile_image_url
      }
    });
  },
  timeline: [],
  active: {},
  swap: () => {
    let activeIndex = _.indexOf(Feed.timeline, Feed.active)
    if(activeIndex == Feed.timeline.length - 1) {
      activeIndex = 0
    } else {
      activeIndex++
    }
    Feed.active = Feed.timeline[activeIndex]
    m.redraw()
  },
  initialize: ()=>{
    setInterval(Feed.swap, 5500)
  }
}

module.exports = Feed
