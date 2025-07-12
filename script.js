const form = document.getElementById("form");
const previewImage = document.querySelector(".preview");
const selectImg = document.getElementById("select-img");
const productGrid = document.querySelector(".products-grid");
const searchInput = document.getElementById("search");

let imageSeleted = "";
let products = JSON.parse(localStorage.getItem("products")) || [];

searchInput.addEventListener("input", () => {
  let productsAfterSearch = products.filter((pro) =>
    pro.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  showProduct(productsAfterSearch);
});

selectImg.addEventListener("change", () => {
  const file = selectImg.files[0];
  previewImage.classList.add("show");
  previewImage.src = URL.createObjectURL(file);

  const reader = new FileReader();

  reader.onload = (e) => {
    imageSeleted = e.target.result;
  };

  reader.readAsDataURL(file);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (data.name == "" || data.price == "") {
    alert("Empty Field");
  } else {
    products = [...products, {id:Date.now (),  ...data, image: imageSeleted }];
    //products.push({ ...data, image: imageSeleted })

    localStorage.setItem("products", JSON.stringify(products));
    form.reset();
    showProduct(products);
    previewImage.classList.remove("show");
  }
});

const showProduct = (productsToShow) => {
  let cards = "";
  productsToShow.forEach((value) => {
    cards += `
        <div class="card">
            <img src="${value.image}" alt="Coca Cola" />
            <h3>${value.name}</h3>
            <div class="price">$${parseInt(value.price).toFixed(2)}</div>
            <button onclick="addToCard">Add To Cart</button>
        </div>
        `;
  });
  productGrid.innerHTML = cards;
};
showProduct(products);

