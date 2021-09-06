"use strict";

var [r, g, b] = [255, 0, 0];
var [i, j, k] = [0, 0, 0];

let syn = document.getElementsByClassName('syn');

window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();

function drawsyn(){
    for(let i = 0; i < syn.length; i++){
        syn[i].style.backgroundImage = `linear-gradient(90deg, rgb(${r}, ${g}, ${b}), rgb(${b}, ${r}, ${g}), rgb(${g}, ${b}, ${r}))`;
    }
    
    if(r == 255 && g == 0 && b == 0){     //red
        i = 0;
        j = 1;
        k = 0;
    }
    else if(r == 255 && g == 255 && b == 0){    //yellow
        i = -1;
        j = 0;
        k = 0;
    }
    else if(r == 0 && g == 255 && b == 0){    //green
        i = 0;
        j = 0;
        k = 1;
    }
    else if(r == 0 && g == 255 && b == 255){    //cyan
        i = 0;
        j = -1;
        k = 0;
    }
    else if(r == 0 && g == 0 && b == 255){    //blue
        i = 1;
        j = 0;
        k = 0;
    }
    else if(r == 255 && g == 0 && b == 255){    //pink
        i = 0;
        j = 0;
        k = -1;
    }

    r += i;
    g += j;
    b += k;
    
    window.requestAnimFrame(drawsyn);
}

drawsyn();
