// let obj={1:"a",2:"b",cont:"yash",null:"kharat"}
// console.log(obj[1]);



// const student={name:"yashwant",age:18,marks:95.22,city:"takalsing"};
// student.city="pune";
// student.marks="A";
// student.gender="male";



// const classinfo=[ {name:"yashwant",age:18,marks:95.22},{name:"prem",age:19,marks:45},{name:"tushar",age:21,marks:"null"}];
// console.log(classinfo[0].marks);
// console.log(classinfo[1].marks);
// classinfo[1].marks="92";
// console.log(classinfo[1].marks);



// console.log(Math.PI);
// console.log(Math.abs(-8));
// console.log(Math.pow(22, 10));
// console.log(Math.floor(508.4));
// console.log(Math.ceil(7.001));
// let num =console.log(Math.random(1,10));




// num=Math.random();
// console.log(num);
// num=num*10;
// console.log(num);
// console.log("the randon number is :" ,Math.floor(num));

// let num=Math.floor(Math.random() * 10)+1;
// console.log(num);


// let num=Math.floor(Math.random() * 100)+1;
// console.log(num);8




// let max=prompt("enter the max number :");
// let random=Math.floor(Math.random() * max)+1;
// let guess=prompt("enter your number to guess :")

// while(true){
//          if(guess=="quit"){
//             console.log("user quit");
//             break;
//          }
//          if(guess==random) {
//             console.log("yeah!! your guess is right");
//             break ;
//          }
//          else if(guess<random){
//             guess=prompt("hint:your guess was to small .please try again");
//          }
//          else {
//             guess=prompt("hint:your guess was to large .please try again")
//          }

//         }




// let num=Math.floor(Math.random() * 6)+1;
// console.log(""+num);




// let car={name:"fortuner",model:"toyota",color:"white"};
// console.log(car.name);



// let person={name:"yashwant",age:18,city:"pune"};
// person.city="new york";
// person.country="US";
// console.log(person);



// function hello(){
//     console.log("yash");
// }
// hello();
// function print1to5(){
//     for(let i = 0; i <= 5;i++){
//         console.log(i);
//     }
// }
// print1to5();



// function print(){
//     let num=Math.floor(Math.random()*6)+1;
//     console.log(num);
// }
// print();



// function sum(a,b){
//      let s=a+b;
//      console.log(s);
//     }sum(8,5);


// function avg(a,b,c){
//     a=(a+b+c)/3;
//     console.log(a);
// }
// avg(10,20,40)




// function table(a){
//     for(let i=1;i<=10;i++){
//         let t=a*i;
//         console.log(t);
//     }
// }



// function sum(n){
//     let s=0;
//     for(let i = 0; i <= n*n;i++){
//           s=s+i;
//     }
//     console.log(s);
// }


// let str=["hi","hello","by","!"];
// function concat(str){
//     let s;
//     for(let i=0;i<str.length;i++){
//         s=s+str[i];
//     }
//     console.log(s);
// }



// {
//     var a=8;
// }



// let sum=function(a,b){
//     return a+b;
// }
// let hello=function(){
//     console.log("hello");
// }

// function oddeventest(req){
//     if(req=="odd"){
//         return function (n){
//             console.log(!(n%2==0));
//         }
//     }
//     if(req=="even"){
//         return function (n){
//             console.log((n%2==0));
//         }
//     }else{
//         console.log("wrong request");
//     }

// }

// let odd=function(n){
//     console.log((n%2==0));
// }


// let calculator={
//     add:function(a,b){
//     return a+b;
//      },
//     sub:function(a,b){
//         return a-b;
//          },
    
//     mul:function(a,b){
//         return a*b;
//          }
//     };


// let a=8;
// function as(){
//     let a=88;
//     console.log(a);
// }
// as();



// let arr=[1,220,3,114,5,8,9,10,11];
// let num=5;
// function maxnum(){
//     for(let i=0; i<arr.length;i++){
//         if(num<arr[i]){
//           console.log(arr[i]);
//         }
//     }
    
// }
// console.log(maxnum());



// let str="yashwantkharat";
// function getunique(str){
//     let ans="yashk";

//     for(let i=0;i<str.length;i++){
//         let currchar=str[i];
//         if(ans.indexOf(currchar)==-1){
//             ans+=currchar;
//         }
//     }
//     return ans;
// }
// getunique("yk");



// function coun(a,b,c){
//     let country=[a,b,c];
//     for (let i = 0;i<country.length;i++){
//        if(country[i+1].length>country[i].length){
//           console.log(country[i+1]);          
//        }
//     }
// }
// coun("india","unitedstate","dubaiof");



// let str="yashwantkharat";
// function numvo(){
//     let nvo=0;
//     let nco=0;
//     for(let i=0;i<str.length;i++){
//         let currchar=str[i];
//         if(currchar=="a"){
//            nvo++;
//         }
//         else if(currchar=="e"){
//             nvo++;
//          }
//          else if(currchar=="i"){
//             nvo++;
//          }
//          else if(currchar=="o"){
//             nvo++;
//          }
//          else  if(currchar=="u"){
//             nvo++;
//          }
//          else{
//             nco++;
//          }
        
//     }
//     console.log(""+nvo);
//     console.log(""+nco);
// }
// numvo();




function rn(a,b){
    let randomn=Math.floor(Math.random() * b)+a;
    console.log("", randomn);
}
rn(1,5);