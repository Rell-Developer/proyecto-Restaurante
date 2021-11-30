// Variables
const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

// EventListeners
eventListeners();

// console.log(document.querySelectorAll(".cta").item());

function eventListeners(){

    //Para abrir el menu
    window.addEventListener('click', function(e) {

        //Verificando a donde le dio click
        if(e.target == modalC){

            modal.classList.toggle('modal-close');

            document.querySelector('.modal-container img').style.transform = 'translateY(-200%)';

            setTimeout(function() {
                
                modalC.style.opacity = "0";
                modalC.style.visibility = "hidden";
            }, 500);
        }

        // Recorrida y condicional para las tarjetas del menu
        for(let i = 1; i <= 8; i++){

            // Validacion del elemento seleccionado en el menu
            if((e.target == document.querySelector(`.cta${i}`)) || e.target == document.querySelector(`.text-Op1`) || (e.target == document.querySelector(`.hand${i}`))){

                let img;
                
                //Transformacion 
                if(e.target == document.querySelector(`.text-Op1`)){

                    console.log(`Es la opcion #${i}`);
                    console.log(document.querySelector(`.cta${i} p`))
                }

                // Verificacion de target
                if(e.target == document.querySelector(`.hand${i}`) || e.target == document.querySelector(`.cta${i} p`)){

                    img = e.target.parentElement.parentElement.children[0].src;
                }
                else{

                    img = e.target.parentElement.children[0].src;
                }

                // Verificacion para poner el titulo, descripcion y precio correspondiente
                switch (i) {
                    
                    case 1:
                        creacionModel(document.querySelector('.modal-container'), img, `Arroz Dorado`, 'Arroz chino con sabrosos camarones y una bebida.', '3$');
                    break;
                
                    case 2:
                        creacionModel(document.querySelector('.modal-container'), img, `Arroz de Alta Mar`, 'Arroz chino con calamar, conchas, salsa especial y una bebida.', '4$');
                    break;
                
                    case 3:
                        creacionModel(document.querySelector('.modal-container'), img, `Chicha Morena`, 'Copa de chicha con canela', '1$');
                    break;

                    case 4:
                        creacionModel(document.querySelector('.modal-container'), img, `Ensalada Española`, 'Un sabroso y saludable tazon de ensalada.', '1.5$');
                    break;
                        
                    case 5:
                        creacionModel(document.querySelector('.modal-container'), img, `Arroz Reluciente`, 'Delicioso arroz dorado con pollo, camarones, almejas y una bebida.', '3.5$');
                    break;
                
                    case 6:
                        creacionModel(document.querySelector('.modal-container'), img, `Arroz Europeo`, 'Arroz con pollo, camarones, jamon, frijoles verdes y una bebida.', '4$');
                    break;
                
                    case 7:
                        creacionModel(document.querySelector('.modal-container'), img, `Arroz al jamon`, 'Delicioso arroz con jamon, camarones, pollo, cebolla, perejil y una bebida.', '4.5$');
                    break;

                    case 8:
                        creacionModel(document.querySelector('.modal-container'), img, `Gran Plato`, 'Delicioso arroz con camarones, pollo, cebolla, jamon, ajoporro, almejas, frijoles verdes y una bebida.', '3.5$');
                    break;
                    
                    default:
                        break;
                }
                
                //Bajando el model
                modalC.style.opacity = "1";
                modalC.style.visibility = "visible";
                modal.classList.toggle("modal-close");
        
                document.querySelector('.modal-container img').style.transform = 'translateY(0%)';
            }

            // Validacion del elemento seleccionado en el nav desplegable en el diseño responsivo
            if(e.target == document.querySelector(`.op${i}`)){

                // Ocultar Menu lateral en el diseño responsivo
                OcultarMenu();
            }
        }
    });

    //Efecto del boton cerrar
    cerrar.addEventListener('click', function() {
        
        modal.classList.toggle('modal-close');

        document.querySelector('.modal-container img').style.transform = 'translateY(-200%)';

        setTimeout(function() {
            
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 500);
    });

    //Boton de Despliegue del menu
    iconoMenu.addEventListener('click', e => {

        // Obtenemos la imagen con la direccion puesta
        const rutaActual = e.target.getAttribute('src');

        // Intercambio de las imagenes
        if(rutaActual == 'img/icons/open-menu.png'){

            // Hacemos aparecer el menu
            menu.style.display = 'block';

            // Animacion de izquierda
            setTimeout( () => {
                
                menu.style.transform = 'translate(0px)';      

                // Hacemos el cambio de la imagen del menu
                e.target.setAttribute('src', 'img/icons/open-menu2.png');

            }, 0);
        }
        else{
            // Metodo para ocultar el menu lateral responsivo
            OcultarMenu();
        }
    });
}

function myFunction(e) {

    let x = e.keyCode;

    if(x == 27){
        alert('Has presionado escape');
    }
}

function creacionModel(etiqueta, imagen, titulo, descripcion, precio){

    //Cambiando elementos
    etiqueta.children[0].src = imagen;                                      //Imagen
    etiqueta.children[1].children[1].children[0].textContent = titulo;      //Titulo
    etiqueta.children[1].children[1].children[1].textContent = descripcion; //Descripcion
    etiqueta.children[1].children[1].children[2].textContent = precio;      //Precio
}

function OcultarMenu() {
    
    // Cambio de imagen
    iconoMenu.setAttribute('src', 'img/icons/open-menu.png');

    // Movimiento del menu
    menu.style.transform = 'translate(600px)';

    // Ocultar menu
    setTimeout( () => {
        menu.style.display = 'none';
    }, 250);
}