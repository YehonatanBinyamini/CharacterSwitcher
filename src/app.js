const toEnglishButton = document.getElementById('toEnglishButton');
const resultLabel = document.getElementById('resultLabel');

// Add event listeners to the buttons
toHebrewButton.addEventListener('click', toHebrew);
toEnglishButton.addEventListener('click', toEnglish);
const clearButton = document.getElementById('clearButton');

// Add event listener to the Clear button
clearButton.addEventListener('click', clearInput);

// Function to clear the input field
function clearInput() {
  const inputField = document.querySelector("#stringInput");
  inputField.value = "";
  resultLabel.textContent = "";
}

// Function to switch characters to Hebrew
function toHebrew(e) {
  e.preventDefault();
  const stringInput = document.querySelector("#stringInput").value;
  console.log(stringInput);
  const switchedString = switchCharacters(stringInput, englishToHebrew);
  resultLabel.textContent = switchedString;
}

// Function to switch characters to English
function toEnglish(e) {
  e.preventDefault();
  const stringInput = document.querySelector("#stringInput").value;
  console.log(stringInput);
  const switchedString = switchCharacters(stringInput, hebrewToEnglish);
  resultLabel.textContent = switchedString;
}


function switchCharacters(string, dictionary) {
  let switchedString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const switchedChar = dictionary[char] || char;
    switchedString += switchedChar;
  }
  return switchedString;
}

const englishToHebrew = {
  q: "/",
  w: "'",
  e: "ק",
  r: "ר",
  t: "א",
  y: "ט",
  u: "ו",
  i: "ן",
  o: "ם",
  p: "פ",
  "[": "]",
  "]": "[",
  a: "ש",
  s: "ד",
  d: "ג",
  f: "כ",
  g: "ע",
  h: "י",
  j: "ח",
  k: "ל",
  l: "ך",
  ";": "ף",
  "'": ",",
  z: "ז",
  x: "ס",
  c: "ב",
  v: "ה",
  b: "נ",
  n: "מ",
  m: "צ",
  ",": "ת",
  ".": "ץ",
  "/": ".",
  "{": "}",
  "}": "{",
};

const hebrewToEnglish = {
  "/": "q",
  "'": "w",
  ק: "e",
  ר: "r",
  א: "t",
  ט: "y",
  ו: "u",
  ן: "i",
  ם: "o",
  פ: "p",
  "[": "]",
  "]": "[",
  ש: "a",
  ד: "s",
  ג: "d",
  כ: "f",
  ע: "g",
  י: "h",
  ח: "j",
  ל: "k",
  ך: "l",
  ף: ";",
  ",": "'",
  ז: "z",
  ס: "x",
  ב: "c",
  ה: "v",
  נ: "b",
  מ: "n",
  צ: "m",
  ת: ",",
  ץ: ".",
  ".": "/",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
  ת: ",",
};
