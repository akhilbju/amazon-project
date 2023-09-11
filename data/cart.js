export const cart = [{
    productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quatity : 2
}
]; 

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
  