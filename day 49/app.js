// function savetodb(data){
//     return new Promise((ressolve,rejected)=>{
//         let num=Math.floor(Math.random()*10)+1;
//         if(num>4){
//             console.log("data 1 saved");
//         }else{
//             console.log("weak connection. data not saved!!");
//         }
//     })
// }


//    savetodb("hello")
//      .then((res)=>{
//         console.log(savetodb);
//      })
//      .catch((err)=>{
//         console.log(res);
//         console.log(err);
//      })  
    

// let btn=document.querySelector("#dogbtn");
// let url2="https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click",async()=>{
    
//     // let catfact=await getfact();
//     // let fac=document.querySelector("#catfact");
//     // fac.innerText=catfact;

//      let fact=await getfact2();
//      let fac=document.querySelector("#dogfact");
//      fac.setAttribute("src",fact);
    
//     // let fac2=document.querySelector("#dogfact");
//     // fac2.innerText=dogfact;
  
// });
//let url="https://catfact.ninja/fact";


//  async function getfact() {
//         try{
//             let res= await axios.get(url);
//             console.log(res.data.message);
//             return res.data.message;
//         }
//         catch(err){
//             console.log(err);
//             return ("No error");
//         }
// }
// async function getfact2() {
//     try{
//         let res= await axios.get(url2);
//         console.log(res.data);
//         return res.data.message;
//     }
//     catch(err){
//         console.log(err);
//         return ("No error");
//     }
// }
// let url="https://catfact.ninja/fact";

// async function getfact() {
//     try{
//         let res= await axios.get(url);
//         console.log(res.data.fact);
//     }
//     catch(err){
//         console.log(err);
//     }
    // try{
    //     let res= await fetch(url);
    //     console.log(res.json());
    // }
    // catch(err){
    //     console.log(err);
    // }
//}




// let url = "https://icanhazdadjoke.com/";
// async function getjoke() {
//     try{
//         const config={header:{Accept:"application/json"}};
//         let res= await axios.get(url,config);
//         console.log(res.data);
//     }catch(e){
//         console.log(e);
//     }
// }
// getjoke() ;



let url = "http://universities.hipolabs.com/search?name";
let btn=document.querySelector("button");
btn.addEventListener("click", async()=> {
    let country=document.querySelector("input").value;
    console.log(country);

    let colleges=await getcolleges(country);
   show(colleges);
});

function show(colleges) {
    let list=document.querySelectorAll("#list");
    for(col of colleges) {
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
    
}

async function getcolleges(country) {
  try {
    let res=await axios.get(url + country);
    return(res.data);
  }catch(e){
    console.log(e);
  }
    
}
 