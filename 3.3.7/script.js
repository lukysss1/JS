function rekniAhoj() {
    console.log("Čus");
}

rekniAhoj();
rekniAhoj();

let pozdrav = "Pozdrav!";

function ukazPozdrav() {
    console.log(pozdrav);
}

function testLocal() {
    let localValue = 123;
    console.log(localValue);
}

ukazPozdrav();
testLocal();


if (true) {
    var y = "var blok nerespektuje";
}
console.log(y); 

// Parametr a argument

function sayHello(name) {
    console.log("Ahoj, " + name + "!");
}

sayHello("Petr");

function addNumber(num1, num2) {
    console.log(num1 + num2);
};

addNumber(5, 10);

function vypisCisla(zacatek, konec) {
    for (let i = zacatek; i <= konec; i++) {
        console.log(i);
    }
}
vypisCisla(1, 5);
