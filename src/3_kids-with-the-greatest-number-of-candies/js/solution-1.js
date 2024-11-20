function kidsWithCandies(candies, extraCandies) {
  const maxNumber = candies
    .toSorted((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    })
    .pop();

  return candies.map((v) => v + extraCandies >= maxNumber);
}

export default kidsWithCandies;
