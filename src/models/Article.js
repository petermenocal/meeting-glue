var m = require("mithril")

var Article = {
  list: [
    {name: "Ace Hotel New Orleans", img: "opening-ace.png", location: 'New Orleans, LA', rooms: '250', sqft: '15,000'},
    {name: "Andaz Scottsdale Resort and Spa", img: "opening-andaz.png", location: 'Scottsdate, AZ', rooms: '375', sqft: '20,000'},
    {name: "The Beekman Hotel", img: "opening-beekman.png", location: 'New York, NY', rooms: '315', sqft: '35,000'},
    {name: "Ace Hotel Chicago", img: "opening-acechicago.png", location: 'Chicago, IL', rooms: '200', sqft: '17,000'},
    {name: "Graduate Berkeley", img: "opening-graduate.png", location: 'Berkeley, CA', rooms: '143', sqft: '8,000'},
    {name: "Sagamore Pendry", img: "opening-sagamore.png", location: 'Baltimore, MD', rooms: '128', sqft: '15,000'},
  ],
  load: function() {}
}

module.exports = Article
