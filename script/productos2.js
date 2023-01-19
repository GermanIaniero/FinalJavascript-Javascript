let url = 'https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa/';
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            body+=`<div class="container">`
            body+=`<div class="row list-product">`
            for (var i = 0; i < data.length; i++) {      
              
               
               
               
               
               
               
                /*body+=`<tr><td>${data[i].id}</td><td>${data[i].producto}</td><td>${data[i].precio}</td><td>${data[i].img}</td><td>${data[i].descrip}<td>${data[i].categoria}<td>${data[i].cantidad}<td>${data[i].oferta}</td><td>${data[i].descuento}</td></td></td></td></tr>`*/

                
                body+=`<div class="card col-lg-4 id="${data[i].id}">`
                body+=`<div class="container-img">`
                
                body+=`<img src="${data[i].img}" width=115>`
                body+=`</div>`
                body+=`<h2>${data[i].descrip}</h2><br>`
                
                body+=`<h2>${data[i].precio}</h2><br>`
                body+=`<button>Agregar al Carrito</button>`
                body+=`</div>`
                console.log(body)
                
               /* id="12><td>${data[i].id}</td><td>${data[i].producto}</td><td>${data[i].precio}</td><td>${data[i].img}</td><td>${data[i].descrip}<td>${data[i].categoria}<td>${data[i].cantidad}<td>${data[i].oferta}</td><td>${data[i].descuento}</td></td></td></td></card>`*/
            }



          /* function cardsHtml ( array, contenedor, filtrarOferta ) {

    
                array.map( ( array ) => {
                    const card = document.createElement("div")
                    /*card.className = "card" 
                    card.className = "card col-lg-4"
                    card.id = array.id
                    card.innerHTML = `
                        <div class="container-img">
                            <img src=${array.img} alt=${array.descrip}>
                        </div>
                        <h2>
                            ${array.descrip}
                        </h2><br/>
                        <h2>
                            ${array.oferta?array.precio-(array.precio*(descuento%100)):array.precio}
                        </h2>
                        <button>Agregar al Carrito</button>
                    `
                    contenedor.appendChild(card)
                })    
            }   */









            document.getElementById('data').innerHTML = body
            //console.log(body)
        }