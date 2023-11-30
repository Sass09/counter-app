
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {

count+= 1
countEl.textContent = count 

}

function save(){

let prevEntries = count + " - "

saveEl.textContent += prevEntries

    console.log(count)
}