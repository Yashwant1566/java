function oddeventest(req){
        if(req=="odd"){
            return function (n){
                console.log(!(n%2==0));
            }
        }
        else if(req=="even"){
            return function (n){
                console.log((n%2==0));
            }
        }else{
            console.log("wrong request");
        }
    
    }
    let req="even";