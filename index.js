const div = document.querySelector("div");
let x = 150;
let y = 50;
let  insertx;
let  inserty;
div.style.top = y + "px";
div.style.left = x + "px";

let moveaction = false;

div.addEventListener("mousedown", (e) => {
    div.style.backgroundColor = "gray";
    moveaction = !moveaction;
    insertx = e.offsetX;
    inserty = e.offsetY;
})
div.addEventListener("mousemove", (e) => {
    if (moveaction) {
        x = e.clientX - insertx;
        y = e.clientY - inserty;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
    }
})
div.addEventListener("mouseup", () => {
    div.style.backgroundColor = "black";
    moveaction = !moveaction;
})