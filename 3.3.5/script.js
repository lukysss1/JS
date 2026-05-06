let podminka = !false;

podminka = true && true;

podminka = false || true;
console.log(podminka)

//Podmínka pře if

let number = 10;
let message;

if (number > 0) {
    message = "Číslo je kladné.";
} else {
    message = "Číslo není kladné.";
}
console.log(message);

//Druhé řešení pomocí ternárního operátoru

number2 = 10;
let message2 = (number2 > 0) ? "Číslo je kladné." : "Číslo není kladné.";
console.log(message2);
