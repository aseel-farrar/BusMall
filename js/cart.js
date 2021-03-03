/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let cart;

function loadCart() {
  const cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems );
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tBody.innerHTML = '';
}

// TODO: Add the TR to the TBODY and each of the TD's to the TR
// TODO: Find the table body
const tBody = document.createElement ( 'tbody' );
function showCart() {

  table.appendChild( tBody );
  // TODO: Iterate over the items in the cart
  for ( let i = 0; i < cart.items.length; i++ ) {
    // TODO: Create a TR
    const trElement = document.createElement( 'tr' );

    // TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
    tBody.appendChild( trElement );

    // TODO: Create a TD for the delete link, quantity,  and the item
    const cellElement = document.createElement( 'td' );
    trElement.appendChild( cellElement );

    const cellElement1 = document.createElement( 'a' );
    cellElement1.id = cart.items[i].product;
    cellElement.appendChild( cellElement1 );
    cellElement1.textContent = 'X';

    const cellElement3 = document.createElement( 'td' );
    trElement.appendChild( cellElement3 );
    cellElement3.textContent = cart.items[i].quantity;

    const cellElement2 = document.createElement( 'td' );
    trElement.appendChild( cellElement2 );
    cellElement2.textContent = cart.items[i].product ;
  }
}

function removeItemFromCart( event ) {


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let removedItem = event.target.id;
  let tempArray = [];
  for ( let i = 0; i < cart.items.length; i ++ ) {
    if ( cart.items[i].product !== removedItem ) {
      tempArray.push( cart.items[i] );
    }}

  // TODO: Save the cart back to local storage
  localStorage.setItem( 'cart', JSON.stringify( tempArray ) );

  // TODO: Re-draw the cart table
  clearCart();
  location.reload( true );
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
