let cart=[];

const addToCart=(product)=>{
    cart.push(product);
}

const getCart=()=>{
    return cart;
}

export {addToCart,getCart}