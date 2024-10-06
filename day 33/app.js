//  let fruits=[["mango","apple","banana"],["guava","papaya","lemon"]];
// for(let i = 0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }list

// for(let i = fruits.length-1;i>=0;i--){
//         console.log(i,fruits[i]);
//     }

// let students=[["yash",95.22],["prem",45.9],["sagar",82]]
// for (let i = 0;i<students.length;i++){
//     console.log("information of student :",i+1);
//     for(let j = 0;j<students[i].length;j++){
//         console.log(students[i][j]);
//     }
// }


// let nam="yashwant";
// for(i of nam) {
//     console.log(i);
// }
// console.log(nam.length);



// for(list of fruits){
//     for(fruit of list){
//         console.log(fruit);
//     }
// }



// let todo=[];
// let req=prompt("enter what you want to do");
// while(true){
//     if(req == "quit"){
//         console.log("you quite");
//         break;
//     }

//     if(req=="list"){
//         console.log("--------------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(todo[i]);
//         }
//         console.log("--------------------");
//     }

//     else if(req=="add"){
//        let task=prompt("please enter the task you want you add");
//        todo.push(task);
//        console.log("task added");
//     }
    
//     let req=prompt("enter what you want to do");
// }



// let arr=[1,2,3,4,5,6,2,3];
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i] == 2){
//         arr.splice(i,1);
//     }
    
// }
// console.log(arr);


// let num=1566;
// let count=0;
// let copy =num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);



// let num=15666;
// let sum=0;
// let copy=num;
// while(copy>0){
//     digit=copy%10;
//     sum=sum+digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);


// let num=5;
// let fact=1;
// for (let i=1; i<=num;i++){
  
//    fact=fact*i;
// }
// console.log(fact);



// let arr=[1,2,3,118,9991,222,7777777,8882,0];
// let mn=0;
// for (let i = 0;i<=arr.length;i++){
//     if(mn<arr[i]){
//         mn=arr[i];
//     }
    
// }
// console.log(mn);




let post ={username:"@yashwantkharat5",content:"hello twitter",likes:150,tags:["@y","@k"]};
console.log(post);
console.log(post.likes);
console.log(post.content);
console.log(post.tags[0]);