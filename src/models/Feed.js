const m = require('mithril')
const Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'lE3xRhMnu2vu1hrnRwP0CZgRN',
  consumer_secret: 'LQt4QH66okjWahikdDn2PPA0hREjdN2RcsuuvAk5WizBfNj2ph',
  access_token_key: '265805403-6cPMdiOttt4hfFQlFEeliFbyQMObCWkY67QGv7lk',
  access_token_secret: 'f0itACktYeSakP9K3yhwv5fFyrWhQZo1rhLrh9sNTbAwY'
});

var params = {screen_name: 'defypm'};

let Feed = {
  getTimeline: () => {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
        return tweets
      }
    });
  }
}

module.exports = Feed
