var interval = 1
var box0 = document.getElementById("box0");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var container = document.getElementById("container")
var signals = [
    {signal_right: false, signal_botton: false, signal_left: false, signal_top: false},
    {signal_right: false, signal_botton: false, signal_left: false, signal_top: false},
    {signal_right: false, signal_botton: false, signal_left: false, signal_top: false},
    {signal_right: false, signal_botton: false, signal_left: false, signal_top: false}
]





signals[0].signal_right = true;

var box0_move = setInterval(() => {
    movement(box0, container, signals[0]);
}, interval);

signals[1].signal_botton = true;

var box1_move = setInterval(() => {
    movement(box1, container, signals[1]);
}, interval)

signals[2].signal_left = true;

var box1_move = setInterval(() => {
    movement(box2, container, signals[2]);
}, interval)

signals[3].signal_top = true;

var box1_move = setInterval(() => {
    movement(box3, container, signals[3]);
}, interval)








function rightMove(el_move, el_limit, signal){
    let pos = el_move.offsetLeft;
    if (el_move.offsetLeft === el_limit.offsetWidth - el_move.offsetWidth){
        signal.signal_right = false
        return true;
    } else{
        pos++;
        el_move.style.left = pos + "px"; 
        return false;
    }
}

function bottonMove(el_move, el_limit, signal){
    let pos = el_move.offsetTop;
    if (el_move.offsetTop === el_limit.offsetHeight - el_move.offsetHeight){
        signal.signal_botton = false
        return true;
    } else{
        pos++;
        el_move.style.top = pos + "px"; 
        return false;
    }
}

function leftMove(el_move, signal){
    let pos = el_move.offsetLeft;
    if (el_move.offsetLeft === 0){
        signal.signal_left = false
        return true;
    }else{
        pos--;
        el_move.style.left = pos + "px";
        return false;
    }
}

function topMove(el_move, signal){
    let pos = el_move.offsetTop;
    if (el_move.offsetTop === 0){
        signal.signal_top = false
        return true;
    } else{
        pos--;
        el_move.style.top = pos + "px"; 
        return false;
    }
}
function movement(box, container, signal){
    if (signal.signal_right){
        signal.signal_botton = rightMove(box, container, signal);
     }
     if (signal.signal_botton){
        signal.signal_left = bottonMove(box,container, signal);
     }
     if (signal.signal_left){
        signal.signal_top = leftMove(box, signal);
     }
     if(signal.signal_top){
        signal.signal_right = topMove(box, signal);
     }
}
