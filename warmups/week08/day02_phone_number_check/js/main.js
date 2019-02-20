console.log("loaded");

// You may have noticed in my class demo that the arrow notation was not working
// This is because when you use the "this" keyword with arrow functions
// You are actually referring to window. So it was actually calling something like window.cleaned() which is not a method.
// The work around is to adjust the syntax to look as below.
// Notice the difference now without the colon":" i.e. "cleanNumber (num) {}".
// Apologies for the mix up but it's good to know.

const phoneNumber = {

  // cleanNumber: function(num){
  // below is the same but in es6
  cleanNumber (num) {
    let cleaned = [];
    let numerals = "0123456789";

    for (let i = 0; i < num.length; i++) {
      let currentNum = num[i];
      // console.log(currentNum);

      if (numerals.indexOf(currentNum) !== -1) {
        cleaned.push(currentNum)
      } //if
    } //for

    cleaned = cleaned.join("");
    console.log(cleaned);

    if ((cleaned.length === 11) && (cleaned[0] === "1")) {
      return cleaned.substr(1);
    } else {
      return cleaned;
    }
  },

  isValid (num) {
    let cleaned = this.cleanNumber(num);

    if (cleaned.length !== 10) {
      return "0000000000";
    } else {
      return cleaned;
    }
  },

  getFormattedNumber (num) {
    let cleaned = this.cleanNumber(num);

    let areaCode = cleaned.substr(0, 3);
    let exchangeCode = cleaned.substr(3, 3);
    let remaining = cleaned.substr(6);

    return `(${areaCode}) ${exchangeCode}-${remaining}`
  }
}

const num1 = "112345s67#89mm0"

console.log(phoneNumber.cleanNumber(num1));
console.log(phoneNumber.isValid(num1));
console.log(phoneNumber.getFormattedNumber(num1));
