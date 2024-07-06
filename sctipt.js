const card = document.getElementById("secondCar");
const btnAddCars = document.getElementById("moreCars");
let i = 0;
function addCar() {
    const newCard = card.cloneNode(true);
    let idCard = `car${i}`;
    newCard.id = idCard;
    i++;
    const fancyboxLinks = newCard.querySelectorAll(
        ".main__cards-card-mini a[data-fancybox]"
    );
    fancyboxLinks.forEach((link) => {
        link.setAttribute("data-fancybox", idCard);
    });
    let listCar = document.querySelector(".main__cards");
    listCar.appendChild(newCard);
    console.log(newCard);
}
btnAddCars.addEventListener("click", () => {
    addCar();
    addCar();
    addCar();
});
