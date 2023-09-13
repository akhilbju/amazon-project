import {cart, deleteFromCart} from "../data/cart.js"
import { products } from "../data/products.js";



function summary(){
  let productsPrice = 0
  let productsQuantity = 0;
  cart.forEach((items) =>{

    productsQuantity += items.quatity;
    let ProductID = items.productId;
  
    products.forEach((product) =>{
      if(ProductID === product.id){
        productsPrice += productsQuantity*product.priceCents;
      }
    });
  });
  let product = document.querySelector('.js-items-row');
  let payment = document.querySelector('.js-payment-summary'); 
  let shipping = document.querySelector('.js-shipping');
  let taxShow = document.querySelector('.js-payment-summary-tax');
  let total = document.querySelector('.js-total');
  let beforeTaxshow = document.querySelector('.js-before-tax');
  let shippingcharge;
  
 

  if((productsPrice/100)<20){
    shippingcharge = 0;
  }else{
    shippingcharge = 4.99;
  }
  
  let beforeTax = ((productsPrice/100) + shippingcharge);
  let tax = (beforeTax*.1);
  let totalPrice = tax+beforeTax;

  shipping.innerHTML = `$${shippingcharge}`;
  payment.innerHTML = `$${(productsPrice/100).toFixed(2)}`
  product.innerHTML = `Items (${productsQuantity}):`
  beforeTaxshow.innerHTML = `$${(beforeTax).toFixed(2)}`;
  taxShow.innerHTML = `$${(tax).toFixed(2)}`
  total.innerHTML = `$${(totalPrice).toFixed(2)}`
  

}


function upDateCartQuantity(){
  let cartQuantity=0;
  cart.forEach((item) =>{
   cartQuantity+=item.quatity;
  });
  document.querySelector('.js-items-show').innerHTML=`${cartQuantity} items`; 
  
}


summary();
upDateCartQuantity();


let cartShowHTML  = '';


cart.forEach((cartItem,index) => {

    const productId = cartItem.productId;
    let matchingProduct=[];

    products.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product;
        }
    })
    


    cartShowHTML += `<div class="cart-item-container 
      js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}"></

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${(matchingProduct.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quatity}
                  </span>
                  <span class="update-quantity-link link-primary js-update">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary 
                  js-delete-link" data-product-id ="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${index}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${index}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${index}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          `

});

document.querySelector('.js-order-summary').innerHTML = cartShowHTML;
document.querySelectorAll('.js-delete-link')
.forEach((link) =>{
  link.addEventListener('click', () =>{
    const productId = link.dataset.productId;
    deleteFromCart(productId);
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    upDateCartQuantity();
    summary();


  });

});







  

    

