const trelloExport = require('./trello-export');

const getCardsByLabel = (labelName) =>
  trelloExport.cards.filter((card) =>
    card.labels.find((label) => 
      label.name === labelName
    )
  )

const OKCards = getCardsByLabel('OK');

console.log('okCards', Object.keys(OKCards))
