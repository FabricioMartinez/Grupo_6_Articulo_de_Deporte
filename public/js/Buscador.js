window.onload = function () {
    const inputText = document.querySelector('input[type="text"]');
    const forms = document.querySelector('#form');

    forms.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('quié enviar');
        redirectToResultsPage();
    });

    const redirectToResultsPage = () => {
        const query = inputText.value.trim();
        if (query !== "") {
            const urlBusqueda = `/buscar?name=${encodeURIComponent(query)}`;
            window.location.href = urlBusqueda;
        } else {

            alert("Por favor, ingrese un término de búsqueda.");
        }
    };
};
