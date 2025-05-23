console.log("task 2");

// makeArray, яка приймає три параметри:
// firstArray(масив),
//   secondArray(масив) і
// maxLength(число).

function makeArray(firstArray, secondArray, maxLength) {
  // Повертає новий масив, в якому перші елементи з
  // firstArray, а потім з secondArray. Якщо загальна
  // кількість елементів перевищує maxLength, то
  // повертається новий масив з першими maxLength
  // елементами.
  const newArray = [...firstArray, ...secondArray];
  return newArray.slice(0, maxLength);
}

function makeArrayTwo(firstArray, secondArray, maxLength) {
  let resultArray = firstArray.concat(secondArray);
  return resultArray.slice(0, maxLength);
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

console.log(makeArrayTwo(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArrayTwo(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArrayTwo(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArrayTwo(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArrayTwo(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(
  makeArrayTwo(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
); // []

console.log("end of task 2 ---");
