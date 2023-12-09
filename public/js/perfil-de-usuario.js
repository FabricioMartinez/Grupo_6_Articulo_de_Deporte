// window.onload = function(){

//     const inputname= document.querySelector('input#name')
//     const inputlast_name= document.querySelector('input#last_name')
//     const inputpassword= document.querySelector('#id_password')
//     const inputemail= document.querySelector('#id_email')
//     const inputphone= document.querySelector('input#phone')
//     // const selectfoto= document.querySelector('#id_foto')
//     // const image= document.querySelector('#imagen')
//     // const formCrear= document.querySelector('#form')

//     function validate (){
//         if(this.value.trim() === "") {
//             this.classList.add('is-invalid');
//         }else{
//             this.classList.remove('is-invalid')
//             this.classList.add('is-valid')
//         }}

//     inputname.addEventListener('blur', validate);
//     inputlast_name.addEventListener('blur', validate);
//     inputpassword.addEventListener('blur', validate);
//     inputemail.addEventListener('blur', validate);
//     inputphone.addEventListener('blur', validate);
//     // selectfoto.addEventListener('blur', validate);

//     // image.addEventListener('blur', validate)


// createUser.addEvenListener ('submit', function (l)){
//     l.preventDeFault();
//     const formulario = [...createMovie.elements];
//     formulario.pop();
//     let thereErrors = false;
//     formulario.forEach((element) =>{
//         if(element.value.trim() === ""){
//             element.classList.add('is-invalid')
//             thereErrors = true
//         } else {
//             element.classList.add('is-invalid')
//             element.classList.add('is-valid')
//         }

//         })
    
// }


// }

window.onload = function(){

    

    const inputname= document.querySelector('input#name')
    const inputlast_name= document.querySelector('input#last_name')
    const inputpassword= document.querySelector('input#password')
    const inputemail= document.querySelector('input#email')
    const inputphone= document.querySelector('input#phone')
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

    inputname.addEventListener('blur', function() {
        validate(inputname);
    });

    inputlast_name.addEventListener('blur', function() {
        validate(inputlast_name);
    });

    inputpassword.addEventListener('blur', function() {
        validateSelect(inputpassword);
    });

    inputphone.addEventListener('blur', function() {
        validateSelect(inputphone);
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