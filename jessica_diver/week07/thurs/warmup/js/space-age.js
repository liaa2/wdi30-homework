// const spaceAge = {
//   orbits: {
//     'mercury': 0.2408467,
//     'venus': 0.61519726,
//     'mars': 1.8808158,
//     'juptier': 11.862615,
//     'saturn': 29.447498,
//     'uranus': 84.016846,
//     'neptune': 164.79132,
//   },
//
//   orbitInSeconds: function (planet) {
//     const seconds = planet * 31557600;
//     return seconds;
//   },
//
//   getKeys: function() {
//     const orbitKeys = Objects.keys(this.orbits).map();
//     return orbitKeys;
//   },
//
//   calculateSpaceAge: function (age) {
//     const keys = this.getKeys
//     for (let i = 0; i < keys.length; i ++) {
//       const yourAge = age / this.orbitInSeconds(key[i]);
//       console.log(`You are ${yourAge} ${this.orbits[key]}-years old.`);
//     }
//   }
// }
//
// console.log(spaceAge.calculateSpaceAge(1000000000));

// constructor method //

// const SpaceAge = function (seconds) {
//   this.yearsOnEarth = seconds / 31557600
//
//   this.earthToOtherPlanets = {
//     Mercury: 0.2408467,
//     Venus: 0.61519726,
//     Mars: 1.8808158,
//     Juptier: 11.862615,
//     Saturn: 29.447498,
//     Uranus: 84.016846,
//     Neptune: 164.79132,
//   }
//
//   this.yearsOnAllPlanets = function () {
//     for (var planet in this.earthToOtherPlanets) {
//       console.log(`You are ${this.yearsOnEarth / this.earthToOtherPlanets[planet]} ${planet}-years old. `);
//     }
//
//   this.yearsOnPlanet = function (planet) {
//     return this.yearsOnEarth / this.earthToOtherPlanets[ planet ]
//   }
//   }
// }
//
// const age = new SpaceAge( 1000000000 );
//
// let p = 'Jupiter'
//
// console.log(`years on ${p} is ${age.yearsOnPlanet(p)}`);



class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthToOtherPlanets = {
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Mars: 1.8808158,
      Juptier: 11.862615,
      Saturn: 29.447498,
      Uranus: 84.016846,
      Neptune: 164.79132,
    }
  }

  yearsOnEarth(){
    return this.seconds / 31557600;
  }

  yearsOnAllPlanets(){
    for (var planet in this.earthToOtherPlanets) {
      console.log(`${planet} years: ${this.yearsOnEarth() / this.earthToOtherPlanets[planet]}`);
    }
  }
}

const age = new SpaceAge( 1000000000 );
age.yearsOnAllPlanets();
