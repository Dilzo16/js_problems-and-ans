import { calculateTotal } from "./checkout";
import { getProducts } from "./productCatalog";

import { addToCart,getCart } from "./shoppingCart";

let products=getProducts();


addToCart({id:1,quantity:2});
addToCart({id:2,quantity:1});

console.log(getCart);
console.log(calculateTotal());