


let input = document.getElementById("input-box");
let button = document.querySelectorAll("button");
let string = "";

let resultShown = false;
let arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener("click", (e) =>{
    let value = e.target.innerHTML;
    if(value === "="){
        try{
            if(string.trim() !== ""){
                string = String(eval(string));
                input.value = string;
                resultShown = true;
            }
        }catch{
            input.value = "Error";
            string ="";
        }
    }else if(value === "AC"){
        string = "";
        input.value ="";
        resultShown = false;
    }else if(value === "DEL"){
        string = string.slice(0,-1);
        input.value = string;
        resultShown = false;

    }else{
        if(resultShown){

            string ="";
            resultShown  = false;
        }
        string += value;
        input.value = string;
    }
    });
});

























