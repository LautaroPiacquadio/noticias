var noticias = obtenerNoticias();

// Busco las noticias que contengan la palabra y las oculto
function ocultarNoticiasQueContengan(palabra) {
    for (let i = 0; i < noticias.length; i++) {
        if (contienePalabra(noticias[i], palabra)) {
            ocultarNoticia(noticias[i]);
        }
    }
}

// Busco las noticias que contengan la palabra y les asigno el color de fondo
function resaltarNoticiasQueContengan(palabra, color) {
    for (let i = 0; i < noticias.length; i++) {
        if (contienePalabra(noticias[i], palabra)) {
            cambiarColor(noticias[i], color);
        }
    }
}

// A cada noticia le recorto el texto y le agrego puntos suspensivos dentro de recortarTexto
function recortarNoticias(cantPalabras){
    for (let i = 0; i < noticias.length; i++) {
        recortarTexto(noticias[i], cantPalabras)
    }
}

ocultarNoticiasQueContengan('Google', );
resaltarNoticiasQueContengan('ARGENTINA', 'rgb(48, 155, 184)');
resaltarNoticiasQueContengan('robots', 'rgb(244, 191, 55)');
recortarNoticias(20);
