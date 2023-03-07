import { getCart } from "./shoppingCart";
import { getProducts } from "./productCatalog";

const calculateTotal=()=>{
    let cart=getCart();
    let products=getProducts();
    let total=0;

    for(let item of cart){
        let product=products.find(p=>p.id===item.id);
        total+=product.price*item.quentity;
    }
    return total;
}


export {calculateTotal};