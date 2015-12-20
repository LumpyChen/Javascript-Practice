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
    }
    function mouseOverThis(){
        var oUl1 = this.getElementsByClassName('nav-third')[0];
        oUl1.style.display = "block";

    }
    function  mouseOutThis(){
        var oUl1 = this.getElementsByClassName('nav-third')[0];
        oUl1.style.display = "none";

    };
}