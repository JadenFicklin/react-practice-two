// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  const initialValue = 0;
  let sumArray = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  let arrayAverage = sumArray / array.length;
  if (array.length === 0) {
    return 0;
  } else {
    return arrayAverage;
  }
}

console.log(find_average([1, 2, 3, 4]));
