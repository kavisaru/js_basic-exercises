/*sum value*/
function value(a,b){
  return(a===15||b===15||a+b===15||Math.abs(a-b)===15);
}
console.log(value(15,6));
console.log(value(6,9));
console.log(value(4,10));
/*string concatenate*/
function concate(str1,str2){
  const val=Math.min(str1.length,str2.length);
  return str1.substring(str1.length-val)+str2.substring(str2.length-val);
}
console.log(concate('hi','bye'));
/*three numbers same*/
function threevalues(x,y,z){
  if(x==y&&y==z){
  return 30;
  }
  if(x==y||y==z||z==x)
  {
    return 40;
  }
  return 20;
  }
console.log(threevalues(3,3,3));
console.log(threevalues(3,6,6));
console.log(threevalues(7,8,9));
/*last digit same*/
function digit(x,y,z){
  if((x>0)&&(y>0)&&(z>0))
  {
    return (x%10==y%10&&y%10==z%10&&z%10==x%10)
  }
  else 
  return false;
}
console.log(digit(100,200,300));
console.log(digit(-20,30,400));
/*add two digits*/
function add(n){
  return n%10+Math.floor(n/10);
}
console.log(add(20));
/*convert hrs and mins*/
function min(num){
  var hours=Math.floor(num/60);
  var mins=num%60;
  return hours+":"+mins;
}
console.log(min(150));