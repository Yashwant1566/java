// let h1=document.querySelector("h1");
// function changecolor(color,deley,nexotcolorchange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nexotcolorchange){
//             nexotcolorchange();
//         }
//     },deley);
// }
// // changecolor("red",1000,()=>{
// //     changecolor("orange",1000,()=>{
// //         changecolor("green",1000)
// //     })
// // });

// for(let i=990;i<=1000;i++){
//     let red=Math.floor(Math.random() * 255);
//     let green=Math.floor(Math.random() * 255);
//     let blue=Math.floor(Math.random() * 255);
//     let color=`rgb(${red},${green},${blue})`;
//     console.log(color);
//     changecolor(color,i);
//     console.log("color changed");
// }

// let h1=document.querySelector("h1");
// h1.style.color="rgb(0,100,0)";



// function savetodb(data,success,failure){
//     let internate=Math.floor(Math.random()*10)+1;
//     if(internate>4){
//        success();
//     }else{
//         failure();
//      }
// }
// savetodb("yashwant",()=>{
//     console.log("Data is saved");
//     savetodb("hello",
//     ()=>{
//         console.log("hello yash your second data was stored");
//         savetodb("hello2",()=>{
//             console.log("third success")
//         },()=>{
//             console.log("third failure")
//         });
//     },
//     ()=>{
//         console.log("weak connection your second data was not stored ");
//     });
// },
// ()=>{
//     console.log("Data is not saved");
// });

// function savetodb(data){
//     return new Promise((ressolve,reject)=>{
//         let internate=Math.floor(Math.random()*10)+1;
//         if(internate>4){
//             ressolve("success data was saved");
//          }else{
//             reject("failure week connection ");
//           }
//     });
    
// }
// // let req=savetodb("hello");
// // req
// //   .then(()=>{
// //     console.log("success");
// //     console.log(req);
// //     })
// //   .catch(()=>{
// //     console.log("data not saved");
// //     console.log(req);
// // });

// savetodb("hello")
//  .then((result)=>{
//     console.log("data 1 saved");
//     console.log("result of promise : ",result);
//     return savetodb("hello");
//     })
//  .then((result)=>{
//         console.log("data 2 saved");
//         console.log("result of promise :",result);
//         return savetodb("hellvvo");
//     })
//  .then((result)=>{
//         console.log("data 3 saved");
//         console.log("result of promise :",result);
//     })
//  .catch((error)=>{
//     console.log("promise rejected");
//     console.log("error of promise :",error);
//  })



// let h1=document.querySelector("h1");
// function changecolor(color,deley){
//     return new Promise((ressolve,rejected)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//            ressolve("color changed succesfully");
//         },deley);
//     });
    
// }

// changecolor("red",1000)
// .then(()=>{
//     console.log("red");
//     return changecolor("pink",1000);
// })
// .then(()=>{
//     console.log("pink");
//     return changecolor("orange",1000);
// })
// .then(()=>{
//     console.log("orange");
//     return changecolor("red",1000);
// })
// .then(()=>{
//     console.log("red");
//     return changecolor("pink",1000);
// })
// .then(()=>{
//     console.log("pink");
//     return changecolor("orange",1000);
// })
// .then(()=>{
//     console.log("orange");
//     return changecolor("orange",1000);
// })
// .catch((err)=>{
//     console.log("error");
// })




// async function greet() {
//    throw "some bhangar error";
//     return "hello";
// }
// greet()
// .then((result)=>{
//     console.log("promise was ressolved");
//     console.log("result was",result);
// })
// .catch((error)=>{
//     console.log("error was : ",error);
// })




// function getnum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }
// async function demo() {
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     getnum();

// }
// demo();


// let h1=document.querySelector("h1");
//  function changecolor(color,deley){
//     return new Promise((ressolve,rejected)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//            ressolve("color changed succesfully");
//         },deley);
//     });
    
// }

// async function demo() {
//         await changecolor("red",1000);
//     await changecolor("blue",1000);
//     await changecolor("green",1000);
//     changecolor("pink",1000);
// }
// demo();



// let h1=document.querySelector("h1");
//  function changecolor(color,deley){
//     return new Promise((ressolve,rejected)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             if(num>5){
//                 rejected("promise rejected")
//             }
//             h1.style.color=color;
//             console.log(`color changed to ${color}`);
//            ressolve("color changed succesfully");
//         },deley);
//     });
    
// }

// async function demo() {
//         try{
//             await changecolor("red",1000);
//             await changecolor("blue",1000);
//             await changecolor("green",1000);
//             changecolor("pink",1000);
//         }
//         catch(e){
//             let a=5;
//             console.log(a);
//             console.log(e);
//         }
   
// }
// demo();




// let student={
//     id: 1,
//     name: "yashwant",
//     marks:95
// }

// let jdata='{"id":1,"name":"yashwant","marks":95}'
// console.log(JSON.parse(jdata));




// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//    return res.json();
// })
//  .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
//  })
//  .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
//  })

// .catch((err)=>{
//     console.log(err);
// }
// )

let url="https://catfact.ninja/fact";
async function getfact() {
    try{
        let res=await fetch(url);
        // let data=await res.json();
         console.log(res.json());
         //console.log(data.fact);
    }
    catch(e){
        console.log("error is",e);
    }
    
}