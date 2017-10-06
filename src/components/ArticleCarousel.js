var m = require("mithril")
var Article = require("../models/Article")

module.exports = {
  view: () => {
    return m("div", {class: "fl w-100 db bg-near-white pa4"}, [
      m("h1", {class: "avenir fw5 green ttu"}, "Hot new openings"),
      m("div#carousel", {class: "flex flex-row", style: "max-height: 400px; width: 100%; overflow-x: scroll; overflow-y: hidden; -webkit-overflow-scrolling: touch"}, Article.list.map((article)=>{
        return m(".w-third", {class: "mr4", style: "min-width: 200px"}, [
          m("img.shadow-1.pa1.ba.b--black-10", {class: "fl w-100", src: "../img/" + article.img}),
          m(".f5.fw5", {class: "avenir mt2 orange fl f4 fw4 w-100 mb0"}, article.name),
          m(".f6.fw5", {class: "avenir green f4 fw4 w-100 mb0"}, article.location),
          m(".f6.fw4", {class: "avenir gray fl f4 fw4 w-100 mb0"}, article.rooms + ' rooms'),
          m(".f6.fw4", {class: "avenir gray fl f4 fw4 w-100 mb0"}, article.sqft + ' sq ft.'),
        ])
      }))
    ])
  }
}
