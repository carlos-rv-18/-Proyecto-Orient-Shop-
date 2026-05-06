const products = {
    1: {
        name: "Orient Bambino",
        price: "$4,000.00",
        img: "img/orient bambino.png"
    },

    2: {
        name: "Mako Solar Panda Diver",
        price: "$5,500.00",
        img: "img/orient mako panda solar.png"
    },

    3: {
        name: "Ray Raven",
        price: "$7,600.00",
        img: "img/orient rayy raven.png"
    }

}









//------------------------FUNCIONALIDAD DE MOSTRAR Y OCULTAR MENU LATERAL

const header = document.querySelector(".header");
const menuIcon = header.firstElementChild;
const menu = document.querySelector(".side-menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});


const closeMenu = document.querySelector(".close-menu");
closeMenu.addEventListener("click", () => {
    menu.classList.toggle("show")
});





//-------------------------FUNICONALIDAD DE MOSTRAR Y OCULTAR CARRITO 

const cartIcon = header.lastElementChild;
const container = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    container.classList.toggle("show-cart");
})

const closeCart = document.querySelector(".cart__close");
closeCart.addEventListener("click", () => {
    container.classList.toggle("show-cart");
})



//------------------------QUITAR ELEMENTOS DEL CARRITO CLICKEANDO ICONO

const iconRemove = document.querySelectorAll(".cart__item-icon");
console.log(iconRemove)

iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
});




//------------------------ADD TO CART + BADGE
let cart = []

const addButtons = document.querySelectorAll(".btn-add");
const cartBadge = document.querySelector(".header__badge");
const cartContainer = document.querySelector(".cart");


addButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {

        const id = e.target.dataset.id

        cart.push(id)

        cartBadge.textContent =cart.length

        renderCart()
    })
});



function renderCart () {
    const container =document.querySelector(".cart__items")

    const itemsHTML = cart.map(id => {

        const product = products[id]

        return `
         <div class="cart__item">
            <img src="${product.img}" class="cart__item-img">
            <p class="cart__item-tit">${product.name}</p>
            <p class="cart__item-price">${product.price}</p>
            <img class="cart__item-icon" data-id="${id}" src="icons/remove_shopping_cart_28dp_000000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        `
    }).join("")

    container.innerHTML = itemsHTML
}


document.addEventListener("click", (e) => {

    if (e.target.classList.contains("cart__item-icon")) {

        const id = e.target.dataset.id

        const index = cart.indexOf(id)

        if(index !== -1) {
            cart.splice(index, 1)
        }
        
        cartBadge.textContent = cart.length
        renderCart()
    }
});


