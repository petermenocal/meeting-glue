const m = require('mithril')

let Tabs = {
  active: 1,
  current: {id: 1, content: 'Fugiat comprehenderit fabulas quorum nescius non e mandaremus relinqueret. Cillum singulis illustriora ut nulla consequat ab velit dolor. Vidisse elit quae laborum quorum, se sunt ubi eram. Incididunt cillum appellat ad o quis summis legam proident.  Ubi legam distinguantur, ex dolore illustriora. Ingeniis voluptatibus si quamquam se ne voluptate si mentitum. Te dolore nostrud transferrem aut si ne firmissimum.'},
  swap: (tab) => {
    Tabs.active = tab.id
    Tabs.current = tab
  },
  isActive: (id) => {
    if(id === Tabs.active) {
      return true
    } else {
      return false
    }
  },
  list: [
    {id: 1, content: 'Fugiat comprehenderit fabulas quorum nescius non e mandaremus relinqueret. Cillum singulis illustriora ut nulla consequat ab velit dolor. Vidisse elit quae laborum quorum, se sunt ubi eram. Incididunt cillum appellat ad o quis summis legam proident.  Ubi legam distinguantur, ex dolore illustriora. Ingeniis voluptatibus si quamquam se ne voluptate si mentitum. Te dolore nostrud transferrem aut si ne firmissimum.'},
    {id: 2, content: 'Irure ab cupidatat ne quem, se amet officia sempiternum. Malis sempiternum incididunt tempor singulis, officia veniam offendit constias. Veniam incurreret sed doctrina ut ita veniam officia adipisicing. In nisi incurreret coniunctione ut in sint quem malis consequat. Et ut quae deserunt, ingeniis cillum singulis. Minim vidisse do consequat, velit iis mentitum.'},
    {id: 3, content: 'Do tempor singulis quo ne cernantur praesentibus. Malis nescius aut philosophari ex e culpa e nisi. Offendit amet singulis iudicem, quae litteris de transferrem. Aliqua laborum aut reprehenderit, hic possumus cohaerescant. Id labore in labore, export pariatur mandaremus. Quis ullamco ea amet ipsum te eiusmod irure iudicem possumus.'},
    {id: 4, content: 'Ut culpa se quis, e cernantur o senserit. Quae eu laborum, pariatur et probant. E quamquam arbitrantur id pariatur qui cupidatat. Cillum nostrud litteris nam proident ad magna. Pariatur fugiat ita occaecat exercitation e singulis praesentibus iis eiusmod. Consequat nisi sint qui sint, fabulas iis cillum laborum. Dolor firmissimum deserunt labore mandaremus te an labore cernantur. Irure mentitum reprehenderit quo nescius a sint iudicem.'},
    {id: 5, content: 'Hic magna appellat voluptatibus sed tempor tractavissent excepteur irure voluptate. Commodo cillum cupidatat cupidatat ab malis quamquam ex familiaritatem. Ne nam aute doctrina, ita illum incididunt. Nam magna veniam fore pariatur, sunt et litteris. Ipsum aut admodum, nisi eiusmod ut tamen amet.'},
  ]
}

module.exports = Tabs
