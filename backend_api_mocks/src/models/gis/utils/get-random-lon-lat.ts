export const getRandomLonOrLat = (min: number, max: number) => {
  const difference = max - min;
  const randomNumber = (max) => {
    return Math.random() * max;
  };
  const minFirstPart = Number(min.toString().split('.')[0]); //37;
  const maxFirstPart = Number(max.toString().split('.')[0]); //37;
  let firstPart =
    Math.round(Math.random() * (maxFirstPart - minFirstPart)) + minFirstPart;
  const minLastPart = min.toFixed(5).toString().split('.')[1]; //6056432991826;
  const maxLastPart = max.toFixed(5).toString().split('.')[1]; //6056432991826;

  const diffLastPart = difference.toFixed(5).toString().split('.')[1]; //6056432991826;
  const zeroPointDiffLastPart = randomNumber(
    Number('0' + '.' + diffLastPart),
  ).toString();

  let lastPart = Number(zeroPointDiffLastPart).toFixed(5).toString().split('.')[1];

  if (firstPart === maxFirstPart && firstPart !== minFirstPart) {
    lastPart = randomNumber(Number('0' + '.' + maxLastPart))
      .toString()
      .split('')[1];
  } else {
    const sumRandomWithMin =
      Number('0' + '.' + lastPart) + Number('0' + '.' + minLastPart);
    if (sumRandomWithMin > 1) {
      firstPart = firstPart + 1;
    }
    lastPart = sumRandomWithMin.toString().split('.')[1];
  }
  return Number(firstPart + '.' + lastPart);
};
