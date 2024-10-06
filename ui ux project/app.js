let fdiv=document.querySelector(".facilities");
let fbtn=document.querySelector("button");
fbtn.addEventListener("click", function(){
   // fh3.style.backgroundColor="aqua";
   
    fbtn.style.color = "green";
    let ful=document.querySelector("ul");
    let fli1=document.createElement("li");   
    ful.appendChild(fli1);
    fli1.innerHTML="luxuries rooms with or without ac";
    let fli2=document.createElement("li");   
    ful.appendChild(fli2);
    fli2.innerHTML="Our hotel consist of garden and swimming pool";
    let fli3=document.createElement("li");   
    ful.appendChild(fli3);
    fli3.innerHTML="Our hotel is rated with 4.5 star";
    let fli4=document.createElement("li");   
    ful.appendChild(fli4);
    fli4.innerHTML="with high security";
    let fli5=document.createElement("li");   
    ful.appendChild(fli5);
    fli5.innerHTML="with parking space";
    let fli6=document.createElement("li");   
    ful.appendChild(fli6);
    fli6.innerHTML="Food & Beverage Hotel Facilities";
    
    fbtn.addEventListener("dblclick", function(){
        ful.removeChild(fli1);
        ful.removeChild(fli2);
        ful.removeChild(fli3);
        ful.removeChild(fli4);
        ful.removeChild(fli5);
        ful.removeChild(fli6);
    });
});



