const productContainer = document.querySelector(".productCon");
//get product from data json
async function getProduct(){
     const response = await fetch("data/product.json");
     const productData =  await response.json();
     return productData;
}
//show user interface
async function showUI(){
          //show all product
          let detail_box = "";
          const product = await getProduct();
          product.forEach(products => {
              detail_box += `
                    <div class="detail-box ${products.category}">
                         <img src="${products.image}" alt="${products.category}">
                         <div class="img-text">
                              <span>${products.itemName}</span>
                              <span>${products.Price}</span>
                              <div class="btn">
                              <i class="fas fa-shopping-cart"></i>
                              </div>
                         </div>
                    </div>`;
          });
          productContainer.innerHTML = detail_box;
}
//window event
window.addEventListener("load" , showUI);

