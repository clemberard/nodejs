export function displayAllElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  return '';
}

export function addNumberFromArray(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

export function addFruit(array, fruit) {
  array.push(fruit);
  return array;
}

export function averageMarks(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}

export function searchElementInArray(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

export function minAndMax(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return { min, max };
}

export function stringWithMoreLetters(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
}