window.onload = function(){

    const inputname= document.querySelector('input#name')
    const inputlast_name= document.querySelector('input#last_name')
    const inputpassword= document.querySelector('#id_password')
    const inputemail= document.querySelector('#id_email')
    const inputphone= document.querySelector('input#phone')
    const selectfoto= document.querySelector('#id_foto')
    const image= document.querySelector('#imagen')
    const formCrear= document.querySelector('#form')

    function validate (){
        if(this.value.trim() === "") {
            this.classList.add('is-invalid');
        }else{
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        }}

    inputname.addEventListener('blur', validate);
    inputlast_name.addEventListener('blur', validate);
    inputpassword.addEventListener('blur', validate);
    inputemail.addEventListener('blur', validate);
    inputphone.addEventListener('blur', validate);
    selectfoto.addEventListener('blur', validate);

    image.addEventListener('blur', validate)


createUser.addEvenListener ('submit', function (l)){
    l.preventDeFault();
    const formulario = [...createMovie.elements];
    formulario.pop();
    let thereErrors = false;
    formulario.forEach((element) =>{
        if(element.value.trim() === ""){
            element.classList.add('is-invalid')
            thereErrors = true
        } else {
            element.classList.add('is-invalid')
            element.classList.add('is-valid')
        }

        })
    
}


}