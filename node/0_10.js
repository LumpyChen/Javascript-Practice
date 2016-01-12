(function(){
	
	var http = require('http');
	var bl = require('bl');
	var bfStr = [];
	var counter = 0

	function printBfStr(){
		for(var i = 0;i<3;i++){
			console.log(bfStr[i]);
		}
	}

	function httpGet(index){
		http.get(process.argv[2+index],function(response){
			response.pipe(bl(function (err, data){

				bfStr[index] = data.toString();
				counter++
				if(counter==3)
				{ printBfStr(); }
			
			}))

		})
	}

	for(var i = 0;i < 3; i++){
		httpGet(i);
	}

})();

