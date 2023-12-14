// ProductList.js
window.onload = function () {
    // Obtén los resultados de la búsqueda almacenados en localStorage
    const resultados = JSON.parse(localStorage.getItem('productos'));
    console.log(resultados);
    // Muestra los resultados en la lista
    const list = document.querySelector('.list');
    if (resultados && resultados.length > 0) {
        resultados.forEach((element) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${element.name} - ${element.price}`;
            list.appendChild(listItem);
        });
    } else {
        // Muestra un mensaje si no hay resultados
        const noResultsMessage = document.createElement('li');
        noResultsMessage.textContent = 'No se encontraron resultados';
        list.appendChild(noResultsMessage);
    }
};
