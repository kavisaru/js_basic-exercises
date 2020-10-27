/*triple the sum*/
function triple(a,b){
  if(a==b)
  return (a+b)*3;
  else 
  return (a+b);
}
console.log(triple(4,3));
console.log(triple(3,3));
/*difference*/
function diff(n){
  if(n<=19)
  return(19-n);
  else
  return (n-19)*3;
}
console.log(diff(20));
console.log(diff(12));
/*sum*/
function sum(a,b){
  return ((a==50)||(b==50)||(a+b==50));
}
console.log(sum(50,50));
console.log(sum(20,50));
console.log(sum(20,30));
console.log(sum(10,20));
/*positive or negative*/
function find(a,b){
  if((a<0&&b>0)||(a>0&&b<0))
  return true;
  else
  return false;
}
console.log(find(-2,-3));
/*string check*/
function check(str){
  if(str===null||str===undefined||str.substring(0,3)==='cho'){
   return str;
  }
  else
  return "cho"+str;
}
console.log(check("colate"));
/*remove string*/
function remove(str,pos){
  p1=str.substring(0,pos);
  p2=str.substring(pos+1,str.length);
  return (p1+p2);
}
console.log(remove("chocolate",2));
console.log(remove("chocolate",5));
/*string value added front and back*/
function front_back(str){
  first=str.substring(0,1);
  return first+str+first;
}
console.log(front_back('cba'));
/*positive number Multiple of 7 or 3*/
function test37(x){
  if(x%3==0||x%7==0)
  return true;
  else
  return false;
}
console.log(test37(22));
console.log(test37(12));
/*string value added back*/
function back(str){
  if(str.length>=4){
    str_len=4;
    back=str.substring(str.length-3);
    return back+str+back;
  }
  else
  return false;
}
console.log(back('qbac'));
/*start some value*/
function start(str){
  if(str.length<4){
    return false;
  }
  front=str.substring(0,4);
  if(front=='java'){
    return true;
  }
  else
  return false;
}
console.log(start('javascript'));
console.log(start('php'));
/*within range using 2 values*/
function range(a,b){
  if((a>=50&&a<=99)||(b<=50&&b>=99))
  return true;
  else
  return false;
}
console.log(range(52,85));
console.log(range(100,109));
/*within range using 3 values*/
function range1(a,b,c){
  if((a>=50&&a<=99)||(b>=50&&b<=99)||(c>=50&&c<=99))
  return true;
  else
  return false;
}
console.log(range1(52,85,60));
console.log(range1(100,109,120));
/*largest value*/
function large(x,y,z){
  value=0;
  if(x>y)
  {
    value=x;
  }
  else{
 value=y;
}
if(z>value){
  value=z;
}
return value;
}
console.log(large(30,50,80));