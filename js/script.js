var box = document.getElementById("box");
var pos = 0;
var t = setInterval(move, 1000);
var acc = 0;

function move(){
    while(acc < 10){
        if (pos >= 150){
            acc ++;
            pos = 0;
            box.style.left = 0 + "px";
        } else {
            pos ++;
            box.style.left = pos + "px";
        }
    }
    clearInterval(t);
}