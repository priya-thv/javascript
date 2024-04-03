

// your code goes here
var a;
let b=2;
console.log(a);
console.log(b);
a=7;
b=a;
console.log(a);
console.log(b);
var c=2*6;
var d=6.5*2.0;
console.log(c);
console.log(d);
  
var stri="i m a\" double quoted \"string\"doule quoted";
console.log(stri);
fullname="priya kumari";
console.log(fullname);
let v=BigInt("1234567");
console.log(v);
// let f=symbol("hello");
// console.log(f);
// object sdata type key value pair
const student={
    age:23,
    fullname:"priya"
}
console.log(student);
console.log(typeof student);
console.log(student.age);
console.log(student['age']);
student['age']=student['age']+1;
console.log(student['age']);
student['fullname']="pri";
console.log(student);
const product={
    fullname:"Parker Jotter Standard CT Ball Pen(black)",
    price:270,
    rating:4,
    offer:5
}
console.log(product);
let l='123'+1
 console.log(l);  //'1231'

 const profile={
    fn:"priya kumari",
    isfollow:false,
    post:195,
    followers:569000,
    following:4,
    about:"enterpenure\napnacollege|exmicrosoft"

 }

 let al=5;
 let bl="5";
 console.log("al==bl",al==bl);
 console.log("al===bl",al===bl);
 //== doesnt check data typr but=== checks
 console.log("al!=bl",al!=bl);
 console.log("al!==bl",al!==bl);

 let mode="dark";
 let color;
if(mode==="dark"){
    color="black";

}
if(mode==="light"){
    color="white";
}
console.log(color);
let age=18;
console.log(age>18?"adult":"notadult");
age>18?console.log("adult"):console.log("notadult");

let num=prompt("enter a no.");
if(num%5===0){
    console.log(num,"is multiple of 5");
}else{
    console.log(num,"is not multiple of 5");
}
for(let a=0;a<5;a++){
    console.log("priya");
}
let sum=0;
let n=prompt("enter a no.");
for(let a=0;a<n;a++){
    sum=sum+a;
    console.log(sum);
}
console.log(sum);
for(var i=0;i<n;i++){
    
    console.log(i);
}
console.log(i);

let i=20;
do{
    console.log("priya");
}while(i<=10);

 let str="priya";
// for of is used for strings and arra only
for(let i of str){
    
    console.log(i);
}

//  for in is used for objects
let student={
     name:"priya",
     age:21,
     statusofgksscholarship:"Won",
     univerisityname:"KAIST university of republic of korea",
};

for(let key in student){
    console.log("key=",key);
    console.log("key=",key,"value=",student[key]);
}

for(let i=1;i<=100;i++){
    if(i%2===0)console.log(i);
    else continue;
}
let game=25;
let count=1;
let usern=prompt("guess the no.");
// prompt always return string
 while(usern!=game){
    usern=prompt("you entered wrong no. guess the no again.");
    count++;
}
console.log("congratulations you guessed the no. in ", count," no. of times");

template litral a special kind of string
let sentence=`priya`;
console.log(sentence[2]);
console.log(typeof sentence);

let obj={
    item:"pen",
    price:10
};

console.log("the price of ",obj.item ,"is" ,obj.price,"rupees");
console.log(`the price of ${obj.item} is ${obj.price} rupees`)

let str="hello world what are doing";
console.log(str.trim());
/*
str.concate(str2);
str.slice(start,end?);
str.replace(oldvalue,newval);
str.replaceAll(oldvalue,newval);  it wil change every occurence of old value too new
str.charAt(indx);

*/

let str1=prompt("enter your full name");
let s="@";
let s2=str1.length;
console.log("your username is"+s +str1 +s2);

let marks=[97,98,96,97,95,98];
// console.log(marks);
// console.log(typeof marks);
// marks[2]=99;
// console.log(marks);
let sum=0;
for(let val of marks){
    sum=sum+val;
  
}
let avg=sum/marks.length;



shift to pop from start
arr.shift("dhokla");
console .log(arr);
console.log(arr.slice(1));
console.log(arr.slice(1,3));
let f=arr.slice();
console.log(f);

let g=marks.splice(2,3,101,102,103);
console.log(marks);
console.log(g);
function myfunction(){
    console.log("hello");
    console.log("i m priya kumari");

}
myfunction();


function my(msg){
    console.log(msg);
}
my("hello i m priya");

 function sum(a,b){
    // param are local variables means block scope
    // console.log(a+b);
    s=a+b;
    
    return s;
    
}

let val=sum(1,150);
console.log(val);

const arrowSum=(a,b)=>{
    console.log(a+b);
}

console.log(arrowSum(3,4));

const printhello=()=>{
    console.log("hello");
}
printhello();

function  str(str1){
    let count=0;
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='a' || str1[i]=='e' ||str1[i]=='o'||str1[i]=='i'||str1[i]=='u' ){
            count++;
        }
    }
    return count;
}

const countv=(str1)=>{
    let count=0;
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='a' || str1[i]=='e' ||str1[i]=='o'||str1[i]=='i'||str1[i]=='u' ){
            count++;
        }
    }
    return count;
}

let arr=[1,2,3,4,5];

arr.forEach(function printval(val){
    console.log(val);
});

arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
})


// higher order function 
// these func or methods are used to return another function or take another function as parameter

let arr1=[1,2,3,4,5];

arr1.map((val)=>{
    console.log(val);
})

let newarr=arr1.map((val)=>{
    return val;
});

let calsquare=(num)=>{
    console.log(num*num);
}

arr1.forEach(calsquare);
// arr1.forEach((val)=>{
//     console.log(val*val);
// });

let arr=[1,2,3,4,5,6,7,8,9];

let evenarr=arr.filter((val)=>{
    if(val%2===0)return val;
});
console.log(evenarr);

let output=arr.reduce((preve,curr)=>{
    return preve+curr;
});
console.log(output);

let marks=[99,93,67,83,85,97,60];

let m=marks.filter((val)=>{
    if(val>=90){
        return val;
    }
});
// console.log(m);

let n=prompt("enter a number:");

let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let o=arr.reduce((preve,curr)=>{
    return preve+curr;
});
console.log(o);

let mul=arr.reduce((preve,curr)=>{
    return preve*curr;
});

console.log(mul);

let heading=document.getElementById("heading");
console.dir(heading);
let headings=document.getElementsByClassName("hii");
console.dir(headings);
console.log(headings);
let para=document.getElementsByTagName("hii");
console.dir(para);

let firstel=document.querySelector("h1");
console.dir(firstel);

let allel=document.querySelector("p");
console.dir(allel);

console.log(firstel.tagName);

div.innertext
// div.innertHTML

let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+" from apna college";

let divs=document.querySelectorAll("div");
// divs[0].innerText="new value";
// divs[1].innerText="new value2";
// divs[2].innerText="new value3";

let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
} 
let id=div.getAttribute("class");
console.log(id);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newclass"));

div.style.backgroundColor="yellow";

div.style.fontSize="26px";

let newbtn=document.createElement("button");
newbtn.innerHTML="clickme";
console.log(newbtn);
newbtn.style.backgroundColor="blue";
newbtn.style.color="white";
// div.append(newbtn);
para.after(newbtn);
newbtn.style.height="25px";

let n=document.createElement("p");
n.innerHTML="hellloo i m fine";
n.style.color="white";
n.style.font="25px";
console.log(n);
n.setAttribute("class");

let n=document.querySelector("p");
let div=document.querySelector("div");
div.onmouseover =()=>{
    console.log("hellllooo");
}

let btn=document.querySelector("button");
btn.onclick=()=>{
    console.log("button was clicked");
    let a=25;
    a++;
    console.log(a);
}

btn.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY)
}

btn.addEventListener("click",()=>{
    console.log("buton was clicked1");
});

btn.addEventListener("click",()=>{
    console.log("buton was clicked2");
});

btn.addEventListener("click",()=>{
    console.log("buton was clicked3");
});
const handler4=()=>{
        console.log("buton was clicked4");
    };

btn.addEventListener("click",handler4);

btn.removeEventListener("click",handler4);

let moonbtn=document.querySelector(".moon");
let body=document.querySelector("body");
let currmoon="light";
moonbtn.addEventListener("click",()=>{
   if(currmoon==="light"){
    currmoon="dark";
    // document.querySelector("body").style.backgroundColor="black";
     body.classList.add ("dark");
     body.classList.remove ("light");   
    }else{
    currmoon="light";
    // document.querySelector("body").style.backgroundColor="pink";
    body.classList.add ("light");  
    body.classList.remove ("dark");   
    }
});
let div=document.querySelectorAll("div");
let box=document.querySelector(".box")
box.addEventListener("onmouseover",()=>{
    div.forEach((div)=>{
        if(color==="blue"){
            div.classList.add("yellow");
            div.classList.remove("blue");
        }
        else{
            
//             div.classList.add("blue");
//             div.classList.remove("yellow");
//         }
//     });
   
// });

class toyotacar{
    constructor(brand,mileage){
        console.log("creating a new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){

    }

    stop(){

    }
    setbrand(brand){
        this.brandname=brand;
    }
}

let fortuner=new toyotacar("fortuner",10);
// fortuner.setbrand("fortuner");
console.log(fortuner)
let lexus=new toyotacar("lexus",12);
console.log(lexus);

class parent{
    constructor(name){
        this.species="homosapiens";
        this.name=name;
    }
    hello(){
        console.log("hello");
    }
    eat(){
        console.log("eat before solving ");

    }
}

class child extends parent{
    constructor(branch){
        // to invoke parent class constructor
        super(name); 
        this.branch=branch;
    }
    work(){
        super.hello();
        super.eat();
        console.log("solve problems and sleep");
    }
}
let enjobj=new child("chemical");
enjobj.name="priya";

let obj=new child();


let data="secret info";
class user{
    // this is property
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    // fname(name){
    //     this.name=name;
    // }
    // email(email){
    //     this.email=email;
    // }

    // this is method
    viewdata(){
        console.log("data is", data);
    }
}

let enj=new user();
enj.name="priya";
enj.email="priyak22222@gmail.com";
let r=new user("tina","tina2@gmail.com");

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data="some new value";
    }
}

let admin1=new admin("neha","n2@gmail.com");

let a=5;
let b=15;
console.log(a+b);
console.log(a+b);
console.log(a+b);
try{
    console.log(a+c);
}catch(err){
    console.log(err);
}


console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);



var minutes = 25;
var sec = "00";
var min_interval;
var sec_interval;

var pausedMinutes; // Variable to store remaining minutes when paused
var pausedSeconds; // Variable to store remaining seconds when paused

var smin = 5;
var sseco = "00";
var ssminInterval;
var ssecInterval;

function template() {
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("second").innerHTML = sec;
}

function updateCountdown() {
    if (minutes > 0 || sec > 0) {
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("second").innerHTML = sec;
    } else {
        document.getElementById("min").innerHTML = smin;
        document.getElementById("second").innerHTML = sseco;
    }
}

function start() {
    minutes = 24;
    sec = 59;
    updateCountdown();

    min_interval = setInterval(updateMinutes, 60000);
    sec_interval = setInterval(updateSeconds, 1000);
}

function updateMinutes() {
    minutes--;
    updateCountdown();
}

function updateSeconds() {
    if (sec > 0) {
        sec--;
    } else {
        sec = 59;
    }
    updateCountdown();
}

function short() {
    smin = 4;
    sseco = 59;
    updateCountdown();

    ssminInterval = setInterval(smint, 60000);
    ssecInterval = setInterval(ssecd, 1000);

    function smint() {
        smin--;
        updateCountdown();
    }

    function ssecd() {
        sseco--;
        updateCountdown();
    }
}

function handleButtonClick() {
    window.location.href = 'index2.html';
}


let minutesElement = document.getElementById("min");
let secondsElement = document.getElementById("second");
let startButton = document.querySelector(".image-button1");

function template() {
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = sec;
}

var sec = "00";


function setInitialMinutes() {
    // Use prompt to get user input
    var userInput = prompt("Enter initial minutes:", "25");

    // Convert user input to a number
    var initialMinutes = parseInt(userInput);

    // Check if the input is a valid number
    if (!isNaN(initialMinutes)) {
        // Set the initial minutes
        minutes = initialMinutes;
        // Update the display
        minutesElement.innerHTML = minutes;
    } else {
        // Alert the user about invalid input
        alert("Invalid input. Please enter a number.");
    }
}

setInitialMinutes();



function start() {
        minutes = 24;
        sec = 59;
        updateCountdown();
    
        min_interval = setInterval(updateMinutes, 60000);
        sec_interval = setInterval(updateSeconds, 1000);
    }
    
    function updateMinutes() {
        minutes--;
        updateCountdown();
    }
    
    function updateSeconds() {
        if (sec > 0) {
            sec--;
        } else {
            sec = 59;
        }
        updateCountdown();
    }


callback function

function sum(a,b){
    console.log(a+b);
}

function cal(a,b,sumCallback){
    sumCallback(a,b);
}
cal(4,5,sum);

function getdata(dataid,getnextdata){
    setTimeout(() => {
       console.log("data : ",dataid);
       if(getnextdata){
           getnextdata();
       }
    }, 2000);
}

getdata(1,()=>{
    getdata(2);
});

function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data : ",dataid);
            resolve("success");
            if(getnextdata){
                getnextdata();
            }
         }, 5000);
    })
   
}

let promise=new Promise((resolve,reject)=>{
    console.log("Hii i m promise"); //pending state
    // resolve(123); //fulfilled state
    reject("some error");  //reject staate
});

const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        // resolve("success");
        reject("error");
    });
};

let promise=getpromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
});

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data 1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data 2");
            resolve("success");
        }, 4000);
    });
}


console.log("fetching data 1");
let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2");
    let p2=asyncFunc2();
        p2.then((res)=>{
        console.log(res);
    });
// });


promise chain

asyncFunc()
    .then((res)=>{
        return asyncFunc2();
    })
    .then((res)=>{
        console.log("completed");
    });

callback hell <<< promise chain <<< async await

async function hello(){
    console.log("hello");
}

hello();

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getweatherdata(){
    await api();
    await api();
}


const url="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getfacts=async()=>{
    console.log("getting data...");
    let response=await fetch(url);
    console.log(response);
    let data=await response.json();
    factpara.innerText=data[0].text;
};

function getfacts(){
    fetch(url).then((response)=>{
         return response.json();
    }).then((data)=>{
       console.log(data);
       factpara.innerText=data[0].text;
    });
}

btn.addEventListener("click",getfacts);

