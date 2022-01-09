// ProductAPI.jsx
// Author: Link Jones
// Last modified: 15/09/2021
// Version: 1.0
// Contains the list of products available in the store

import Watch from './images/watch.png';
import Wine from './images/wine.png';
import Tie from './images/tie.png';
import Shorts from './images/shorts.png';
import Shoes from './images/shoes.png';
import Skirt from './images/skirt.png';

//Product fields:
//id: unique product ID
//name: product name
//imageSrc: source image for product display
//price: unit price
//quantity: quantity added to cart
//description: product description

const products = [
    {
        id: 1,
        name: "Wine", 
        imageSrc: Wine, 
        price: 12, 
        quantity: 0,
        description:  "Metus egestas at. Integer eget arcu sit amet augue bibendum pellentesque. Curabitur al"
    },
    {
        id: 2,
        name: "Tie",
        imageSrc: Tie,
        price: 4,
        quantity: 0,
        description: "Nibh quis magna interdum bibendum. Orci varius natoq"
    },
    {
        id: 3,
        name: "Watch",
        imageSrc: Watch,
        price: 200,
        quantity: 0,
        description: "Sequat lacus id, eleifend massa. Fusce mauris. Maecenas ac risus convallis eget id sapien"
    },
    {
        id: 4,
        name: "Short",
        imageSrc: Shorts,
        price: 30,
        quantity: 0,
        description: "Obortis enim vulputate et. Praesent vitae sem vehicula, conseq"
    },
    {
        id: 5,
        name: "Shoe",
        imageSrc: Shoes,
        price: 7,
        quantity: 0,
        description: "Ac eleifend tellus dapibus nec. Donec blandit ligula eu pellentesque"
    },
    {
        id: 6,
        name: "Skirt",
        imageSrc: Skirt,
        price: 11,
        quantity: 0,
        description: "mauris. Etiam sit amet scelerisque diam. Donec lo"
    }
];

const getProducts = () => {
    return products;
}

//export the function only
export {getProducts};