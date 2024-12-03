const num1 = Number(prompt("Inserisci il primo numero:"))
const num2 = Number(prompt("Inserisci il secondo numero:"))

let nmax;

if (num1 > num2) {
    nmax = num1
} else if (num1 < num2) {
    nmax = num2
} else {
    nmax = "I numeri sono uguali"
}

alert(`Il numero maggiore è: ${nmax}`)








