let butt = document.querySelector("button");

butt.addEventListener("click", bePurple);

function bePurple() {
    if(document.body.style.background === "purple"){
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple"
    }
}