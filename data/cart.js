export let cart = JSON.parse(localStorage.getItem('cart'));
  

if(!cart){
    cart = [{
        productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quatity : 2
    }
    ]; 
}


function saveToStorage(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
  
    cart.forEach((item)=>{
     if(productId === item.productId){
         matchingItem = item;
     }
    });
  
  
    if(matchingItem){
     matchingItem.quatity+=1;
    }else{
     cart.push({
         productId : productId,
         quatity : 1
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