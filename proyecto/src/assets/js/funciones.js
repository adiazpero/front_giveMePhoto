function launchNavbar() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $('.fixed-top').css('background', 'transparent');
        } else {
            $('.fixed-top').css('background', 'white');
            /*  $('.fixed-top').css('', 'white'); */
        }
    });

}



/* var busqueda = document.querySelector('#search');
busqueda.addEventListener('keyup', buscarTarea);

function buscarTarea(e) {
    var key = e.keyCode;
    if (key == 13) {
        var buscarPalabra = e.target.value;
        var listaBusqueda = listaTareas.filter(tarea => tarea.titulo.toLowerCase().includes(buscarPalabra.toLowerCase()));

        limpiarPantalla();
        pintarTareas(listaBusqueda);
    }
} */