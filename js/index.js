const bs_list = [
    {id:"bs_1", name:"Chicken Curry Cut - Small Pieces", value:"bs_list", image:"./images/bestsellers/chicken-bs.jpg", weight: "500gms", price:150, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"bs_2", name:"Smoked Chicken Wings", value:"bs_list", image:"./images/bestsellers/smoked-wings-bs.webp", weight: "300gms", price:169, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"bs_3", name:"Chicken Breast - Boneless", value:"bs_list", image:"./images/bestsellers/chicken-breast-boneless-bs.jpg", weight: "450gms", price:285, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"bs_4", name:"Chicken Thigh Boneless", value:"bs_list", image:"./images/bestsellers/chicken-thigh-boneless-bs.jpg", weight: "450gms", price:349, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"bs_5", name:"Rohu (Rui/Kannadi Kendai) Medium - Bengali Cut, No ", value:"bs_list", image:"./images/bestsellers/rohu-bs.jpg", weight: "500gms", price:269, deliveryTime:"Today in 90 min", quantity: 0}    
]

const combo_list = [
    {id:"combo_1", name:"Goat Mince - Combo", value:"combo_list", image:"./images/combos/goat-mince.webp", weight:"900gms", price:994, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"combo_2", name:"Chicken Curry Cut(Small Pcs) - 500 gms and Chicken", value:"combo_list", image:"./images/combos/chicken-curry-cut.webp", weight:"500gms", price:315, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"combo_3", name:"Assorted Kebab Platter | Ready to Cook", value:"combo_list", image:"./images/combos/assorted-kebeb-platter.jpg", weight:"720gms", price:939, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"combo_4", name:"Chicken Kebab & Biryani Combo", value:"combo_list", image:"./images/combos/chicken-kebab.webp", weight:"5 Pieces", price:373, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"combo_5", name:"Chicken Curry Cut(Small Pcs) - 500 gms and Chicken", value:"combo_list", image:"./images/combos/chicken-curry-cut-2.webp", weight:"500gms", price:441, deliveryTime:"Today in 90 min", quantity: 0}

]

const budget_list = [
    {id:"budget_1", name:"Chicken Curry Cut - Small Pieces", value:"budget_list", image:"./images/budget/chicken-curry-cut-1.jpg", weight: "500gms", price:159, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"budget_2", name:"Chicken Curry Cut - Large Pieces", value:"budget_list", image:"./images/budget/chicken-curry-cut-2.jpg", weight: "500gms", price:159, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"budget_3", name:"Classic Eggs - Pack Of 12", value:"budget_list", image:"./images/budget/classic-eggs-1.jpg", weight: "12 Pieces", price:170, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"budget_4", name:"Classic Eggs - Pack Of 6", value:"budget_list", image:"./images/budget/classic-eggs-2.jpg", weight: "6 Pieces", price:85, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"budget_5", name:"Country Eggs - Pack Of 6", value:"budget_list", image:"./images/budget/classic-eggs-3.jpg", weight: "6 Pieces", price:95, deliveryTime:"Today in 90 min", quantity: 0},
]

const breakfast_list = [
    {id:"breakfast_1", name:"Chunky Butter Chicken Spread", value:"breakfast_list", image:"./images/breakfast-meals/butterchicken.webp", weight:"1 Pieces", price:219, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"breakfast_2", name:"Peppery Chicken Salami", value:"breakfast_list", image:"./images/breakfast-meals/Peppery-Chicken-Salami-1.webp", weight:"200gms", price:325, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"breakfast_3", name:"Chunky Shawarma Chicken Spread", value:"breakfast_list", image:"./images/breakfast-meals/Shawarma-Chicken.webp", weight:"1 Pieces", price:219, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"breakfast_4", name:"Chicken Chorizo Frankfurter", value:"breakfast_list", image:"./images/breakfast-meals/Peppery-Chicken-Salami-2.jpg", weight:"4 Pieces", price:299, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"breakfast_5", name:"Peppery Chicken Salami(Mini) | Ready To Eat", value:"breakfast_list", image:"./images/breakfast-meals/Chunky-Continental-Chicken.webp", weight:"125gms", price:199, deliveryTime:"Today in 90 min", quantity: 0}
]

const boneless_list = [
    {id:"boneless_1", name:"Chicken Boneless - Mini Bites", value:"boneless_list", image:"./images/boneless/mini-bites.jpg", weight:"250gms", price:199, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"boneless_2", name:"Goat Boneless", value:"boneless_list", image:"./images/boneless/goat-boneless.webp", weight:"500gms", price:833, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"boneless_3", name:"Basa(Pungus/Vaalla Meen) - Boneless Cubes", value:"boneless_list", image:"./images/boneless/basa-boneless-cubes.jpg", weight:"400gms", price:479, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"boneless_4", name:"Chicken Breast Boneless", value:"boneless_list", image:"./images/boneless/chicken-breast.jpg", weight:"450gms", price:285, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"boneless_5", name:"Seer (Anjal/Vanjaram/Neyi Meen) Medium - Boneless", value:"boneless_list", image:"./images/boneless/seer.webp", weight:"300gms", price:1059, deliveryTime:"Today in 90 min", quantity: 0}
]

const top_rated_list = [
    {id:"top_rated_1", name:"Chicken Breast Boneless", value:"top_rated_list", image:"./images/top-rated/chicken-breast.jpg", weight:"450gms", price:285, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"top_rated_2", name:"Chicken Mince (Keema)", value:"top_rated_list", image:"./images/top-rated/mince.webp", weight:"450gms", price:299, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"top_rated_3", name:"Afghani Murgh Seekh Kebab", value:"top_rated_list", image:"./images/top-rated/afgani-murgh.jpg", weight:"4 Pieces", price:269, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"top_rated_4", name:"Chicken Tangdi Biryani Cut", value:"top_rated_list", image:"./images/top-rated/chicken-tangdi.jpg", weight:"450gms", price:285, deliveryTime:"Today in 90 min", quantity: 0},
    {id:"top_rated_5", name:"Basa(Pungus/Vaalla Meen) - Boneless Cubes", value:"top_rated_list", image:"./images/top-rated/basa.jpg", weight:"400gms", price:479, deliveryTime:"Today in 90 min", quantity: 0}
]

const new_arrivals = [
    {id:"arrival-1", image:"./images/fresh-at-licious/game_zone.jpeg", alt:"game zone image"},
    {id:"arrival-2", image:"./images/fresh-at-licious/Mutton_Delights.jpeg", alt:"mutton delights image"},
    {id:"arrival-3", image:"./images/fresh-at-licious/Perfect_Match.jpeg", alt:"perfect match image"}
]

// function to get by id or classname
$ = (name) => {
    let element = document.querySelector(name);
    return element;
}


function generateCards(obj) {
    return `<li>
                <div class="card card-1" id=${"container_"+obj.id}>
                    <div class="img">
                        <img src="${obj.image}" alt="${obj.name}" style="width: 100%; border-radius: 10px;">
                        <div class="card-buttons">
                            <button class="remove" id=${"remove_"+obj.id} onclick="removeItem(${"remove_"+obj.id}, ${obj.value})" value=${obj.value}>-</button>
                            <p class="value" id=${"quantity_"+obj.id}>0</p>
                            <button class="add" id=${"add_"+obj.id} onclick="addItem(${"add_"+obj.id}, ${obj.value})" value=${obj.value}>+</button>
                        </div>
                    </div>
                    <div class="desc">
                        <h4 class="heading">${obj.name}</h4>
                        <p class="weight">${obj.weight}</p>
                    </div>
                    <div class="price">
                        <p>₹<b>${obj.price}</b></p>
                    </div>
                    <div class="delivery-time">
                        <p>${obj.deliveryTime}</p>
                    </div>
                </div>
            </li>`;
}

function generateNewArrivals(obj) {
    return `<li>
                <div class="fresh-at-licious id="${obj.id}">
                    <img src="${obj.image}" alt="${obj.alt}">
                </div>
            </li>`;
}

function $push(ele, func) {
    const res = ele.map(func).join("");
    return res;
}

function appendCards(array1, array2) {

    for(let i=0; i<array1.length; i++) {
        array1[i].innerHTML = array2[i] + `<li>
    <div class="card card-6">
        <div class="empty-card">
            <button class="view-all">View All</button>
        </div>
    </div>
    </li>`;
    }
}

function generateCartItems(obj) {
    return `<li>
                <div class="product" id = ${"product_"+obj.id}>
                    <div class="product-details">
                        <img src="${obj.image}" alt="product image">
                        <div class="product-name">${obj.name}<br>${obj.weight}</div>
                    </div>
                    <div class="product-price">
                        <div class="card-buttons">
                            <button class="remove" id=${"remove_"+JSON.stringify(obj.id)} onclick="removeItem(${"remove_"+obj.id}, ${obj.value})" value="${obj.value}">-</button>
                            <p class="value" id=${"quantity_"+obj.id}>${obj.quantity}</p>                                                         
                            <button class="add" id=${"add_"+JSON.stringify(obj.id)} onclick="addItem(${"add_"+obj.id}, ${obj.value})" value="${obj.value}">+</button>
                        </div>
                        <p class="price">₹${obj.price}</p>
                    </div>
                </div>
            </li>`;
}

function appendCartItems() {
    const display_cart = $(".cart-items");
    const cart_div = $(".cart-list");
    const cart = document.querySelector("#items-list");
    let cartValue = calculateItems();
    cart.innerHTML = cart_items.map(generateCartItems).join("") + `<div class="total">
                        <p>Total Amount: </p>
                        <p>₹<span class="check-out-price">${cartValue[1]}</span></p>
                        </div>`;

    if(cart_items.length == 0){
        cart_div.innerHTML = ( `<ul class="items-list" id="items-list"></ul>
                                <p class="no-items">Cart is Empty...</p>`);
    }
}

//cart display functionality
function displayCart() {
    const container = $(".container-2");

    const cart = $(".cart-items");
    cart.style.display = cart.style.display == "block" ? "none" : "block";
    container.classList.toggle("blur-filter");
    container.removeEventListener('click',clickHandlerOfBlur); 
    ////------------------changes made here-----------------
    // container.className = "blur-filter";
}

function updateButtons() {
    // const remove_btn = $("#remove_"+id);
    // const quantity = $("#quantity_"+id);
    const sub_str1 = "#remove_";
    const sub_str2 = "#quantity_"

    cart_items.map((item) => {
        const remove_btn = document.querySelector(sub_str1+item.id);
        const count = document.querySelector(sub_str2+item.id);

        
        if(item.quantity >= 1) {
            count.textContent = item.quantity;
            remove_btn.style.display = "inline-block";
            count.style.display = "inline-block";
        }else {
            remove_btn.style.display = "none";
            count.style.display = "none";     
        }
    })
}

// adding items to cart 
function addItem(id, value) {
    id = id.id.substring(4); //id array -> array.id.substring(4)
    const remove_btn = $("#remove_"+id);
    const quantity = $("#quantity_"+id);

    const index1 = value.findIndex((arr) => arr.id == id);
    const index2 = cart_items.findIndex((arr) => arr.id == id);
    value[index1].quantity++

    
    if(index2 == -1) {
        cart_items.push(value[index1]);
    }
    else {
        console.log("found");
        cart_items[index2] = value[index1];
    }

    remove_btn.style.display = "inline-block";
    quantity.style.display = "flex";

    quantity.textContent++;

    localStorage.setItem("cart",JSON.stringify(cart_items));
    
    // hiding the button at navbar if cart becomes empty 
    updateCartField();

    

    // updating the total price 
    const curr_price = $(".check-out-price");
    const cartValue = calculateItems();

    if(curr_price != null) {
        curr_price.innerText = cartValue[1];
    }
}

function removeItem(id, value) {
    id = id.id.substring(7);
    
    const remove_btn = $("#remove_"+id);
    const quantity = $("#quantity_"+id);
    const empty_cart = $(".cart");
    const non_empty_cart = $(".non-empty-cart");
    const item_count = $(".count");
    const total_price = $(".amount");
    const cart_item = $("#product_"+id);

    // quantity.textContent = quantity.textContent >=1 ?quantity.textContent-- : 0;
    
    cart_items = JSON.parse(localStorage.getItem("cart"));
    
    const index = value.findIndex((arr) => arr.id == id);
    const index2 = cart_items.findIndex((arr) => arr.id == id);

    // decreasing the quantity in cart 
    if(value[index].quantity >= 1) {
        value[index].quantity--;
    }

    let quan = document.querySelectorAll("#quantity_"+id);

    if(cart_item != null) {
        quan[0].textContent--;
        quan[1].textContent--;
        if(quan[0].textContent < 1) {
            quan[0].style.dispaly = "none";
            quan[1].style.dispaly = "none";
            quantity.style.display = "none";
            cart_item.remove();
        }
    }
    else if(quantity.textContent >= 1){
        quantity.textContent--;
    }

    // updating it in the cart 
    cart_items[index2] = value[index];
    
    // checking if the quantity is equals to 0 then removing the item from cart 
    if(value[index].quantity == 0) {
        cart_items= cart_items.filter(item => item.id!==id);
    }

    // updating it in the local storage 
    localStorage.setItem("cart", JSON.stringify(cart_items));

    // hiding the remove button if quantity becomes 0
    if(quantity.textContent < 1) {
        remove_btn.style.display = "none";
        quantity.style.display = "none";
    }

    // updating the quantity in the cart button
    // hiding the button at navbar if cart becomes empty 
    if(cart_items.length == 0)  {
        empty_cart.style.display = "flex";
        non_empty_cart.style.display = "none";
    }
    else if(cart_items.length >= 1)  {
        empty_cart.style.display = "none";
        non_empty_cart.style.display = "flex";
    }
    const cartValue = calculateItems();
    item_count.textContent = Number(cartValue[0]) >=1 ? Number(cartValue[0]) : 0;
    total_price.textContent = Number(cartValue[0]) >=1 ? Number(cartValue[1]): 0; //Number(total_price.textContent)
    console.log(cartValue);

    // updating the total price 
    const price_tag = $(".total");
    const curr_price = $(".check-out-price");

    curr_price.innerText = cartValue[1];
    const cart_div = $(".cart-list");
    if(price_tag != null && cart_items.length == 0) {
        price_tag.remove();
        // cart_div.innerHTML = ( `<ul class="items-list" id="items-list"></ul>
        // <p class="no-items">Cart is Empty...</p>`);
    }
}

function calculateItems() {
    let cartValue = [];
    cartValue.push(0);
    cartValue.push(0);
    
    if(cart_items.length != 0) {
        cartValue[0] = cart_items.reduce(function (acc, curr) {
            acc += curr.quantity;
            return acc;
        }, 0);
        cartValue[1] = cart_items.reduce(function (acc, curr) {
            acc += curr.price;
            return acc * curr.quantity;
        }, 0)
    }

    return cartValue;
}

function updateCartField() {
    const empty_cart = $(".cart");
    const non_empty_cart = $(".non-empty-cart");
    const item_count = $(".count");
    const total_price = $(".amount");    

    if(cart_items.length == 0)  {
        empty_cart.style.display = "flex";
        non_empty_cart.style.display = "none";
    }
    else if(cart_items.length >= 1)  {
        empty_cart.style.display = "none";
        non_empty_cart.style.display = "flex";

        const cartValue = calculateItems();
        item_count.textContent = Number(cartValue[0]) >=1 ? Number(cartValue[0]) : 0;
        total_price.textContent = Number(cartValue[0]) >=1 ? Number(cartValue[1]): 0; // Number(total_price.textContent) + 
        console.log(cartValue);
    }
}

function onReloadPage() {
    if(localStorage.getItem("cart") != null && localStorage.getItem("cart").length != 0) {
        cart_items = JSON.parse(localStorage.getItem("cart"));
        updateCartField();
        updateButtons();
    }
}

const productListTags = [];
productListTags.push($push(bs_list, generateCards));
productListTags.push($push(combo_list, generateCards));
productListTags.push($push(budget_list, generateCards));
productListTags.push($push(breakfast_list, generateCards));
productListTags.push($push(boneless_list, generateCards));
productListTags.push($push(top_rated_list, generateCards));

let cart_items = [];

const list_of_products = document.querySelectorAll(".list");
const arrival_list = $(".arrival-list");
const cart_btn = document.querySelectorAll(".cart-btn");
const cart = $(".cart");

cart_btn[0].addEventListener("click", displayCart);
cart_btn[1].addEventListener("click", displayCart);

arrival_list.innerHTML = $push(new_arrivals, generateNewArrivals);
appendCards(list_of_products, productListTags);

//-----------------------------and here also-----------------------------
const clickHandlerOfBlur=$(".container-2")
    .addEventListener('click',()=>$(".cart-items")
    .style.display == "block"?displayCart():{});


onReloadPage();
appendCartItems();