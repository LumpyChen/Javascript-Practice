window.onload = function(){

	var oDiv1 = document.getElementById('oDiv1');
	var oUl1 = document.getElementById('oUl1');
	var aLi1 = document.getElementById('aLi1');
	var aLi = oUl1.getElementsByClassName('aLi');
	oDiv1.onclick = over ;
	aLi1.onmouseover = inFunc ;
	aLi1.onmouseout = outFunc ;
	for (var i = 0; i < aLi.length; i++) {
		if (i!=0) {
			aLi[i].onclick = addColor() ;
		}

	}
	function over(){
		if (oUl1.style.display == 'block') {
			oUl1.style.display = 'none'; 
		}
		else{
			oUl1.style.display = 'block';
		}
	};

	function inFunc(){
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.display = 'block';
		}
	};

	function outFunc(){
		for (var i = 0; i < aLi.length; i++) {
		}
		aLi1.style.display = 'block';
	};

	function addColor(){
		return function(){aLi[i].addClass('class-'+i);}
	}
}