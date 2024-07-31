'use strict';

// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;
// method 2
// const {odds : {team1, x: draw, team2}} = game;
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
// printGoals(...game.scored);
// team1 < team2 && console.log(`team 1 will win`);
// team1 > team2 && console.log(`team 2 will win`);

/*
// Coding Challenge #2
// 1
for (const [goalNumber, name] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${name}`);
}
// 2
const odds = Object.values(game.odds);
let average = 0;
for (const value of odds) {
  average += value;
}
average /= odds.length;
console.log(average);
// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// scorers[game.scored[0]] = 1;

console.log(scorers);
*/
