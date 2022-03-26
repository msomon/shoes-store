// use local storage to manage cart data
const addToDb = product =>{
        const storedCart = localStorage.getItem('product.name');
        if(storedCart){
            const shoppingCart = JSON.parse(storedCart);
            if(product in shoppingCart){
                delete shoppingCart[product];
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            }
        }
    }

   
export {addToDb}