// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

function minMax(param) {
  const maxNumber = Math.max(...param);
  const minNumber = Math.min(...param);
  return [minNumber, maxNumber];
}

console.log(minMax([1, 2, 3, 4, 5]));
