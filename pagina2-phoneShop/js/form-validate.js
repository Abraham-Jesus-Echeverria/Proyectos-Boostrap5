const $layout1 = document.getElementById("layout1"); 
const $layout2 = document.getElementById("layout2");
const $buttonSubmit = document.getElementById("submit"); 
const $form = document.getElementById("form");
const $inputs = document.querySelectorAll("#form select"); 

const inputs = { 
    input_M : false,
    input_A: false, 
    input_ME: false, 
    input_C: false, 
    input_FC: false 
}  

const seleccionInput = (e) => { 
    switch(e.target.name){ 
        case "modelo":  
        validacion(e.target, "input_M"); 
        break; 

        case "capacidad": 
        validacion(e.target, "input_A"); 
        break; 

        case "meses":   
        validacion(e.target, "input_ME"); 
        break; 

        case  "corte": 
        validacion(e.target, "input_FC"); 
        break; 
    }
    if(inputs.input_M && inputs.input_A && inputs.input_FC && inputs.input_ME){ 
        $buttonSubmit.classList.add("btn-success"); 
    } 
}  

const validacion = (option, input) =>{ 
    if(option.value === "Falso"){   
        inputs[input] = false
        console.log(inputs[input]); 
    }else{ 
        inputs[input] = true 
        console.log(inputs[input]); 
    }
}

$inputs.forEach(input=>{ 
    input.addEventListener("change", seleccionInput); 
}); 
   

$form.addEventListener("submit", (e)=> { 
e.preventDefault();   
}); 
