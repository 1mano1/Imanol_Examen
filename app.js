//Mostrara en pantalla una lista de eventos como reuniones, que esten guardados e un array. 10 eventos en pantalla una lista desordenada

document.addEventListener("DOMContentLoaded", function() {
    
    var eventos = [];

    // Función para crear nuevo evento
    window.crearEvento = function() {
        var nuevoEvento = document.getElementById('input').value;
        eventos.push(nuevoEvento);
        actualizarListaEventos();
    }

    // Función para eliminar el evento que ya tenía
    window.eliminarEvento = function() {
        eventos.pop();
        actualizarListaEventos();
    }

    // Función para actualizar la lista
    function actualizarListaEventos() {
        var listaEventos = document.getElementById('lista');
        listaEventos.innerHTML = ''; // Necesito limpiar la lista antes de almacenar

        // Mostrar solo los últimos 10 eventos
        var eventosMostrados = eventos.slice(-10);

        // Agregar el evento a la lista ya como tal
        eventosMostrados.forEach(function(evento) {
            var li = document.createElement('li');
            li.textContent = evento;
            listaEventos.appendChild(li);
        });
    }
});


