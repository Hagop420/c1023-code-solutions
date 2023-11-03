console.log('Lodash is loaded:', typeof _ !== 'undefined');

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

function dealCards(players, deck, numCards) {
  for (let i = 0; i < numCards; i++) {
    for (let j = 0; j < players.length; j++) {
      const card = deck.pop();
      players[j].hand.push(card);
    }
  }
}

function calculateScore(hand) {
  return hand.reduce((total, card) => total + card.points, 0);
}

function findWinningPlayer(players) {
  let highestScore = -1;
  let winningPlayers = [];

  for (const player of players) {
    const handScore = calculateScore(player.hand);
    if (handScore > highestScore) {
      highestScore = handScore;
      winningPlayers = [player];
    } else if (handScore === highestScore) {
      winningPlayers.push(player);
    }
  }

  // comms 3
  return winningPlayers;
}

// games
// loggers

function runCardGame(players, numPerHand) {
  const ranks = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ];
  const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

  const deck = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      const card = {
        rank,
        suit,
        points:
          rank === 'Ace'
            ? 11
            : rank === 'King' || rank === 'Queen' || rank === 'Jack'
            ? 10
            : parseInt(rank, 10),
      };
      deck.push(card);
    }
  }

  shuffleDeck(deck);
  dealCards(players, deck, numPerHand);

  console.log('Players and their hands:');
  for (const player of players) {
    console.log(`${player.name}'s hand:`, player.hand);
  }

  const winningPlayers = findWinningPlayer(players);

  if (winningPlayers.length === 1) {
    console.log(
      `The winning player is ${
        winningPlayers[0].name
      } with a score of ${calculateScore(winningPlayers[0].hand)}.`
    );
  } else {
    console.log("It's a tie between the following players:");
    for (const player of winningPlayers) {
      console.log(
        `${player.name} with a score of ${calculateScore(player.hand)}`
      );
    }
    console.log('Running a tie-breaker...');
    runCardGame(winningPlayers, numPerHand);
  }
}

const players = [
  { name: 'Player 1', hand: [] },
  { name: 'Player 2', hand: [] },
  { name: 'Player 3', hand: [] },
  { name: 'Player 4', hand: [] },
];

const numPerHand = 2;

runCardGame(players, numPerHand);
