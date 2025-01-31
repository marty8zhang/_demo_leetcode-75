/*
 * Note: This is a queue solution.
 */
export function predictPartyVictory(senate) {
  const uncastVotes = [];
  let currentRound = Array.from(senate);

  while (currentRound.includes('R') && currentRound.includes('D')) {
    const nextRound = [];

    for (let s of currentRound) {
      if (!uncastVotes.length || uncastVotes[0] === s) {
        nextRound.push(s);
        uncastVotes.push(s);
      } else {
        uncastVotes.shift();
      }
    }

    currentRound = nextRound;
  }

  if (currentRound.includes('R')) return 'Radiant';
  else return 'Dire';
}
