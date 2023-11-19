//  hacer el queri selector contenedor principal del hatml para que escuche el click sin importar la barra en la que lo hagan 
document.querySelector(".menuBarra").addEventListener("click", animacionMenu );
//llamar una funcion que va crear

// se guarda en  variables con un query selector lo de las filas 123

let barra1=document.querySelector(".fila1");
let barra2=document.querySelector(".fila2");
let barra3=document.querySelector(".fila3");

// se crea la funcion de animacion menu con la intencion de crear esos estilos creados en css
 function animacionMenu(){
    //se toma las variables ya guardadas y se llaman en los estilos css ya creados
    barra1.classList.toggle("fila1Animacion")
    barra3.classList.toggle("fila3Animacion")
    barra2.classList.toggle("fila2Animacion")


 }

