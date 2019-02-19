const formatNumber = function(number){
  const formattednumber = `(${$.trim(number.substring(0,3))}) ${$.trim(number.substring(3,6))}-${$.trim(number.substring(6,number.length))}`;
// console.log(number);
  return formattednumber;
}
const getValidphoneNumber = function(number){
  if(number.length < 10)
  return 'Invalid Number';
  if(number.length >= 10)
  {
    if(number.length === 11 && number.substring(0,1) !== "1")
    return 'Invalid Number';
    if(number.length === 10)
     return formatNumber(number);
     // console.log('10');
    if(number.length === 11 && number.substring(0,1) === "1")
     return formatNumber($.trim(number.substring(1,number.length)));

  }

}

const phonenumber = {
  cleanNumber: num => {
    let cleaned = [];
    // let cleaned = "";
    let numerals = "0123456789";
    for(let i = 0; i <= num.length; i++)
    {
      console.log(num[i])
      if(numerals.indexOf(num[i]) !== -1)
      cleaned.push(num[i]);
    }
    cleaned = cleaned.join("");
    console.log(cleaned);
    if(cleaned.length === 11 && cleaned[0] === "1")
      return cleaned.substr(1);
  },
  isValid: num => {
    let cleaned = this.cleanNumber(num);
    if(cleaned.length !== 10){
      return "0000000"
    }
    else {
      return cleaned;
    }
  },
  getFormattedNumber: num => {
    // let cleaned = this.cleanNumber(num);
    // let areaCode = cleaned.substr(0,3);
    const formattednumber = `(${$.trim(num.substring(0,3))}) ${$.trim(num.substring(3,6))}-${$.trim(num.substring(6,num.length))}`;
    return formattednumber;
  }
}
const num1 = "11234566jkdjf455";
phonenumber.cleanNumber(num1);
// const num = getValidphoneNumber('20000000000');
// console.log(num);
