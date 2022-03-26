// use local storage to manage cart data
const addToDb = product =>{
    localStorage.setItem(product.name,product.id)
}
export {addToDb}