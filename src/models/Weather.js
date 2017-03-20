var m = require("mithril")
var UserLocation = require("./UserLocation")

var Weather = {
  load: () => {
    setTimeout(function() {
      console.log(UserLocation.current)
      var userCoords = UserLocation.current
      m.request({
        method: "GET",
        url: "//api.openweathermap.org/data/2.5/weather",
        data: {lat: userCoords.latitude, lon: userCoords.longitude, appid: "2e9815f17e3580290be718c30d622bc1", units: "imperial"}
      }).then(function(data){
        Weather.current = data
        console.log(Weather.current),
        Weather.loaded = true
      })
    }, 5000)
  },
  current: {},
  loaded: false
}

module.exports = Weather
