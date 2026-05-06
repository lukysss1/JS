function dejMi3() {
    return 3
}
console.log(dejMi3())

function nasobic(a,b) {
    console.log(a*b)
}


let r = nasobic(5,3)
console.log(r)

// Funkce s return

function nasobic2(a,b) {
    return a * b;
}


let r2 = nasobic2(5,3)
console.log(r2)

// Return ukončí funkci

function konec() {
    console.log("A");
    return "Hotovo";
    console.log("B");  
}

let konec2 = konec()
console.log(konec())

// Cvičení

function jeSude(cislo) {
    return Boolean(cislo % 2 === 0);
}

console.log(jeSude(4))
console.log(jeSude(5))