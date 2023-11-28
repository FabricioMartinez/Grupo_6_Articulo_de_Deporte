window.onload = function(){

    const inputName= document.querySelector('input#name')
    const inputPrice= document.querySelector('input#price')
    const inputCategory= document.querySelector('#id_categoria')
    const selectColor= document.querySelector('#id_color')
    const selectTalla= document.querySelector('#id_tallas')
    const image= document.querySelector('#imagen')
    const icono= document.querySelectorAll('.alert')
    const check= document.querySelectorAll('.okey')

    function validate (){
        if (this.value.trim() === "") {
            this.classList.add('is-invalid');
            icono.forEach(element => {
                element.classList.add('alerta');
            });
            check.forEach(element => {
                element.classList.remove('ok');
            });
        } else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            icono.forEach(element => {
                element.classList.remove('alerta');
            });
            check.forEach(element => {
                element.classList.add('ok');
            });
        }
    }

    inputName.addEventListener('blur', validate)
    inputPrice.addEventListener('blur', validate)

    inputCategory.addEventListener('blur', validate)
    selectColor.addEventListener('blur', validate)
    selectTalla.addEventListener('blur', validate)
    image.addEventListener('blur', validate)

}