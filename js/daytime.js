let flower1 = document.getElementById("flower1");
let flower2 = document.getElementById("flower2");
let body = document.querySelector("body");
let tree = document.getElementById("tree");
let money = document.getElementById("money");

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

tree.addEventListener("mouseover", function(){
    setTimeout(function(){ money.style.visibility = "visible"; }, 1600);
})

tree.addEventListener("mouseleave", function(){
    money.style.visibility = "hidden";
})

