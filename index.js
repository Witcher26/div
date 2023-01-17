const progressNode = document.querySelectorAll('.container');

console.log(progressNode);

progressNode.forEach((el) => {
    el.onclick =() => {
        console.log("click");
        el.style.background = "green";
        el.style.width = "100px";
    }
})

function clickFunc(event) {
    console.log(event.target)
}