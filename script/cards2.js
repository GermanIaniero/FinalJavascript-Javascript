const contenedor = document.querySelector(".container")

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
     if (element.oferta == true) {  
        return acc + `
         <div class="container">
           <!--<div class="row list-product">-->
            <div class="card" id="stockProductos-${element.id}">
                <div class="container-img">
                <img src=${element.img} alt=${element.descrip}>
                </div>
                <h2>
                    ${element.descrip}
                </h2><br/>
                <h5>
                   Precio: ${element.precio}<br/>
                   Descuento: ${element.descuento}%<br/>
                   Total: ${element.precio - (element.precio * element.descuento / 100)}
                </h5>
                <button id="boton-${element.id}" class="boton-card">
                    Añadir al carrito
                </button>
            </div>
          </div>  
        </div>  
        console.log(element.oferta)
        `
     }  
    }, "")

    contenedor.innerHTML = generarNodos
}

cardHtml(stockProductos)

let carrito = []

// necesito llamar a todos los botones que van a generar la acción de añadir al carrito
// para poder hacerlo, utilizamos querySelectorAll , getElementByClassName

function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".boton-card")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            carrito.push(filtrarProducto)   
            console.log(carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))   
        }
        
    })
}

aniadirAlCarrito(stockProductos)

const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []