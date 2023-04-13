var result = document.getElementById("result")

function clean() {
     result.innerHTML = ""
}

function insert(num) {
    result.innerHTML =  result.innerHTML + num
}
function calcular() {
    let total = document.getElementById("result").innerHTML
    if(total) {
        document.getElementById("result").innerHTML = eval(total)
    } else {
        alert('digite algo')
    }
}
function back() {
    let result = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = result.substring(0, result.length -1)
}
