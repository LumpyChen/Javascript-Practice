window.onload = function(){
	var oDiv1 = document.getElementById('oDiv1');
	var oDiv2 = document.getElementById('oDiv2');
	var oUl1 = document.getElementById('oUl1');
	var oUl2 = document.getElementById('oUl2');
	var oUl3 = document.getElementById('oUl3');
	var aLi1 = oUl3.getElementsByTagName('li');
	//get elements

	oDiv1.onclick = shrink;
	oDiv2.onmouseover = viewFunc;
	oDiv2.onmouseout = hideFunc;

	aLi1[0].onclick = changeBlue;
	aLi1[1].onclick = changeRed;
	aLi1[2].onclick = changeGreen;
	aLi1[3].onclick = changeNavy;


	function shrink(){
		if(oUl1.style.visibility=='visible'){
			oUl1.style.visibility = 'hidden';
			oDiv1.className = 'down';
		}
		else {
			oUl1.style.visibility = 'visible';
			oDiv1.className = 'up';
		}
	};

	function viewFunc(){
		oUl2.style.visibility='visible';
	};

	function hideFunc(){
		oUl2.style.visibility='hidden';
	};

	function changeBlue(){
		for(var x = 0 ; x < aLi1.length; x++){
			aLi1[x].className='color1 aLi';
		}
	};
	function changeRed(){
		for(var x = 0 ; x < aLi1.length; x++){
			aLi1[x].className='color2 aLi';
		}
	};
	function changeGreen(){
		for(var x = 0 ; x < aLi1.length; x++){
			aLi1[x].className='color3 aLi';
		}
	};
	function changeNavy(){
		for(var x = 0 ; x < aLi1.length; x++){
			aLi1[x].className='color4 aLi';
		}
	};
};