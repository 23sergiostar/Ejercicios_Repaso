function saludar(){
    let objeto_input=document.getElementById("campo_edad");
    let edad=objeto_input.value;
    if (edad>=18){
        alert("eres mayor de edad");
    } else {
        alert("eres menor de edad");
    }
}