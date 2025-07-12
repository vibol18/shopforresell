showProduct(products);
const cartIteam = document.getElementById("cartIteam");
const emptycart = document.getElementById("emptyCart");
let carts = JSON.parse(localStorage.getItem("carts")) || [];
const showCartIteam = (cartArray) =>{
    let CartList = "";
    cartArray.foreach((value)=>{
        CartList =+ `
        <div class="cart-item">
        <img src="${value.img}" alt="" class="item-image">
        <div class="item-details">
            <div class="item-name">${value.name}</div>
            <div class="item-price">$${price}</div>
        </div>
        <div class="quantity-controls">
            <button class="qty-btn">−</button>
            <span class="qty-display">5</span>
            <button class="qty-btn"">+</button>
        </div>
        <button class="remove-btn">Remove</button>
    </div>
        `
    })
}
