var imagenesmates = ["images/Products/perita1.jpeg", "images/Products/perita2.jpeg", "images/Products/hexagonal1.JPG", "images/Products/hexagonal2.JPG", "images/Products/bocon.jpeg","images/Products/bocon2.jpeg", "images/Products/cilindro.jpeg", "images/Products/cilindros.JPG"]
    cont = 0;

function carrouselmates (contenedormates){
    contenedormates.addEventListener("click", e => {
        let atras = contenedormates.querySelector(".atras"),
            adelante = contenedormates.querySelector(".adelante"),
            img = contenedormates.querySelector("img"),
            tgt = e.target; 
            
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenesmates[cont - 1];
                cont--;
            } else{ 
                img.src = imagenesmates[imagenesmates.length - 1 ];
                cont = imagenesmates.length - 1;
            }

        } else if (tgt == adelante){
            if(cont < imagenesmates.length - 1){
                img.src = imagenesmates[cont + 1];
                cont++;
            } else{ 
                img.src = imagenesmates[0];
                cont = 0;
            }

        }
        
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedormates = document.querySelector(".contenedormates");

    carrouselmates(contenedormates);
});

var imagenescuencos = ["images/Products/cuenco8cm.jpeg", "images/Products/cuenco8cm2.jpeg", "images/Products/cuenco10cm.jpeg", "images/Products/cuenco12cm.jpeg", "images/Products/cuencos12cm.JPG"]
    cont = 0;
function carrouselcuencos (contenedorcuencos){
    contenedorcuencos.addEventListener("click", e => {
        let atras = contenedorcuencos.querySelector(".atras"),
            adelante = contenedorcuencos.querySelector(".adelante"),
            img = contenedorcuencos.querySelector("img"),
            tgt = e.target; 
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenescuencos [cont - 1];
                cont--;
            } else{ 
                img.src = imagenescuencos[imagenescuencos.length - 1 ];
                cont = imagenescuencos.length - 1;
            }

        } else if (tgt == adelante){
            if(cont < imagenescuencos.length - 1){
                img.src = imagenescuencos[cont + 1];
                cont++;
            } else{ 
                img.src = imagenescuencos[0];
                cont = 0;
            }

        }
        
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedorcuencos = document.querySelector(".contenedorcuencos");

    carrouselcuencos (contenedorcuencos);
});

var imagenestablas = ["images/Products/tablas1imagen.jpeg","images/Products/tabla1cavidad.jpeg", "images/Products/tabla1cavidad2.jpeg", "images/Products/tabla2cavidades.jpeg", "images/Products/tabla3cavidades.jpeg", "images/Products/tabla3cavidades2.jpeg", "images/Products/tabla4cavidades.jpeg", "images/Products/tabla4cavidades2.jpeg"]
    cont = 0;
function carrouseltablas (contenedortablas){
    contenedortablas.addEventListener("click", e => {
        let atras = contenedortablas.querySelector(".atras"),
            adelante = contenedortablas.querySelector(".adelante"),
            img = contenedortablas.querySelector("img"),
            tgt = e.target; 
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenestablas [cont - 1];
                cont--;
            } else{ 
                img.src = imagenestablas[imagenestablas.length - 1 ];
                cont = imagenestablas.length - 1;
            }

        } else if (tgt == adelante){
            if(cont < imagenestablas.length - 1){
                img.src = imagenestablas[cont + 1];
                cont++;
            } else{ 
                img.src = imagenestablas[0];
                cont = 0;
            }

        }
        
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedortablas = document.querySelector(".contenedortablas");

    carrouseltablas (contenedortablas);
});

var imagenesazucareras = ["images/Products/Azucarerassurtidas.jpeg","images/Products/azucareras.JPG", "images/Products/azucareras2.JPG", "images/Products/cilindrocontapa.jpeg"]
    cont = 0;
function carrouselazucareras (contenedorazucareras){
    contenedorazucareras.addEventListener("click", e => {
        let atras = contenedorazucareras.querySelector(".atras"),
            adelante = contenedorazucareras.querySelector(".adelante"),
            img = contenedorazucareras.querySelector("img"),
            tgt = e.target; 
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenesazucareras [cont - 1];
                cont--;
            } else{ 
                img.src = imagenesazucareras[imagenesazucareras.length - 1 ];
                cont = imagenesazucareras.length - 1;
            }

        } else if (tgt == adelante){
            if(cont < imagenesazucareras.length - 1){
                img.src = imagenesazucareras[cont + 1];
                cont++;
            } else{ 
                img.src = imagenesazucareras[0];
                cont = 0;
            }

        }
        
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedorazucareras = document.querySelector(".contenedorazucareras");

    carrouselazucareras (contenedorazucareras);
});

var imagenesbombillas = ["images/Products/Bombillas6.JPG","images/Products/Bombillas1.jpeg", "images/Products/Bombillas2.jpeg", "images/Products/Bombillas3.jpeg", "images/Products/Bombillas4.jpeg"]
    cont = 0;
function carrouselbombillas (contenedorbombillas){
    contenedorbombillas.addEventListener("click", e => {
        let atras = contenedorbombillas.querySelector(".atras"),
            adelante = contenedorbombillas.querySelector(".adelante"),
            img = contenedorbombillas.querySelector("img"),
            tgt = e.target; 
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenesbombillas [cont - 1];
                cont--;
            } else{ 
                img.src = imagenesbombillas[imagenesbombillas.length - 1 ];
                cont = imagenesbombillas.length - 1;
            }

        } else if (tgt == adelante){
            if(cont < imagenesbombillas.length - 1){
                img.src = imagenesbombillas[cont + 1];
                cont++;
            } else{ 
                img.src = imagenesbombillas[0];
                cont = 0;
            }

        }
        
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedorbombillas = document.querySelector(".contenedorbombillas");

    carrouselbombillas (contenedorbombillas);
});

var imagenescombos = ["images/Products/Combo50matesybombillas.JPG", "images/Products/combo10azus10mates10cuencos.JPG", "images/Products/combo10cuencos5azus5mates.JPG", "images/Products/tablaazuperitay2cuencos.JPG", "images/Products/tablaazuperitay2cuencos2.JPG", "images/Products/50cuencos8cm.JPG"]
    cont = 0;
function carrouselcombos (contenedorcombos){
    contenedorcombos.addEventListener("click", e => {
        let atras = contenedorcombos.querySelector(".atras"),
            adelante = contenedorcombos.querySelector(".adelante"),
            img = contenedorcombos.querySelector("img"),
            tgt = e.target; 
        
        if(tgt == atras){
            if(cont > 0){
                img.src = imagenescombos [cont - 1];
                cont--;
            } else{ 
                img.src = imagenescombos[imagenescombos.length - 1 ];
                cont = imagenescombos.length - 1;
            }

        } else if (tgt == adelante){
            if(cont < imagenescombos.length - 1){
                img.src = imagenescombos[cont + 1];
                cont++;
            } else{ 
                img.src = imagenescombos[0];
                cont = 0;
            }

        }
        
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let contenedorcombos = document.querySelector(".contenedorcombos");

    carrouselcombos (contenedorcombos);
});