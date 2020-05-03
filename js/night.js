let star = document.getElementById("star");
let fire = document.getElementById("fire");
let moon = document.getElementById("moon");
let hinge = document.getElementById("hinge");
let remy = document.getElementById("rat");
let moth = document.getElementById("moth");
let bonfire = document.getElementById("bonfire");

star.addEventListener("mouseover", function(){
   fire.style.visibility = "visible";
})

star.addEventListener("mouseleave", function(){
    fire.style.visibility = "hidden";
})

bonfire.addEventListener("mouseover", function(){
    moth.style.visibility = "visible";
 })
 
bonfire.addEventListener("mouseleave", function(){
    setTimeout(function(){ moth.style.visibility = "hidden"; }, 5000);

    // moth.style.visibility = "hidden";
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