let red_btn = document.getElementById("red_btn");
let content = document.getElementById("content");

red_btn.addEventListener("click", ()=> {
    content.style.backgroundColor = "red";
})

let blue_btn = document.getElementById("blue_btn");

blue_btn.addEventListener("click", ()=> {
    content.style.backgroundColor = "blue";
})

let green_btn = document.getElementById("green_btn");

green_btn.addEventListener("click", ()=> {
    content.style.backgroundColor = "green";
})