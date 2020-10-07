const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  var splitExptr = expr.match(/.{10}/g);
  var resultString = "";
  for (var i = 0; i < splitExptr.length; i++) {
    if (splitExptr[i] === "**********") {
      resultString += " ";
    }
    var letterSplit = splitExptr[i].match(/.{2}/g);
    var code = "";
    for (var j = 0; j < letterSplit.length; j++) {
      if (letterSplit[j] !== "00" && letterSplit[j] !== "**") {
        if (letterSplit[j] === "10") {
          code += ".";
        } else {
          code += "-";
        }
      }
    }
    if (code) {
      resultString += MORSE_TABLE[code];
    }
  }
  return resultString;
}

module.exports = {
  decode,
};
