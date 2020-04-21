
let cloud = document.getElementById("cloud");
let birds = document.getElementById("birds");
let chirp = document.getElementById("chirp");

let lighthouse = document.getElementById("lh");
let pulse = document.getElementById("pulse");
let ramen = document.getElementById("ramen");

cloud.addEventListener("mouseover", function(){
    birds.style.display = "initial";
    chirp.play();

    setTimeout(function(){ birds.style.display = "none"; }, 5000); // makes birds disappear
});

lighthouse.addEventListener("mouseover", function(){
    pulse.style.display = "initial";
    ramen.style.display = "initial";

    setTimeout(function(){ pulse.style.display = "none"; ramen.style.display = "none"; }, 5000); // makes light disappear
});