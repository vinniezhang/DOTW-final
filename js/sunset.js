
let cloud = document.getElementById("cloud");
let birds = document.getElementById("birds");


cloud.addEventListener("mouseover", function(){
    birds.style.display = "initial";

    setTimeout(function(){ birds.style.display = "none"; }, 5000); // makes birds disappear

  });