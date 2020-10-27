/*swap nukbers*/
function swap(){
  num1=document.getElementById('first').value;
   num2=document.getElementById('second').value;
   document.getElementById('result'). innerHTML=[num2,num1];
   }
   /*area of a triangle*/
   function area(){
 basevalue=document.getElementById('side1').value;
 heightvalue=document.getElementById('side2').value;
  area=(basevalue*heightvalue)/2;
document.getElementById('value').innerHTML=area;
}
/*leap year*/
function check(){
  let year=document.getElementById('year').value;
 if((year%100===0)?(year%400===0):(year%4===0))
 alert('leap year');
 else
 alert('not leap year');
  }
  /*multiply and divide values*/
  function multiply(){
 n1= document.getElementById('num1').value;
n2=document.getElementById('num2').value;
document.getElementById('submit').innerHTML=n1*n2;
  
}
function divide(){
 n1= document.getElementById('num1').value;
n2=document.getElementById('num2').value;
document.getElementById('submit').innerHTML=n1/n2;
  }
 