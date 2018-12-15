let cleft = 0;
const catWalk = function() {
  const img = document.getElementsByTagName('img')[0];
  cleft = (img.style.left === undefined) ? 0 : Number((img.style.left).substring(0,img.style.left.indexOf('p')));
  console.log(`${cleft}`);
  if(cleft >= window.innerWidth)
  {
    img.removeAttribute('style');
    //img.setAttribute('style', 'position:absolute;');
    window.clearInterval(stop);
  }
  cleft = Number(cleft) + 10;
  img.setAttribute('style', 'position:absolute;left : ' + cleft + 'px');
  //console.log(`${img.style.left}`);

};
//setInterval(catWalk, 100);
let stop = setInterval(catWalk, 100);
//window.clearInterval(stop);
