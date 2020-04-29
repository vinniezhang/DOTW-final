
let xPos, yPos;
let body = document.querySelector('body');
let clock = document.querySelector("#clock");
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

clock.addEventListener("mouseover", function(){
    xPos = event.clientX;
    yPos = event.clientY;
    console.log("screen height: ", screenHeight);
    console.log("half height: ", screenHeight/2);
    console.log("Y: ", yPos);

    // need to access the CURRENT x and y pos, not the positions at which they enter the clock

    if (xPos < screenWidth/2 - 50 && yPos <= screenHeight/2) {
        console.log("nightime");
        clock.addEventListener("click", function(){
            window.location.href = "night.html"; // redirect to nighttime drawing
        })
    } else if (xPos > screenWidth/2 + 20 && yPos <= screenHeight/2) {
        console.log("daytime");
        clock.addEventListener("click", function(){
            window.location.href = "daytime.html"; // redirect to daytime drawing
        })
    } else if (yPos > screenHeight/2 - 20){
        console.log("sunset time bb");
        clock.addEventListener("click", function(){
            window.location.href = "sunset.html"; // redirect to sunset drawing
        })
    }
})




