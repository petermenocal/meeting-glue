var m = require("mithril")
var Article = require("../models/Article")

module.exports = {
  view: () => {
    return m("div", {class: "fl w-100 db bg-near-white pa4"}, [
      m("h1", {class: "avenir fw5 green ttu"}, "Latest Stories"),
      m("div#carousel", {class: "flex flex-row", style: "max-height: 400px; width: 100%; overflow-x: scroll; overflow-y: hidden; -webkit-overflow-scrolling: touch"}, Article.list.map((article)=>{
        return m("div", {class: "mr4", style: "min-width: 200px"}, [
          m("img", {class: "fl w-100", src: "//placehold.it/400x400"}),
          m("h1", {class: "avenir green fl f4 fw4 w-100 mb0"}, article.title),
          m("p", {class: "avenir fl w-100 gray f6  mt1"}, article.published)
        ])
      }))
    ])
  }
}
