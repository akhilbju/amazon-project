export const cart = []; 

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
     })
  
    } 
  }
  