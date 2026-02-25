let totalPrice = 90;
let discount = 0.3;
if (totalPrice >= 100) {
    console.log("Máte nárok na slevu! Po uplatnění slevy bude cena " + (totalPrice * (1 - discount)) + " Kč.");
} else {
     console.log("Utrať ještě " + (100 - totalPrice) + " Kč a získáš 30% slevu!");  
}
