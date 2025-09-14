const products = [
  {
    name: "Producto # 01",
    img: "img/FLIGHT-CASE05.png",
    leftTitle: "Protección Superior",
    leftText: "Case resistente con acabados premium y diseño moderno.",
    rightTitle: "Detalles Técnicos",
    rightText: "Material ABS + TPU, antideslizante, ligero y fácil de limpiar."
  },
  {
    name: "Producto # 02",
    img: "img/FLIGHT-CASE08.png",
    leftTitle: "Estilo Elegante",
    leftText: "Diseño sofisticado que combina funcionalidad y estética.",
    rightTitle: "Características",
    rightText: "Resistente al agua, bordes reforzados y acabado mate."
  },
  {
    name: "Producto # 03",
    img: "img/FLIGHT-CASE.PNG",
    leftTitle: "Durabilidad Extrema",
    leftText: "Soporta golpes y caídas sin dañar el dispositivo.",
    rightTitle: "Especificaciones",
    rightText: "Diseño ergonómico con agarre cómodo y seguro."
  },
  {
    name: "Producto # 04",
    img: "img/FLIGHT_CASE01PNG.png",
    leftTitle: "Durabilidad Extrema",
    leftText: "Soporta golpes y caídas sin dañar el dispositivo.",
    rightTitle: "Especificaciones",
    rightText: "Diseño ergonómico con agarre cómodo y seguro."
  }
];

let currentIndex = 0;

const productName = document.getElementById("product-name");
const productImg = document.getElementById("product-img");
const textLeft = document.getElementById("text-left");
const textRight = document.getElementById("text-right");

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % products.length;
  updateProduct();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  updateProduct();
});

function updateProduct() {
  const product = products[currentIndex];
  productName.textContent = product.name;
  productImg.src = product.img;
  textLeft.innerHTML = `<h3>${product.leftTitle}</h3><p>${product.leftText}</p>`;
  textRight.innerHTML = `<h3>${product.rightTitle}</h3><p>${product.rightText}</p>`;
}

// Inicializar
updateProduct();
