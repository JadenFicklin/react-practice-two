// make a palindrome

const palindrome = (param) => {
  let splitParam = param.split("");
  let arr1 = [];
  for (let i = 0; i < splitParam.length; i++) {
    arr1.unshift(splitParam[i]);
  }
  let joinedParam = splitParam.join("");
  let joinedArr1 = arr1.join("");

  if (joinedParam === joinedArr1) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("madam"));
