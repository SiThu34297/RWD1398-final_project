const special = document.querySelector(".special");
//get data from data json
async function getDisProduct(){
     const response = await fetch("/data/discount.json");
     const productData = await response.json();
     return productData;
}
//show discount
async function showDis(){
     let special_container = "";
     const product = await getDisProduct();
     product.forEach(products => {
          special_container += `
          <div class="special-container">
               <img src="${products.image}" alt="img"/>
               <span class="discount">${products.DiscountPer}</span>
                    <div class="special-box">
                         <span>${products.itemName}</span>
                          <del>${products.Price}</del>
                         <span>${products.DiscountP}</span>
                         <i class="fas fa-shopping-cart"></i>
                    </div>
          </div>
          `;
     });
     special.innerHTML = special_container;
}
//window load event
window.addEventListener('load' , showDis);