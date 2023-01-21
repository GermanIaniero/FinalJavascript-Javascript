//const apiKey = "2bfe34db0d27d97661602c0ccc0e3df3"
const contenedor = document.querySelector(".contenedor")

let paginado = 1


const cards = (array) => {
    const nodos = array.reduce((acc, element) => {
        return acc + 
        `<h4>Descripcion:"${data[i].descrip}" width=115 alt="${element.descrip}"></h4>`
       
    }, "")
    contenedor.innerHTML = nodos
}

fetch(`https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa?page=1&limit=10`)
.then( res => res.json())
.then( data => { 
    console.log(data)
    cards(data.results)

})

// const imagenTMDB = `https://image.tmdb.org/t/p/original${imagen}`



document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    fetch (`https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa?search=${document.querySelector("#busqueda").value}`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
})
}

document.querySelector("#next").onclick = () => {
    
    if( paginado !== 500){        
        paginado++
        document.querySelector("#next").disabled = false
    } else if ( paginado === 500){
        document.querySelector("#next").disabled = true
    }

    
    fetch(`https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa?page=1&limit=10`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
    })
}

document.querySelector("#prev").onclick = () => {
    
    if( paginado !== 1){        
        paginado--
        document.querySelector("#prev").disabled = false
    } else if ( paginado === 1){
        document.querySelector("#prev").disabled = true
    } 

    
    fetch(`https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa?sortBy=createdAt&order=${document.querySelector("#ordenar").value}`)
    .then( res => res.json())
    .then( data => { 
    console.log(data)
    cards(data.results)
    })
}

confirm("Desea recibir un préstamo")