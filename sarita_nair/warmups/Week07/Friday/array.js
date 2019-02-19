$(document).ready(function(){
  const reversearray = function(arr){
    const reversearr = arr.reverse();
    return reversearr;
  };

  // const flattenarray = function(arr){
  //   $.map( arr, function(n){
  //    // return n;
  //    return ($.isArray(n) ? $.map(n, flattenarray): n);
  // });
  // };
  const flattenarray = function(arr){
    var multidimensionArray = arr;
    var initialValue = [];

    var flattened = multidimensionArray.reduce(function(accumulator, current) {
        return accumulator.concat(current);
    }, initialValue);
    return flattened;
  };

  // console.log(flattened);
//if currenElem is instanceof Array
// currentElem.constructor == Array

  const arr = [1, 2, 3, 4];
  console.log(reversearray(arr));
  console.log(flattenarray(["Hello", ["World", 42] ]));
  // ["Hello", ["World", 42] ]

});
