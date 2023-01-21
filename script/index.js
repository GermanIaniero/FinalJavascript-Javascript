/*console.log(document)

const tituloPrincipal = document.getElementById("titulo-principal")
console.log(tituloPrincipal)
console.log(typeof tituloPrincipal)

const containers = document.getElementsByClassName("container")
console.log(container)

const div = document.getElementsByTagName("li")
console.log(div)

const tituloQuerySelector = document.querySelector("#titulo-principal")

const containerQuerySelector = document.querySelectorAll(".container")
const divQuerySelector = document.querySelectorAll("div")

console.log(tituloQuerySelector)
console.log(containerQuerySelector)
console.log(divQuerySelector)


console.log(document)

const container = document.querySelector(".container")

const card = document.createElement("div")

card.className = "tarjeta"

card.textContent = "stockProductos"

console.log(card) */


  /*nav */
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /*Swipper */

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const btn_darkmode = document.getElementById('darkmode');
  btn_darkmode.addEventListener('click', function(){
  
      document.body.classList.toggle('dark');
  });