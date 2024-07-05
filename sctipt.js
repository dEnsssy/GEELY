const card = document.getElementById("secondCar");
const btnAddCars = document.getElementById("moreCars");
let i = 0;
function addCar() {
    const newCard = card.cloneNode(true);
    newCard.id = `car${i}`;
    i++;
    let listCar = document.querySelector(".main__cards");
    listCar.appendChild(newCard);
}
btnAddCars.addEventListener("click", () => {
    addCar();
    addCar();
    addCar();
});

// document.querySelectorAll("a").addEventListener(
//     "click",
//     function (event) {
//         event.preventDefault();
//         return false;
//     },
//     false
// );
