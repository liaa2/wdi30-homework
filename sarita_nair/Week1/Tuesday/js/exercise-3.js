/*
DrEvil
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

*/

const DrEvil = function(arg)
{
  let result = 'dollars ';
  if(arg === 1000000)
  result += '(pinky)';
  return arg + ' ' + result;
};

/*
MixUp
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/
const mixUp = function(text1,text2){
  let result = text2[0] + text2[1];
  for(var cnttext1 = 2; cnttext1 <= text1.length-1 ;cnttext1++)
  {
      result += text1[cnttext1];
  }
  result += ' ' + text1[0] + text1[1];
  for(var cnttext1 = 2; cnttext1 <= text2.length-1 ;cnttext1++)
  {
      result += text2[cnttext1];
  }
  return result;
};


/*
FixStart
Create a function called fixStart. It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*', except for the first character itself.
You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/
const fixStart = function(arg){
  let result = arg[0];
  for(var cnt = 1; cnt <= arg.length-1 ;cnt++)
  {
      if(arg[cnt] === arg[0])
      result += '*';
      else
      result += arg[cnt];
  }
  return result;
};
/*
Verbing
Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/
const Verbing = function(arg){
  let result = arg;
  if(arg.length >= 3)
  {
    if(arg.substring(arg.length-3,arg.length) !== 'ing')
    result = arg + 'ing';
    else
    result = arg + 'ly';
  }
  return result;
};
/*
Not Bad
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
*/
const notBad = function(arg){
  let result = '';
  if(arg.indexOf('not') != -1 && arg.indexOf('bad') != -1 && (arg.indexOf('not') < arg.indexOf('bad')))
  {
      var argsplit = arg.split(' ');
      for(var cnt=0; cnt <= argsplit.length-1; cnt++)
      {
        if((cnt >= arg.indexOf('not')) && cnt <= arg.indexOf('bad'))
        {
          result += ' good';
          argsplit.pop();
        }
        else
        {
          result += argsplit[cnt];
        }
      }

  }
  else {
    result = arg;
  }
  return result;
};
const callFunctionspart3 = function(){
  var result = DrEvil(1000000);
  var result = mixUp('mix','pod');
  var result = fixStart('babble');
  var result = Verbing('lov');
  //var result = notBad('The Dinner was not that bad.');

  console.log(result);
};
callFunctionspart3();
