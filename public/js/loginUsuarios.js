window.addEventListener('load',function(){
    const inputName=document.querySelector('#username');
    const inputPassword=document.querySelector('#password');
    const botonLogin = document.querySelector('form .boton')
    const form = document.querySelector('#ingresoLogin')

    // inputName.addEventListener('blur',function(){
    //     console.log(inputName.value)
    // })
    let errors = [];

    function validate (input){
        if(input.value.trim() === ""){
            input.classList.add('is-invalid');
        }else{
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    }

    inputName.addEventListener('blur',function(){
        validate(inputName);
    })
    inputPassword.addEventListener('blur',function(){
        validate(inputPassword);
    })

    
    // pruebas 
    // form.addEventListener('click',function(event){
    //     event.preventDefault();
    //     console.log("se hizo clic")
    // })
    // form.onclick = function(){
    //     console.log('se hizo clic')
    // }
   


        //no funciona, posiblemente no toma el evento submit
    
        // form.addEventListener('submit', function(e){
        // const formulario = [...form.elements]; //pasaje de elementos a un array de los elementos del formulario
        // //propiedad elements 

        // formulario.pop();//para eliminar el ultimo elemento del array, en este caso seria el boton

        // let errors = false;

        // formulario.forEach((element)=>{
        //     if(element.value.trim() === ""){
        //         element.classList.add('is-invalid');
        //         errors= true;
        //     }else{
        //         element.classList.remove('is-invalid');
        //         element.classList.add('is-valid')
        //     }
        // })
        // if(errors == true){
        //     e.preventDefault();
        // }


        // })




        //descartar
    // inputName.addEventListener("blur",function(e){
    //     console.log(this.value.trim())
    //     const name = e.target;
    //     console.log(name.value)
    //     if(inputName.value.trim() === ""){
    //         inputName.classList.add('is-invalid');
    //         console.log('esta vacio')
    //     }else{
    //         inputName.classList.remove('is-invalid');
    //         inputName.classList.add('is-valid');
    //     }
    // })



})

