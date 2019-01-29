// version 1
const allergens = {
  scorecard: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  },

  getKeys: function(){
    const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
    // console.log(allergyKeys);

    return allergyKeys; //[128, 64, 32, 16, 8, 4, 2, 1]
  },

  getList: function(score){
    const keys = this.getKeys(); //[128, 64, 32, 16, 8, 4, 2, 1]

    let allergies = [];

    for( let i = 0; i < keys.length; i++ ){
      let key = keys[i]
      console.log(`key: ${key}, score: ${score}`);

      if (score >= key) {
        allergies.push(this.scorecard[key]);

        console.log(`${this.scorecard[key]} has been pushed to allergies array.`);
        score -= key

        console.log(`new score is ${score}.`);
      }
    }
    // console.log(allergies);
    return allergies; //["chocolate", "peanuts"]
  },

  diagnosis: function(score){
    const allergyList = this.getList(score); //["chocolate", "peanuts"]

    if (allergyList.length > 0) {
      console.log(`You are allergic to ${allergyList.join(", ")}`);
    } else {
      console.log("You are impervious.");
    }
  }
};

allergens.diagnosis(34);
allergens.diagnosis(0);

// version 2
const allergies = {
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

Object.keys(allergies).forEach(function (key) {
   if (number % allergies[key] < number) {
     console.log(`${number} % ${allergies[key]} is ${number % allergies[key]}`);
     allergiesList.push(key)
     number = number % allergies[key]
     console.log(`new number: ${number}`);
   };
});

if (allergiesList.length > 0) {
  console.log(`You are allergic to: ${allergiesList.join(", ")}`)
} else {
  console.log("You are amazing")
};
