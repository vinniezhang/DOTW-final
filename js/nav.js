
let xPos, yPos;
let body = document.querySelector('body');
let clock = document.querySelector("#clock");
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

clock.addEventListener("mousemove", function(){
    xPos = event.clientX;
    yPos = event.clientY;

    if (xPos < screenWidth/2-screenWidth/20) {
        console.log("nightime");
        body.style.cursor = 'url("./media/nav/moon.png"), default';
        clock.addEventListener("click", function(){
            window.location.href = "night.html"; // redirect to nighttime drawing
        })
    } else if (xPos > screenWidth/2+screenWidth/20) {
        console.log("daytime");
        body.style.cursor = 'url("./media/nav/sun.png"), default';
        clock.addEventListener("click", function(){
            window.location.href = "daytime.html"; // redirect to daytime drawing
        })
    } else {
        console.log("sunset time bb");
        body.style.cursor = 'url("./media/nav/ss.png"), default';
        clock.addEventListener("click", function(){
            window.location.href = "sunset.html"; // redirect to sunset drawing
        })
    }
})

clock.addEventListener("mouseleave", function(){
    body.style.cursor = 'default';
})


