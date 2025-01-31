/*
 * Note: This isn't a queue solution (yet).
 */
export function predictPartyVictory(senate) {
  let currentRound = Array.from(senate);

  while (currentRound.includes('R') && currentRound.includes('D')) {
    const nextRound = [];
    let prevS = null;
    let votes = 0;

    for (let s of currentRound) {
      if (prevS === null) {
        nextRound.push(s);
        prevS = s;
        votes = 1;
      } else if (prevS === s) {
        nextRound.push(s);
        votes++;
      } else {
        votes--;

        if (!votes) prevS = null;
      }
    }

    if (votes) {
      for (let i = 0; i < nextRound.length && votes; i++) {
        if (nextRound[i] !== prevS) {
          nextRound.splice(i, 1);
          votes--;
        }
      }
    }

    currentRound = nextRound;
  }

  if (currentRound.includes('R')) return 'Radiant';
  else return 'Dire';
}
