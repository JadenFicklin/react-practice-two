//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(param) {
  const filterParam = param.filter((index) => typeof index == "number");
  return filterParam;
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
