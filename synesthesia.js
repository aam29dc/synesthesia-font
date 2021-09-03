"use strict";

$(document).ready(function(){
    var [r, g, b] = [255, 0, 0];
    var [i, j, k] = [0, 0, 0];

    function loopf(){
        $('span.syn').queue(function(next){
            $(this).css("background-image", `linear-gradient(90deg, rgb(${r}, ${g}, ${b}), rgb(${b}, ${r}, ${g}), rgb(${g}, ${b}, ${r}))`);

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
            else if(r == 0 && g == 255 && b == 255){    //sky
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

            next();
        });
    }

    window.setInterval(function(){loopf();},10);
});