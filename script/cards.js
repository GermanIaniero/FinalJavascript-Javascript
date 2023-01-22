const descuento =0.20

const mostrarOfertas = true
//console.log("the user require the sale product %s",mostrarOfertas)

function compare( a, b ) {
    if ( a.descrip < b.descrip ){
      return -1;
    }
    if ( a.descrip > b.descrip ){
      return 1;
    }
    return 0;
}

async function cardsHtml ( contenedor, filtrarOferta ) {
    let  listaProductos =  await getProductos();
    console.log(listaProductos)
    listaProductos.forEach(producto => {

        if (producto.oferta == true) {

            const card = document.createElement("div")
            /*card.className = "card" */
            card.className = "card col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
            card.id = producto.id
            card.innerHTML = `
            <div class="container-img">
                <img src=${producto.img} alt=${producto.descrip}>
            </div>
            <h2>
                ${producto.descrip}
            </h2><br/>
            <h5>
               Precio: ${producto.precio}<br/>
               Descuento: ${producto.descuento}%<br/>
               Total: ${producto.precio - (producto.precio * producto.descuento / 100)}
            </h5>
            <button class="carrito" onclick="CargarCarrito(${producto.id})" id="${producto.id}">Agregar al Carrito</button>
        `
            contenedor.appendChild(card)
        }
    });

    console.log("lista de producto cargada")
}

// no va esto

/*const contenedor = document.querySelector(".container") */
const contenedor = document.querySelector(".list-product")
//const listaProductosOferta =listaProductos.filter((stockProductos => stockProductos.oferta ));
//listaProductos.sort(compare)

if(mostrarOfertas){
    document.getElementById('titulo').innerHTML="Mostrando Ofertas"
}else{
    document.getElementById('titulo').innerHTML="Mostrando Productos sin Ofertas"
}

cardsHtml(contenedor,mostrarOfertas)

/*function buscarProducto(){
    let productoBuscado = prompt("Ingrese el nombre del producto a buscar");
    const listaProductosConsulta =listaProductos.slice().filter(producto => producto.descrip.toLowerCase() === productoBuscado.toLowerCase());
    if (listaProductosConsulta.length>0){
        let resultado =""
        listaProductosConsulta.map( ( listaProductosConsulta ) => {
            precioTemp=listaProductosConsulta.oferta?listaProductosConsulta.precio-(listaProductosConsulta.precio*descuento):listaProductosConsulta.precio
            resultado +="nombre : "+listaProductosConsulta.descrip +",   ID: "+listaProductosConsulta.id+",   Precio:"+ precioTemp
        })
        alert("encontramos",resultado)

    }else{
        alert("No encontramos","No se econtraron productos con el nombre de "+ productoBuscado.toUpperCase())
    }

}

document.getElementById('buscar').addEventListener("click", buscarProducto); */
