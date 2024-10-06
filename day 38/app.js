 let arr=[1,2,3,4,5,6,7];
let print=function (e){
    console.log(e);
}
arr.forEach(print);



// arr.forEach(function(x){
// //     console.log(x);
// // });
// arr.forEach((arr)=>{
//     console.log(arr);
// });



//let arr=[{name:"yashwant",marks:95.22},{name:"tushar",marks:84},{name:"prem",marks:45}];
// // console.log(arr);
// arr.forEach((arr)=>{
//     console.log(arr.tushar);
// });



// // let arr = [1,2,3,4,5];
// let sqr= arr.map((el)=>{
//      return el.marks/10;
// });
// console.log(sqr);



//  let arr = [1,82,83,44,95];
// let sqr= arr.filter((el)=>{
//     return (el<5);
// }
   
// );
// console.log(sqr);



// let arr = [1,82,83,44,95];
// let sor= arr.every((el)=>
//      (el>0));
// console.log(sor);




// let arr = [1,82,83,44,95];
// let sor= arr.some((el)=>
//      (el<0));
// console.log(sor);




// let arr = [1,82,83,44,95];
// let sum=arr.reduce((res,el)=>(res*el));
// console.log(sum);   


// let arr = [1,82,80,144,10];
// let sum=arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(sum); 



// let max=-1;
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i+1]>arr[i]){
//         max=arr[i+1];
//     }else{
//         max=arr[i];
//     }
// }
// console.log(max);



// let mul=arr.every((el)=>(el%10==0));
// console.log(mul);


//  let arr = [1,82,800,0.5,144,10];
// function getmin(arr){
//     let min=arr.reduce((max,el)=>{
//         if(el>max){
//             return max;
//         }else{
//             return el;
//         }
//     });
//     return min;
// }


// 
// function sum(a,b=5){
//     return a+b;
// }
// console.log(sum(2,55));
 


// let a="yashwant";
// console.log(a[2]);



// let a="yashwant";
// console.log(...a);
// let arr=[1,2,3,4,5,0.5,6,4,78,9];
// console.log(Math.min(...arr));



// let arr=[1,2,3,4,5,0.5,6,4,78,9];
// // let newarr=[...arr];
// // console.log(newarr);
// // let a=[..."yashwant"];
// // console.log(a);
// let arr2=[10,20,30,40];
// let newarr=[...arr,...arr2];
// console.log(newarr);



// let data={mail:"@yashwantkharat",password:"yash"};
// let datacopy={...data,id:123};


// function sum(...args){
//     return args.reduce((sum,el)=>sum+el);
// }



// let names=["yash","prem","tushar","shubham"];
// let [winner,runnerup,...others]=names;



// let student={name:"yash",age:18,username:"@yash",password:"abcd"};
// let {username:user,password:pass} = student;



 //let arr = [1,2,3,4,5,6];
//  let sqr=arr.map((el) => 
//      (el*el));
//  console.log(sqr);

//  let sum=arr.reduce((sum,el) => (sum+el));
//  console.log(sum);

//  let avg=arr.reduce((sum,el) => (sum+el));
//  console.log(sum/arr.length);



// let newarr=arr.map((el)=>{
//     return(el+5);
// });
// console.log(newarr);



// let arr=["a","b","c","d","e","f"];
// let newarr=arr.map((el)=>el.toUpperCase()
// );
// console.log(newarr);
// // let newarr=arr.map((string)=>string.toUpperCase());
// // console.log(newarr);



// let mergeobj =(obj1,obj2) => ({...obj1, ...obj2});
// mergeobj({a:1,b:2},{c:3,d:4});
// console.log(mergeobj());
// let even={one:1,two:2};
// let odd={three : 3,four:4};
// let evenodd=[...even,...odd];



// let mo=(o1,o2)=>({...o1,...o2});