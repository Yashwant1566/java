// let oldimages=document.getElementsByClassName("oldImg");
// console.dir(oldimages);
// console.log(oldimages[2].src);


// let tagname=document.getElementsByTagName("p")[1].innerText="abss";
// console.dir(tagname);



// console.dir(document.querySelector("p"));
// // console.dir(document.querySelector("#description"));
// console.dir(document.querySelectorAll(".oldImg"));
// // console.dir(document.querySelector("div a"));



// let para=document.querySelector("p");
// console.dir(para);
// console.dir(para.innerText);
// console.dir(para.innerHTML);
// console.dir(para.textContent);
//console.log(para.innerHTML="hi i am <b>yashwant kharat</b>");
// let heading =document.querySelector("h1");
// console.dir(heading);
// console.log(heading.innerHTML="<u>Spider man</u>")



// let img=document.querySelector("img");
// console.log(img);
// console.log(img.getAttribute("id"));
// console.log(img.setAttribute("id","spidermanimg"));
// console.log(img.getAttribute("id"));
// console.log(img.setAttribute("src","assets/creation_1.png"))



// let heading=document.querySelector("h1");
// console.dir(heading);
// heading.style.color="green";
// heading.style.backgroundColor="red";



// let links=document.querySelectorAll(".box a");
// console.dir(links);
// // for(let i=0;i<links.length;i++){
// //     links[i].style.color="green"; 
// // }
// for(link of links){{
//     link.style.color="purple";
// }}



// let heading =document.querySelector("h1");
// console.log(heading.classList);
// console.log(heading.classList.add("yellowbg"));
// console.log(heading.classList);
// // console.log(heading.classList.contains("gresseen"));
// // console.log(heading.classList.toggle("green"));
// // console.log(heading.classList.toggle("green"));
// // console.log(heading.classList);



// let box=document.querySelector(".box");
// // console.dir(box);
// console.log(box.classList);
// box.classList.add("yellowbg");
// console.log(box.classList);



// let box=document.querySelector(".box");
// console.log(box.childElementCount);
// let h4=document.querySelector("h4");
// console.log(h4.parentElement);
// let li=document.querySelector("li");
// console.log(li.parentElement);
// let ul=document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[0].previousElementSibling);
// console.log(ul.children[1].nextElementSibling);
// let img =document.querySelector("img");
// console.log(img.previousElementSibling);
// console.log(img.previousElementSibling.style.color="green");




// let newp=document.createElement("P");
// console.log(newp);
// newp.innerText="hello yashwant,";
// console.dir(newp);
// // 
// let box=document.querySelector(".box");
// console.log(box.appendChild(newp));
// box.append(" how are you");
// box.prepend(" how are you");



// let btn =document.createElement("button");
// btn.innerHTML="new button";
// let p=document.querySelector("p");
// p.insertAdjacentElement("beforeend",btn);
// let body=document.querySelector("body");    
// console.log(body.removeChild(btn));



// let p=document.createElement("P");
// p.innerHTML="hey i am red";
// p.style.color="red";

// let h3=document.createElement("h3");
// h3.innerHTML="hey i am blue h3!";
// h3.style.color="blue";

// let div=document.createElement("div");
// div.style.backgroundColor="pink";
// div.style.borderColor="black";

// let h1=document.createElement("h1");
// h1.innerHTML="i am in div";
// div.appendChild(h1);
// let divp=document.createElement("p");
// divp.innerHTML="ME TOO!";
// div.appendChild(divp);


// let body=document.querySelector("body");
// body.prepend(p);
// body.append(h3);
// body.append(div);



// let body=document.querySelector("body");
// let btn=document.createElement("button");
// btn.innerHTML="Click me!";
// let input =document.createElement("input");

// body.appendChild(input);
// body.appendChild(btn);

// input.setAttribute("placeholder", "username");
// btn.setAttribute("id","btn");

// btn=document.querySelector("#btn");
// btn.classList.add("btnstyle");


// // let body=document.querySelector("body");
// let h1=document.createElement("h1");
// h1.innerHTML="<u>DOM Practice</u>";
// body.append(h1);



// // let body=document.querySelector("body");
// let p=document.createElement("p");
// p.innerHTML="<b>Apna college delta practice";
// body.appendChild(p);

let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onmouseenter=function (){
        console.log("hello");
    };
}


// function sayhello(){
//     alert("Hello Yash");
// }
