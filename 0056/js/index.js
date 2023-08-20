
// slider pridacts

let prodactsCantiner = document.querySelector('.pridacts');

// selict cartCantiner

let AddCart = document.querySelectorAll('#card-cantiner');



// swohAllProdact

function swohAllProdact() {

    for (let i = 0; i < products.length; i++) {

        prodactsCantiner.innerHTML += ` <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="single-popular-items text-center mb-50">
            <div class="popular-img">
                <img src="`+ products[i].img + `" alt="">
                <div class="img-cap">
                    <span onclick="addToCart(`+ products[i].id + `)">Add to cart</span>
                </div>

                <div class="favorit-items">
                    <i class="bi bi-heart-fill"></i>
                </div>

            </div>

            <div class="popular-caption">
                <h3><a href="#">`+ products[i].name + `</a></h3>
                <span class="price">`+ products[i].price + `</span>
            </div>
        </div>
    </div>`
    }


}


swohAllProdact()

// arreay cart

let cart = [];


// add To cart

function addToCart(id) {

    let item = products.find(function (p) {

        return p.id == id;
    })

    cart.push(item);
    renderCartItems();


}



// render cart items


function renderCartItems() {

    AddCart.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        AddCart.innerHTML+=`sdds <br>`


    }

}



// navbar background 

let navbar = document.querySelector('.navbar')

window.onscroll = function () {

    if (window.pageYOffset > 0) {

        navbar.classList.add('boxShadow-navbar')

    } else {
        navbar.classList.remove('boxShadow-navbar')
    }

}


// color change lik 


let btn = document.querySelectorAll('.bi');

for (let i = 0; i < btn.length; i++) {


    btn[i].addEventListener('click', function () {

        btn[i].classList.toggle('follow');

    })

}

let count = 0;

let counterNaber = document.querySelectorAll('.counter-naber');


for (let i = 0; i < counterNaber.length; i++) {

    counterNaber[i].addEventListener('click', function () {
        counterNaber[i].innerHTML = count;

    })


}

let plusCard = document.querySelectorAll('.plus');

for (let i = 0; i < plusCard.length; i++) {

    plusCard[i].addEventListener('click', function () {

        counterNaber[i].innerHTML = count++;


    })

}
let minusCard = document.querySelectorAll('.minus');

for (let i = 0; i < plusCard.length; i++) {

    minusCard[i].addEventListener('click', function () {

        if (counterNaber.innerHTML = count - 0) {

            counterNaber[i].innerHTML = count--;

        }
    })

}





// form ligin

// pssInput

let passInput = document.querySelector('.pass-input');

passInput.addEventListener('keyup', function () {

    let passInputLength = passInput.value.length;

    if (passInputLength == 0) {

        eyemImg.style.display = 'none'

    } else {
        eyemImg.style.display = 'inline-block'
    }

})


let eyemImg = document.querySelector('.eyemImg');
eyemImg.addEventListener('click', function () {

    let passInputType = passInput.getAttribute('type');

    if (passInputType == 'password') {

        passInput.setAttribute('type', 'text');
        eyemImg.setAttribute("src", '../img/password-icon/invisible-eye.png')


    } else {

        passInput.setAttribute('type', 'password');

        eyemImg.setAttribute('src', '../img/password-icon/visible-eye.png')

    }


})










