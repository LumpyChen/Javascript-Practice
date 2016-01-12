/**
 * Created by Lumpychen on 15/12/22.
 */
window.onload = function(){

    var oDivplist = document.getElementById('playlist');
    var oUlview = document.getElementById('view-list');
    var oLeft = document.getElementById('left');
    var oRight = document.getElementById('right');

    var oNoty = document.getElementById('notice');
    var oTheN = document.getElementById('the-notice');
    var warn = null;

    oUlview.innerHTML+=oUlview.innerHTML;





    var aLipl = oUlview.getElementsByClassName('play');

    for( var i =0 ; i < aLipl.length ; i++) {

        aLipl[i].style.width=oDivplist.offsetWidth/4 - 12.5+'px';

        aLipl[i].onmouseover = function() {
            this.style.borderLeft = "10px solid #000";
            this.style.borderTop = "10px solid #000";
            this.style.borderBottom = "10px solid #000";
            this.nextSibling.nextSibling.style.borderLeft ="none";
            this.style.borderRight = "10px solid #000";

        };
        aLipl[i].onmouseout = function(){
            this.style.borderLeft = "10px solid #0B346E";
            this.style.borderTop = "10px solid #0B346E";
            this.style.borderBottom = "10px solid #0B346E";
            this.style.borderRight = "none";
            this.nextSibling.nextSibling.style.borderLeft ="10px solid #0B346E";


        };
    }

    oUlview.style.width = (aLipl[0].offsetWidth+1)*10+'px';

    var Lm = setInterval(playMove,20);

    oDivplist.onmouseover = function(){
        clearInterval(Lm);
        Lm = null;
    };

    oDivplist.onmouseout = function(){


        if(Lm){
            clearInterval(Lm);
        }
        Lm = setInterval(playMove,20);

    }

    var speed = -1;

    oLeft.onclick = function(){
        speed = -1;
    }
    oRight.onclick = function(){
        speed = 1;
    }


    function playMove(){

        if(speed<0) {
            if (oUlview.offsetLeft == -oUlview.offsetWidth / 2) {
                oUlview.style.left = '0px';
            }
        };
        if(speed>0){
            if(oUlview.offsetLeft == 0 ){
                oUlview.style.left = -oUlview.offsetWidth / 2+'px';
            }
        };

        oUlview.style.left = oUlview.offsetLeft + speed + 'px';

    }


    oNoty.onmouseover = oTheN.onmouseover = function(){
        clearTimeout(warn);
        warn = setTimeout(warnNotice,1000);
    }
    oNoty.onmouseout = oTheN.onmouseout = function(){
        warn = setTimeout(hideNotice,1000);
    }
    //mouseover timeout 1s -
    //
    //mouseover begin
    //mouseout timeout 1s
    //mouseout begin



    function warnNotice(){
        oTheN.style.display='block';
    }
    function hideNotice(){
        oTheN.style.display='none';
    }

}