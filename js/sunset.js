let water = document.querySelector("body");

var cursorArray = [
    'url("./media/sunset/water2/1.png"), auto',
    'url("./media/sunset/water2/2.png"), auto',
    'url("./media/sunset/water2/3.png"), auto',
    'url("./media/sunset/water2/4.png"), auto',
    'url("./media/sunset/water2/5.png"), auto',
    'url("./media/sunset/water2/6.png"), auto',
    'url("./media/sunset/water2/7.png"), auto',
    'url("./media/sunset/water2/8.png"), auto',
    'url("./media/sunset/water2/9.png"), auto',
    'url("./media/sunset/water2/10.png"), auto',
    'url("./media/sunset/water2/11.png"), auto',
    'url("./media/sunset/water2/12.png"), auto',
    'url("./media/sunset/water2/13.png"), auto',
    'url("./media/sunset/water2/14.png"), auto',
    'url("./media/sunset/water2/15.png"), auto',
    'url("./media/sunset/water2/16.png"), auto',
    'url("./media/sunset/water2/17.png"), auto',
    'url("./media/sunset/water2/18.png"), auto',
    'url("./media/sunset/water2/19.png"), auto',
    'url("./media/sunset/water2/20.png"), auto',
    'url("./media/sunset/water2/21.png"), auto',
    'url("./media/sunset/water2/22.png"), auto',
    'url("./media/sunset/water2/23.png"), auto',
    'url("./media/sunset/water2/24.png"), auto',
    'url("./media/sunset/water2/25.png"), auto',
    'url("./media/sunset/water2/26.png"), auto',
    'url("./media/sunset/water2/27.png"), auto',
    'url("./media/sunset/water2/28.png"), auto',
    'url("./media/sunset/water2/29.png"), auto',
    'url("./media/sunset/water2/30.png"), auto',
    'url("./media/sunset/water2/31.png"), auto',
    'url("./media/sunset/water2/32.png"), auto',
    'url("./media/sunset/water2/33.png"), auto',
    'url("./media/sunset/water2/34.png"), auto',
    'url("./media/sunset/water2/35.png"), auto',
    'url("./media/sunset/water2/36.png"), auto',
    'url("./media/sunset/water2/37.png"), auto',
    'url("./media/sunset/water2/38.png"), auto',
    'url("./media/sunset/water2/39.png"), auto',
    'url("./media/sunset/water2/40.png"), auto',
    'url("./media/sunset/water2/41.png"), auto',
    'url("./media/sunset/water2/42.png"), auto',
    'url("./media/sunset/water2/43.png"), auto',
    'url("./media/sunset/water2/44.png"), auto',
    'url("./media/sunset/water2/45.png"), auto',
    'url("./media/sunset/water2/46.png"), auto',
    'url("./media/sunset/water2/47.png"), auto',
    'url("./media/sunset/water2/48.png"), auto',
    'url("./media/sunset/water2/49.png"), auto',
    'url("./media/sunset/water2/50.png"), auto',
    'url("./media/sunset/water2/51.png"), auto',
    'url("./media/sunset/water2/52.png"), auto',
    'url("./media/sunset/water2/53.png"), auto',
    'url("./media/sunset/water2/54.png"), auto',
    'url("./media/sunset/water2/55.png"), auto',
    'url("./media/sunset/water2/56.png"), auto',
    'url("./media/sunset/water2/57.png"), auto',
    'url("./media/sunset/water2/58.png"), auto',
    'url("./media/sunset/water2/59.png"), auto',
    'url("./media/sunset/water2/60.png"), auto',
    'url("./media/sunset/water2/61.png"), auto',
    'url("./media/sunset/water2/62.png"), auto',
    'url("./media/sunset/water2/63.png"), auto',
    'url("./media/sunset/water2/64.png"), auto',
    'url("./media/sunset/water2/65.png"), auto',
    'url("./media/sunset/water2/66.png"), auto',
    'url("./media/sunset/water2/67.png"), auto',
    'url("./media/sunset/water2/68.png"), auto',
]

let i = 0;

function cursor(){
    water.style.cursor = cursorArray[i];
    i++;
  
    if (i == cursorArray.length) {
      i = 0; 
    }
  
     setTimeout(cursor, 50);
}

function displayRipple(){
    let y = event.clientY;

    console.log("y: ", y);

    if (y > 540) {
        console.log("I'm touching water!");
        cursor();
    } else {
        document.querySelector("body").style.cursor = "auto";
    }
}

document.onmousemove = displayRipple;


