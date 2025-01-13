import { predictPartyVictory } from './solution-1.js';

describe('`predictPartyVictory()`', () => {
  it('should return `Radiant`, when there is only a single `R` in the senate', () => {
    expect(predictPartyVictory('R')).toBe('Radiant');
  });

  it('should return `Dire`, when there is only a single `D` in the senate', () => {
    expect(predictPartyVictory('D')).toBe('Dire');
  });

  it('should return `Radiant`, when there are only `R`s in the senate', () => {
    expect(predictPartyVictory('RR')).toBe('Radiant');
  });

  it('should return `Dire`, when there are only `D`s in the senate', () => {
    expect(predictPartyVictory('DDD')).toBe('Dire');
  });

  it('should return `Radiant`, when `D`s are outnumbered by `R`s in the senate', () => {
    expect(predictPartyVictory('DRR')).toBe('Radiant');
  });

  it('should return `Dire`, when `R`s are outnumbered by `D`s in the senate', () => {
    expect(predictPartyVictory('RDDRD')).toBe('Dire');
  });

  it('should return `Radiant`, when `R`s are outnumbered by `D`s but `R`s are casting the votes first in the senate', () => {
    expect(predictPartyVictory('RRDDD')).toBe('Radiant');
  });

  it('should return `Dire`, when `D`s are outnumbered by `R`s but `D`s are casting the votes first in the senate', () => {
    expect(predictPartyVictory('DRDRR')).toBe('Dire');
  });
});
