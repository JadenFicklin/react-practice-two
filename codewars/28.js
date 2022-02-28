// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(param) {
  arr1 = [];
  const lowerText = param.toLowerCase();
  const splitText = lowerText.split("");
  for (let i = 0; i < splitText.length; i++) {
    if (splitText[i] === "a") {
      arr1.push(1);
    } else if (splitText[i] === "b") {
      arr1.push(2);
    } else if (splitText[i] === "c") {
      arr1.push(3);
    } else if (splitText[i] === "d") {
      arr1.push(4);
    } else if (splitText[i] === "e") {
      arr1.push(5);
    } else if (splitText[i] === "f") {
      arr1.push(6);
    } else if (splitText[i] === "g") {
      arr1.push(7);
    } else if (splitText[i] === "h") {
      arr1.push(8);
    } else if (splitText[i] === "i") {
      arr1.push(9);
    } else if (splitText[i] === "j") {
      arr1.push(10);
    } else if (splitText[i] === "k") {
      arr1.push(11);
    } else if (splitText[i] === "l") {
      arr1.push(12);
    } else if (splitText[i] === "m") {
      arr1.push(13);
    } else if (splitText[i] === "n") {
      arr1.push(14);
    } else if (splitText[i] === "o") {
      arr1.push(15);
    } else if (splitText[i] === "p") {
      arr1.push(16);
    } else if (splitText[i] === "q") {
      arr1.push(17);
    } else if (splitText[i] === "r") {
      arr1.push(18);
    } else if (splitText[i] === "s") {
      arr1.push(19);
    } else if (splitText[i] === "t") {
      arr1.push(20);
    } else if (splitText[i] === "u") {
      arr1.push(21);
    } else if (splitText[i] === "v") {
      arr1.push(22);
    } else if (splitText[i] === "w") {
      arr1.push(23);
    } else if (splitText[i] === "x") {
      arr1.push(24);
    } else if (splitText[i] === "y") {
      arr1.push(25);
    } else if (splitText[i] === "z") {
      arr1.push(26);
    }
  }

  const joinArray = arr1.join(" ");
  return joinArray;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
