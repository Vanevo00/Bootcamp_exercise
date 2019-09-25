const card_ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
const card_suits = ["spades", "hearts", "clubs", "diamonds"];

for (let i = 0; i < 100; i++) {
  const rankIndex = Math.floor(Math.random() * card_ranks.length);
  const suitIndex = Math.floor(Math.random() * card_suits.length);
  document.write(`${card_ranks[rankIndex]} of ${card_suits[suitIndex]}<br>`);
}

