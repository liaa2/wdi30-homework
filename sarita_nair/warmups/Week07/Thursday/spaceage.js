const SpaceAge = function(seconds){
  this.yearsOnEarth = seconds / 31557600
  this.earthToOtherPlanets = {
    "Earth" : 365.25,
    "Mercury" : 0.2408467,
    "Venus" : 0.61519726,
    "Mars" : 1.8808158,
    "Jupiter" : 29.447498,
    "Saturn" : 365.25,
    "Uranus" : 84.016846,
    "Neptune" : 164.79132,
  }
  this.yearOnAllPlanets = function(){
    for(const planet in this.earthToOtherPlanets){
      console.log(`${planet} years: ${this.yearsOnEarth()}/${this.earthToOtherPlanets[planet]}`);
    }
  };
  this.yearOnPlanet = function(){
    return this.yearsOnEarth()/this.earthToOtherPlanets[planet];
  };
}

const age = new SpaceAge(1000000000);
age.yearOnAllPlanets();

class orbitalperiod = {
  constructor(seconds){
    this.seconds = seconds
    this.earthToOtherPlanets = {
      "Earth" : 365.25,
      "Mercury" : 0.2408467,
      "Venus" : 0.61519726,
      "Mars" : 1.8808158,
      "Jupiter" : 29.447498,
      "Saturn" : 365.25,
      "Uranus" : 84.016846,
      "Neptune" : 164.79132,
    }
  }
  yearsOnEarth(){
    return this.seconds/;
  }
  yearOnAllPlanets(){
    for(const planet in this.earthToOtherPlanets){
      console.log(`${planet} years: ${this.yearsOnEarth()}/${this.earthToOtherPlanets[planet]}`);
    }
  }
}

//
// const calculateage = function(earthage){
//   $.each(orbitalperiod,function(key,value){
//     const age = 0;
//
//     console.log(`You are ${age} ${key}-years old.`);
//   })
// };
//
// calculateage(1000000000);
