let plithosEl = document.getElementById("plithos-el");
let saveEl = document.getElementById("save-el");
let sumEl = document.getElementById("sum-el");

let plithos = 0;
let sum = 0;

function plus() {
    plithos = plithos + 1 // ή plithos += 1
    plithosEl.innerHTML = plithos;
}

function save() {
    let plithosStr = plithos + " - ";
    saveEl.innerHTML += plithosStr;
    sum = sum + plithos;
    sumEl.innerHTML = "Άθροισμα: " + sum;
    plithos = 0;
    plithosEl.innerHTML = 0;
}