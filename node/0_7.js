(function(){

	var mymodule = require('./0_6.js');
	mymodule(process.argv[2],process.argv[3],function(err,list){
		
		if(err){
			console.log('The argument has something wrong!');
		}
		else{
			
			for(file in list)
				{
						console.log(list[file]);
				}
		}
	})

})();