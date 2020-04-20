
let cloud = document.getElementById("cloud");
let birds = document.getElementById("birds");

let lighthouse = document.getElementById("lh");
let pulse = document.getElementById("pulse");

cloud.addEventListener("mouseover", function(){
    birds.style.display = "initial";

    setTimeout(function(){ birds.style.display = "none"; }, 5000); // makes birds disappear
});

lighthouse.addEventListener("mouseover", function(){
    pulse.style.display = "initial";

    setTimeout(function(){ pulse.style.display = "none"; }, 4700); // makes light disappear
});