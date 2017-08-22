var noticias = obtenerNoticias();

// Si contiene la palabra la oculto
function ocultarNoticiasQueContengan(i, palabra) {
    if (contienePalabra(noticias[i], palabra)) {
        ocultarNoticia(noticias[i]);
    }
}

// Si contiene la palabra le asigno el color de fondo
function resaltarNoticiasQueContengan(i, palabra, color) {
    if (contienePalabra(noticias[i], palabra)) {
        cambiarColor(noticias[i], color);
    }
}

// Recorto la noticia a la cantidad de palabras que defino y le agrego puntos suspensivos dentro de recortarTexto (funciones.js)
function recortarNoticias(i, cantPalabras){
    recortarTexto(noticias[i], cantPalabras);
}

// Itero una vez las noticias y ejecuto todas las funciones por cada noticia
for (var i = 0; i < noticias.length; i++) {
    ocultarNoticiasQueContengan(i, 'Google');
    resaltarNoticiasQueContengan(i, 'ARGENTINA', 'rgb(48, 155, 184)');
    resaltarNoticiasQueContengan(i, 'robots', 'rgb(244, 191, 55)');
    recortarNoticias(i, 20);
}
