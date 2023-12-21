let countElh = document.getElementById("count-h")
let counth = 0

function increment1h() {
    counth += 1
    countElh.textContent = counth
}
function increment2h() {
    counth += 2
    countElh.textContent = counth
}
function increment3h() {
    counth += 3
    countElh.textContent = counth
}
let countElg = document.getElementById("count-g")
let countg = 0

function increment1g() {
    countg += 1
    countElg.textContent = countg
}
function increment2g() {
    countg += 2
    countElg.textContent = countg
}
function increment3g() {
    countg += 3
    countElg.textContent = countg
}
function resetg() {
    countg = 0
    countElg.textContent = countg
}
function reseth() {
    counth = 0
    countElh.textContent = counth
}

function resetall() {
    counth = 0
    countElh.textContent = counth
    countg = 0
    countElg.textContent = countg
}