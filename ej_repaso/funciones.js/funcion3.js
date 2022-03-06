function cambiarImagen(){
        let objeto_select=document.getElementsByTagName("select")[0];
        let objeto_imagen=document.getElementsByTagName("img")[0];
        let valor=objeto_select.value;
        switch(valor){
            case "PE":
            objeto_imagen.src="imagen/perro.jpeg";
            objeto_imagen.src="imagen/perro2.png";

            break;
            case "GA":
                objeto_imagen.src="imagen/gato.jpg";

            break;
            case "PZ":
                objeto_imagen.src="imagen/pez.jpeg";




        }
    }
