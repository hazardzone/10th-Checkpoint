// String Manipulation Functions

function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseStringHandler() {
  const str = document.getElementById("reverseInput").value;
  document.getElementById("reverseResult").textContent = reverseString(str);
}

function countCharacters(str) {
  return str.length;
}

function countCharactersHandler() {
  const str = document.getElementById("countInput").value;
  document.getElementById("countResult").textContent = countCharacters(str);
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function capitalizeWordsHandler() {
  const str = document.getElementById("capitalizeInput").value;
  document.getElementById("capitalizeResult").textContent =
    capitalizeWords(str);
}

// Array Functions

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function findMaxMinHandler() {
  const arr = document
    .getElementById("arrayInput")
    .value.split(",")
    .map(Number);
  const max = findMax(arr);
  const min = findMin(arr);
  document.getElementById(
    "maxMinResult"
  ).textContent = `Max: ${max}, Min: ${min}`;
}

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function sumOfArrayHandler() {
  const arr = document
    .getElementById("arrayInput")
    .value.split(",")
    .map(Number);
  const sum = sumOfArray(arr);
  document.getElementById("sumResult").textContent = `Sum: ${sum}`;
}

function filterArray(arr, condition) {
  return arr.filter(condition);
}

function filterArrayHandler() {
  const arr = document
    .getElementById("filterInput")
    .value.split(",")
    .map(Number);
  const condition = (num) => num > 5; // Example filter condition
  const filtered = filterArray(arr, condition);
  document.getElementById("filterResult").textContent = `Filtered: ${filtered}`;
}

// Mathematical Functions

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function factorialHandler() {
  const n = parseInt(document.getElementById("factorialInput").value);
  const result = factorial(n);
  document.getElementById(
    "factorialResult"
  ).textContent = `Factorial: ${result}`;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPrimeHandler() {
  const num = parseInt(document.getElementById("primeInput").value);
  const result = isPrime(num);
  document.getElementById("primeResult").textContent = result
    ? `${num} is Prime`
    : `${num} is Not Prime`;
}

function fibonacciSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

function fibonacciSequenceHandler() {
  const n = parseInt(document.getElementById("fibonacciInput").value);
  const result = fibonacciSequence(n);
  document.getElementById(
    "fibonacciResult"
  ).textContent = `Fibonacci: ${result.join(", ")}`;
}
