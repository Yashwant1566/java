// let btns=document.querySelectorAll("button");
// for (btn of btns){
//     btn.addEventListener("click", sayhello);
//     btn.addEventListener("click", from);
//     btn.addEventListener("click", function(){
//         console.log("double click done");
//     });

// }
// function sayhello(){
//     alert("hello Yashwant");
// }
// function from(){
//     alert("apna college");
// }



// let btn=document.querySelector("button");


// btn.addEventListener("click", function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getrandomcolor();
//     h3.innerText=randomColor;
//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
//     console.log("color udated");
// });

// function getrandomcolor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }




// let p=document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("p clicked");
// });
// let box=document.querySelector("div");
// box.addEventListener("mouseenter",function(){
//   console.log("hello");
// })



// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let div=document.querySelector("div");
// p.addEventListener("mouseenter",changecolor);
// h1.addEventListener("mouseenter",changecolor);
// div.addEventListener("mouseenter",changecolor);
// function changecolor(){
//     this.style.color="green";
//     console.log("hello yashwant");
// }



// let p=document.querySelector("p");
// p.addEventListener("dblclick",function(e){
//     console.log(e);
// })



// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(e){
//     console.log(e.keyCode);
//     // console.log("code =",inp.code);
    // if(e.code=="ArrowDown"){
    //     console.log("charector moves forward");
    // }
    // else if(e.code=="ArrowUp"){
    //     console.log("charector moves up");
    // }
    // else if(e.code=="ArrowLeft"){
    //     console.log("charector moves left");
    // }
    // else if(e.code=="ArrowRight"){
    //     console.log("charector moves right");
    // }
    // else{
    //     console.log("enter correct key");
    // }
// });



// let form=document.querySelector("form");
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     let inp=form.elements[0].value;
//     let password=form.elements[1].value;
// //    let inp=document.querySelector("#user");
//    // console.log(inp.value);
// //    let password=document.querySelector("#pass");
//    // console.log(password.value);
//    alert(`hi ${inp} your password is set to ${password}.`);
// })



// let form=document.querySelector("form");
// form.addEventListener("input",function(e){
//     e.preventDefault();
//     console.log("user changed");
//     console.log("final value = ",this.elements[0].value);
// })



// let inp=document.querySelector("input");
// let p=document.querySelector("p");
// inp.addEventListener("input",function(e){
//     console.log(inp.value);
//    // p.innerText=inp.value;

// })



// let btn=document.createElement("button");
// let body=document.querySelector("body");
// body.append(btn);
// btn.innerHTML="tap to change my color ";
// btn.onclick=function(){
//     btn.style.backgroundColor="green";
// }.


// let inp=document.querySelector("input");

// inp.addEventListener("input",function(e){
//     console.log(e.keyCode);
//     // let h2=document.querySelector("h2");
//     // h2.innerText=inp.value;
    
// });



// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// inp.addEventListener("input",function(e){
//     console.log(e.keyCode);
//     // let h2=document.querySelector("h2");
//     // h2.innerText=inp.value;
    
// });
 
// let form=document.querySelector("form");
// form.addEventListener("input",function(e){
//     let inp=document.querySelector("input");
//     e.preventDefault();
//     console.log(inp.value);
//     console.log(e.keyCode);
// });


// let h1=document.querySelector("h1");
// h1.addEventListener("keypress", function() {
//      h1.style.color = "green";
// })
// let inp=document.querySelector("input");
// inp.addEventListener("keypress",function(e){
//     e.preventDefault();
//     console.log(inp.value);
// });


// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

//  div.addEventListener("click",function(e){
//     console.log("div was clicked");
//  });
//  ul.addEventListener("click",function(e){
//     e.stopPropagation();
//     console.log("ul was clicked");
//  });
//  for(li of lis){
//     li.addEventListener("click",function(e){
//         e.stopPropagation();
//         console.log("lis was clicked");
//      });
//  }



// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");
// btn.addEventListener("click",function(e){
//     let item=document.createElement("li");
//     console.log(inp.value);
//     item.innerText=inp.value;

//     let delbtn=document.createElement("button");
//     delbtn.innerText="delete";
//     delbtn.classList.add("delete");

//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     inp.value="";
    
// });
// let delbtns=document.querySelectorAll(".delete");
//   console.log(delbtns);
// for (delbtn of delbtns) {
    // delbtns[1].addEventListener("click",function(){
    //     console.log("delete");
    // });
// } 



let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function () {
let item = document.createElement("li");
item.innerText=inp.value;

let delBtn = document.createElement("button");
delBtn.innerText = "delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);
ul.appendChild(item);
inp.value = "";
});

let delBtns= document.querySelectorAll(".delete"); for (delBtn of delBtns) {
    delBtn.addEventListener("click", function () {
         console.log("element deleted")
});
}