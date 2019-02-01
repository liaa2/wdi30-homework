// version 1
// const allergens = {
//   scorecard: {
//     1: "eggs",
//     2: "peanuts",
//     4: "shellfish",
//     8: "strawberries",
//     16: "tomatoes",
//     32: "chocolate",
//     64: "pollen",
//     128: "cats"
//   },
//
//   getKeys: function(){
//     const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
//
//     console.log(allergyKeys);
//
//     return allergyKeys;
//   },
//
//   getList: function(score) {
//     const keys = this.getKeys()
//
//     let allergies = [];
//
//     for (let i = 0; i < keys.length; i++) {
//       let key = keys[i]
//       // console.log(`key: ${key}, score: ${score}`);
//
//       if(score >= key) {
//         allergies.push(this.scorecard[key])
//
//         // console.log(`${this.scorecard[key]} has been pushed to allergies array`);
//
//         score -= key;
//       }
//     }
//
//     // console.log(allergies);
//
//     return allergies
//   },
//
//   diagnosis: function(score) {
//     const allergyList = this.getList(score);
//
//     console.log(allergyList);
//
//     if(allergyList.length > 0) {
//       console.log(`You are allergic to ${allergyList.join(', ')}`);
//     } else {
//       console.log("You are perfectly healthy");
//     }
//   }
//
// }
//
// allergens.diagnosis(34);
// allergens.diagnosis(0);
// allergens.diagnosis(236);


// version 2

const allergens = {
  "cats": 128,
  "pollen": 64,
  "chocolate": 32,
  "tomatoes": 16,
  "strawberries": 8,
  "shellfish": 4,
  "peanuts": 2,
  "eggs": 1
}

allergiesList = [];

number = 121;

Object.keys(allergens).forEach( function(key)  {
  if (number % allergens[key] < number) {
    console.log(`${number} % ${allergens[key]} is ${number % allergens[key]}`);

    allergiesList.push(key)
    number = number % allergens[key]
    console.log(`new number: ${number}`);
  }
});

if (allergiesList.length > 0) {
  console.log(`You are allergic to: ${allergiesList.join(", ")}`);
} else {
  console.log("You are perfectly Healthy");
}
