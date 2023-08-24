const toEnglishButton = document.getElementById("toEnglishButton");
const toHebrewButton = document.getElementById("toHebrewButton");
const resultLabel = document.getElementById("resultLabel");

const divResultBox = document.getElementById("result-box");

const copyButton = document.getElementById("text-cpy-button");
copyButton.textContent = "העתק";
copyButton.addEventListener("click", copyResultLabel);
document.addEventListener("keydown", (e) => {
  if (e.key === "F2") {
    copyResultLabel(e);
  }
});

toHebrewButton.addEventListener("click", toHebrew);
toEnglishButton.addEventListener("click", toEnglish);
const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", clearInput);

function copyResultLabel(e) {
  e.preventDefault();
  navigator.clipboard
    .writeText(resultLabel.textContent)
    .then(() => {
      copyButton.textContent = "!הועתק";
      setTimeout(() => {
        copyButton.textContent = "העתק";
      }, 1500);
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}

function clearInput() {
  const inputField = document.querySelector("#stringInput");
  inputField.value = "";
  resultLabel.textContent = "";
  divResultBox.classList.add("result-box");
}

function toHebrew(e) {
  e.preventDefault();
  const stringInput = document.querySelector("#stringInput").value;
  console.log(stringInput);
  const switchedString = switchCharacters(stringInput, englishToHebrew);
  resultLabel.textContent = switchedString;
  if (stringInput.length > 0) divResultBox.classList.remove("result-box");
}

function toEnglish(e) {
  e.preventDefault();
  const stringInput = document.querySelector("#stringInput").value;
  console.log(stringInput);
  const switchedString = switchCharacters(stringInput, hebrewToEnglish);
  resultLabel.textContent = switchedString;
  if (stringInput.length > 0) divResultBox.classList.remove("result-box");
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
  Q: "/",
  W: "'",
  E: "ק",
  R: "ר",
  T: "א",
  Y: "ט",
  U: "ו",
  I: "ן",
  O: "ם",
  P: "פ",
  "{": "}",
  "}": "{",
  A: "ש",
  S: "ד",
  D: "ג",
  F: "כ",
  G: "ע",
  H: "י",
  J: "ח",
  K: "ל",
  L: "ך",
  ";": "ף",
  Z: "ז",
  X: "ס",
  C: "ב",
  V: "ה",
  B: "נ",
  N: "מ",
  M: "צ",
  "<": "ת",
  ">": "ץ",
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
