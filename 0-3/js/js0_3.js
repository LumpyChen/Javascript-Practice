/**
 * Created by Lumpychen on 15/12/21.
 */
window.onload = function(){

    var oSelec = document.getElementById('select');
    var oSelection = document.getElementById('selection');
    var aOpt = oSelec.getElementsByClassName('option');

    setInterval(upDate,500);
    upDate();

    var oSelcard = document.getElementById('optcard');
    var aTabcard = oSelcard.getElementsByTagName('div');

    oSelection.onclick = viewInput;
    for(var i = 0;i<aOpt.length;i++){
        aOpt[i].onclick = changeInput;
    }

    for(var i = 0 ; i<aTabcard.length;i++){
        aTabcard[i].onmouseover = changeTab;
        aTabcard[i].onmouseout = outTab;
    }

    function viewInput(){

        if(window.getComputedStyle(aOpt[1],null).getPropertyValue("display")=='none') {

            for (var i = 0; i < aOpt.length; i++) {
                aOpt[i].style.display = 'block'
            }
        }
        else {
            for(var i=0;i<aOpt.length;i++){
                    aOpt[i].style.display = 'none'
            }
        }
    }

    function changeInput(){

        oSelection.innerText = this.innerText;
        for(var i=0;i<aOpt.length;i++){
            aOpt[i].style.display = 'none';
        }

    }

    function upDate (){

        var oDate = new Date();
        var oYear = document.getElementById('year');
        var oMonth = document.getElementById('month');
        var oDay = document.getElementById('day');
        var oWeek = document.getElementById('week');
        var oHour = document.getElementById('hour');
        var oMinute = document.getElementById('minute');
        var oSecond = document.getElementById('second');

        var aMonth = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
        var aWeek = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];

        oYear.innerText='Today is '+oDate.getFullYear();
        oMonth.innerText=aMonth[oDate.getMonth()];
        oDay.innerText=oDate.getDate()+",";
        oWeek.innerText=aWeek[oDate.getDay()-1]+'.\n';
        oHour.innerText=oDate.getHours()+':';

        if(oDate.getMinutes()<10){
            oMinute.innerText='0'+oDate.getMinutes()+':';
        }
        else {
            oMinute.innerText=oDate.getMinutes()+':';
        }

        if(oDate.getSeconds()<10){
            oSecond.innerText='0'+oDate.getSeconds();
        }
        else {
            oSecond.innerText=oDate.getSeconds();
        }

    }

    function changeTab(){
        var obig = document.getElementById('big-card');
        obig.innerHTML='Now you see the '+this.innerText+' one.';
        this.style.borderColor = 'cornflowerblue';
    }

    function outTab(){
        this.style.borderColor = '#fff';
    }
}

