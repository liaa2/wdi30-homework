const pairwaise = function(){
  const arr = [7, 9, 11, 13, 15];
  const num = 20;
  let newarr = [];
  let result = 0;
  $.each(arr, function(key,value){

    let i = 0
    while(i <= arr.length-1)
    {
      // console.log(`${value}-${arr[i]}`);
      if(value + arr[i] === num)
      {
        // newarr.push(value);
        // newarr.push(arr[i]);
        result += key + i;
        value = "";
        arr[i] = "";
      }
      i++;
    }
  });
  return result;
}

console.log(pairwaise());
