window.onload = function(){
    const inputText= document.querySelector('input[type="text"]')
    const forms= document.querySelector('#form')
    const list= document.querySelector('.list')

    forms.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log('quie enviar');

        location.href= 'http://localhost:3001/buscar'
        getlist()
    })

    const getlist=( )=>{
        list.textContent= ''
        const query=inputText.value;

        fetch('http://localhost:3001/api/buscar?name='+ query)
        .then((resp)=> resp.json())
        .then((data)=>{
            localStorage.setItem('productos', JSON.stringify(data.product))
            data.product.forEach((element) => {
                list.innerHTML += `<li>${element.name}</li>`
            });
        })
    }
}
