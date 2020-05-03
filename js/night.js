let star = document.getElementById("star");
let fire = document.getElementById("fire");
let moon = document.getElementById("moon");
let hinge = document.getElementById("hinge");
let remy = document.getElementById("rat");
let moth = document.getElementById("moth");
let money = document.getElementById("money");
let bonfire = document.getElementById("bonfire");

star.addEventListener("mouseover", function(){
   fire.style.visibility = "visible";
})

star.addEventListener("mouseleave", function(){
    fire.style.visibility = "hidden";
})

moon.addEventListener("mouseover", function(){
    hinge.play();

    remy.animate(
        [
            { transform: 'scale(1) translateY(0px)' },
            { transform: 'scale(1.3) translateY(-20px)' },
            { transform: 'scale(1) translateY(0px)' }
        ],
        {
            duration: 1000,
            interations: 2,
            direction: "alternate",
            easing: "ease-out"
        }

    )
})

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("image", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image");
    money.style.visibility = "hidden";
    bonfire.src = "media/night/moneyBurn.gif";
    bonfire.style.bottom = "0px";
}