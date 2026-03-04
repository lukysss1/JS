let isLoggedIn = true;
let IsAdmin = false;

if (isLoggedIn) {
    console.log("Vítej na stránce!");
    if (IsAdmin) {
        console.log("Přístup do panelu admin je povolen.");
    } else {
        console.log("Přístup jako uživatel povolen."); 
    }
}

// Operátory

let age = 20;
let hasDriversLicense = true;

if (age >= 18 && hasDriversLicense) {
    console.log("Můžete řídit auto.");
} else {
    console.log("Nemůžete řídit auto.");
}

let IsHoliday = false;
let IsWeekend = true;

if (IsHoliday || IsWeekend) {
    console.log("Je čas relaxovat! :)");
} else {
    console.log("Musíme pracovat. :(");
}

let PriceCatAdult = 1;
let PriceCatChild = 0.3;
let PriceCatChildUnder3 = 0;
let FullPrice = 100;
let novejage = 25;

if (novejage >= 18) {
    console.log("Cena pro dospělého: " + (FullPrice * PriceCatAdult) + " Kč.");
} else if (novejage >= 3) {
    console.log("Cena pro dítě: " + (FullPrice * PriceCatChild) + " Kč.");
} else {
    console.log("Cena pro dítě do 3 let: " + (FullPrice * PriceCatChildUnder3) + " Kč.");
}