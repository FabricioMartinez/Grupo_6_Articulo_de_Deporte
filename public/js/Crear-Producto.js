window.onload = function(){

    const inputName= document.querySelector('input#name')
    const inputPrice= document.querySelector('input#price')
    const inputCategory= document.querySelector('#id_categoria')
    const selectColor= document.querySelector('#id_color')
    const selectTalla= document.querySelector('#id_tallas')
    const image= document.querySelector('#imagen')
    const formCrear= document.querySelector('#form')

    function validate (input){
        if (input.value.trim() === "") {
            input.classList.add('is-invalid');
            input.parentElement.querySelector('.fa-exclamation').classList.add('alerta');
            input.parentElement.querySelector('.fa-check').classList.remove('ok');
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            input.parentElement.querySelector('.fa-exclamation').classList.remove('alerta');
            input.parentElement.querySelector('.fa-check').classList.add('ok');
        }
    }
    function validateSelect(select) {
        const selectedOption = select.value;
        if (selectedOption === "" || selectedOption === 'Seleccionar Categoria' || selectedOption=== 'Seleccionar color' || selectedOption === 'Seleccionar talla') {
            select.classList.add('is-invalid');
            select.parentElement.querySelector('.fa-exclamation').classList.add('alerta');
            select.parentElement.querySelector('.fa-check').classList.remove('ok');
        } else {
            select.classList.remove('is-invalid');
            select.classList.add('is-valid');
            select.parentElement.querySelector('.fa-exclamation').classList.remove('alerta');
            select.parentElement.querySelector('.fa-check').classList.add('ok');
        }
    }

    inputName.addEventListener('blur', function() {
        validate(inputName);
    });

    inputPrice.addEventListener('blur', function() {
        validate(inputPrice);
    });

    inputCategory.addEventListener('blur', function() {
        validateSelect(inputCategory);
    });

    selectColor.addEventListener('blur', function() {
        validateSelect(selectColor);
    });

    selectTalla.addEventListener('blur', function() {
        validateSelect(selectTalla);
    });
    
    formCrear.addEventListener('submit', function(e){
        

        const formulario= [...formCrear.elements]

        formulario.pop()

        let errors= false

        formulario.forEach((element)=>{
            if(element.value.trim() === "" ){
                element.classList.add('is-invalid')
                errors=true
            }else{
                element.classList.remove('is-invalid')
                element.classList.add('is-valid')
            } 
        })
        
        if (errors === true){
            e.preventDefault()
        }

    })

    image.addEventListener('blur', validate)

}