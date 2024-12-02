function largestAltitude(gain) {
  let largest = 0;

  gain.reduce((accumulator, g) => {
    accumulator += g;

    if (accumulator > largest) largest = accumulator;

    return accumulator;
  }, 0);

  return largest;
}

export default largestAltitude;
