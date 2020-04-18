let water = document.querySelector("#waterDiv");

function displayRipple(){
    let y = event.clientY;

    if (y > 540) {
        
    } else {
        document.querySelector("body").style.cursor = "auto";
    }
}

document.onmousemove = displayRipple;


