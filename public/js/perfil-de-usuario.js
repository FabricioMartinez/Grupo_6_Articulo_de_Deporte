
window.onload = function(){

    

    const inputname= document.querySelector('input#name')
    const inputlast_name= document.querySelector('input#last_name')
    const inputpassword= document.querySelector('input#password')
    const inputpassword_confirm= document.querySelector('input#password_confirm')
    const inputemail= document.querySelector('input#email')
    const inputphone= document.querySelector('input#phone')
    const selectfoto= document.querySelector('#id_foto')
    
    function validatePassword() {
        const password = inputpassword.value.trim();
        if (password.length < 8) {
            inputpassword.classList.add('is-invalid');
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
            passwordError.classList.add('alerta');
        } else {
            inputpassword.classList.remove('is-invalid');
            inputpassword.classList.add('is-valid');
            passwordError.textContent = '';
            passwordError.classList.remove('alerta');
            inputpassword.parentElement.querySelector('.fa-check').classList.add('ok');
        }
    }

    inputpassword.addEventListener('blur', validatePassword);

    function validateFoto() {
        const selectedOption = selectfoto.value;
        if (selectedOption === "" || selectedOption === 'Seleccionar foto') {
            selectfoto.classList.add('is-invalid');
            fotoError.textContent = 'Debe seleccionar una foto.';
            fotoError.classList.add('alerta');
        } else {
            selectfoto.classList.remove('is-invalid');
            selectfoto.classList.add('is-valid');
            fotoError.textContent = '';
            fotoError.classList.remove('alerta');
            selectfoto.parentElement.querySelector('.fa-check').classList.add('ok');
        }
    }

    selectfoto.addEventListener('blur', validateFoto);

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
    function validate (input){
        if(input.value.trim() === "") {
            input.classList.add('is-invalid');
            input.parentElement.querySelector('.fa-exclamation').classList.add('alerta');
            input.parentElement.querySelector('.fa-check').classList.remove('ok');
        }else{
            input.classList.remove('is-invalid')
            input.classList.add('is-valid')
            input.parentElement.querySelector('.fa-exclamation').classList.remove('alerta');
            input.parentElement.querySelector('.fa-check').classList.add('ok');
        }}

    inputname.addEventListener('blur', function() {
        validate(inputname);
    });
    inputlast_name.addEventListener('blur', function() {
        validate(inputlast_name);
    });
    inputpassword.addEventListener('blur', function() {
        validate(inputpassword);
    });
    inputpassword_confirm.addEventListener('blur', function() {
        validate(inputpassword_confirm);
    });
    inputemail.addEventListener('blur', function() {
        validate(inputemail);
    });
    inputphone.addEventListener('blur', function() {
        validate(inputphone);
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


};
