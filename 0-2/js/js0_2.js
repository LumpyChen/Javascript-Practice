/**
 * Created by Lumpychen on 15/12/20.
 */
window.onload=function() {
    var aLi1 = document.getElementsByClassName('nav-bar');

    for(var i =0 ; i<aLi1.length ; i++) {

        aLi1[i].onclick = clickThis;
        var aLi2 = aLi1[i].getElementsByClassName('nav-sec-bar');

        for(var j =0; j< aLi2.length ;j++)
        {
            aLi2[j].onmouseover = mouseOverThis;
            aLi2[j].onmouseout = mouseOutThis;
        }
    };

    var aInput1 = document.getElementsByTagName('input');

    for(var i=0 ; i <aInput1.length ;i++) {
        aInput1[i].onclick = clickThisInput;
    };

    var oPoint = document.getElementById("point");
    var aLi3 = oPoint.getElementsByTagName('li');

    for( var i = 0 ; i <aLi3.length;i++) {
        aLi3[i].onmouseout=mouseOutPoint;
        aLi3[i].onmouseover=mouseOverPoint;
        aLi3[i].onclick=submitPoint;
    };

    var iPt;

    function clickThis(){

        var oUl2 = this.getElementsByClassName('nav-sec')[0];

        if ( window.getComputedStyle(oUl2 , null).getPropertyValue("display")=='none'){
            for( var i=0; i<aLi1.length ;i++ ) {
                aLi1[i].getElementsByTagName('ul')[0].style.display = 'none';
            }
            oUl2.style.display='block';
        }
        else {
            oUl2.style.display='none';
        }
    };

    function mouseOverThis(){

        var oUl1 = this.getElementsByClassName('nav-third')[0];
        oUl1.style.display = "block";

    };

    function  mouseOutThis(){

        var oUl1 = this.getElementsByClassName('nav-third')[0];
        oUl1.style.display = "none";

    };

    function clickThisInput(){

        for(var i=0 ; i <aInput1.length ;i++){
            aInput1[i].checked=false;
        }
        this.checked=true;
    }

    function mouseOutPoint(){
        for(var i=0 ; i<aLi3.length ; i++) {
            aLi3[i].style.background="url('img/star.gif') 0 0 no-repeat ";
        }
    }

    function mouseOverPoint(){

        for(var i=0 ; i<aLi3.length ; i++) {
            aLi3[i].style.background="url('img/star.gif') 0 0 no-repeat ";
        };

        for(var i=0 ; i<aLi3.length ; i++) {
            aLi3[i].style.background="url('img/star.gif') 0 -29px no-repeat ";
            if (this.id==aLi3[i].id){
                iPt = i+1;
                break;
            };
        };
    }

    function submitPoint(){

        for(var i=0 ; i<aInput1.length ; i++) {
            if (aInput1[i].checked == true) {
                var num = i;
            }
        }

        if(num){
            alert("Number is"+(num+1)+", and Point is"+ iPt);
        }
        else {
            alert("You haven't choose a Number.");
        }
    }

}