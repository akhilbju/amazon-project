export let cart = JSON.parse(localStorage.getItem('cart'));
  


function saveToStorage(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId,quantityValue){
    let matchingItem;
  
    cart.forEach((item)=>{
     if(productId === item.productId){
         matchingItem = item;
     }
    });
  
  
    if(matchingItem){
     matchingItem.quatity += quantityValue;
    }else{
     cart.push({
         productId : productId,
         quatity : quantityValue
     });
  
    } 
    saveToStorage();
  }
  export function deleteFromCart(productId){
    const newCart =[];
    cart.forEach((cartItem) =>{
        if(productId !== cartItem.productId){
            newCart.push(cartItem);
        } 

    });
    cart = newCart; 
    saveToStorage() ;
    

  }

