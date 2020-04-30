let flower1 = document.getElementById("flower1");
let flower2 = document.getElementById("flower2");
let body = document.querySelector("body");

flower1.addEventListener("mouseenter", function(){
    body.style.cursor = "pointer";
    flower1.src = "media/daytime/flower1.gif";
})

flower2.addEventListener("mouseenter", function(){
    body.style.cursor = "pointer";
    flower2.src = "media/daytime/flower2.gif";
})

flower1.addEventListener("mouseleave", function(){
    body.style.cursor = 'default';
    flower1.src = "media/daytime/flower1.png";
})

flower2.addEventListener("mouseleave", function(){
    body.style.cursor = 'default';
    flower2.src = "media/daytime/flower2.png";
})