/*const increasebutton=document.getElementById("increasebutton");
const resetbutton=document.getElementById("resetbutton");
const decreasebutton=document.getElementById("decreasebutton");
const countlabel=document.getElementById("countlabel");
let count = 0;
increasebutton.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decreasebutton.onclick=function(){
    count--;
    countlabel.textContent=count;
}
resetbutton.onclick=function(){
    count=0;
    countlabel.textContent=count;
}*/

//random number generator
/*const min=50;
const max=100;

let randomNum=Math.floor(Math.random()*(min+max))-min;
console.log(randomNum);*/



//   random number 
/*const mybutton=document.getElementById("mybutton");
const mylabel1=document.getElementById("mylabel1");
const mylabel2=document.getElementById("mylabel2");
const mylabel3=document.getElementById("mylabel3");


const min=1;
const max=10;

let randomNum1;
let randomNum2;
let randomNum3;

mybutton.onclick=function(){
    randomNum1=Math.floor(Math.random()* max)+min;
    randomNum2=Math.floor(Math.random()* max)+min;
    randomNum3=Math.floor(Math.random()* max)+min;

    mylabel1.textContent=randomNum1;
    mylabel2.textContent=randomNum2;
    mylabel3.textContent=randomNum3;
}*/


/*let age=18;
 if(age<=18){
    console.log("you are a major");
 }
 else{
    console.log("you are not major");
 }*/

    let age=18;
    let hasvoterid=true;

    if(age>=18){
        console.log("you are old enough to drive");
        if(hasvoterid){
            console.log("you have your voterid");
        }
        else{
            console.log("you donot have your voterid");
        }
    }
        else{
            console.log("you must have 18+ to drive");
        }
    