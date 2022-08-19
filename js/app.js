/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Michael Maciel
 *      Student ID: #134514207
 *      Date:       12/08/22
 
 window.products.forEach((x) => {
    console.log("product loop entered!");
    function createCard(product) {
        tbody = document.getElementById('category-products');
        // Create a <div> to hold the card
        const card = document.createElement('div');
        // Add the .card class to the <div>
        card.classList.add('card');
        // Create a product image, use the .card-image class
        const productImage = document.createElement('img');
        productImage.src = product.imageUrl;
        productImage.classList.add('card-img');
        card.appendChild(productImage);
        divtag = `<div class="cards"> <article class="card" >` +
            `<header> <h2>A short heading</h2 </header>` +
            `<img src="${productImage }" alt="${products.title}" >` +
            `<div class="content">` +
            `<p>${products.Desc}  </p>` +
            `</div> </article> </div >`;

        tbody.innerHTML += divtag;
        // ... rest of your card building code here
        // Return the card’s <div> element to the caller
        return tbody;
    }



    createCard(x);
})
 
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");



const container = document.getElementById('category-products');

products.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';
    products1 = products.title ;
    // Construct card content
    divtag = `<div id="divboxshadow"><div class="cards"> <article class="card" >` +
        `<header> <h2>${result.title}</h2 </header>` +
        `<img src=${result.photo} alt=${result.title} >` +
        `<div class="content">` +
        `<p>${result.Desc}  </p>` +
        `<p>$ ${result.price}  </p>` +
        `</div> </article> </div ></div>`;

    // Append newyly created card element to the container
    container.innerHTML += divtag;
})