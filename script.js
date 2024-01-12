var box = document.getElementById("box");
var pos = 0;
var t = setInterval(move, 10);
var acc = 0;

function move(){
    while(acc < 10){
        if (pos >= 150){
            acc += 1;
            box.style.left = 0 + "px";
            pos = 0;
        } else {
        pos += 1;
        box.style.left = pos + "px";
        }
    }
    clearInterval(t);
}