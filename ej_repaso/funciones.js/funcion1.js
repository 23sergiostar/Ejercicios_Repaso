function saludar(){
    let objeto_input=document.getElementById("campo_nombre");
    let valor = objeto_input.value;
    let longitud=valor.length;
    alert ("Hola "+valor+" tu nombre tiene "+longitud+" letras");

}