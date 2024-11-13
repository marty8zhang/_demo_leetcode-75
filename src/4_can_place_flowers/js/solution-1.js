const canPlaceFlowers = function (flowerbed, n) {
  let nPlots = n;
  let i = 0;

  while (nPlots && i < flowerbed.length) {
    if (
      flowerbed[i] !== 1 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      nPlots -= 1;
      i += 2;
    } else {
      i += 1;
    }
  }

  return nPlots === 0;
};

export default canPlaceFlowers;
