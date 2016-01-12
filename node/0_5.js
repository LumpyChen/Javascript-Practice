(function(){
	var fs =  require('fs');
	var path = require('path');
	var fix = process.argv[3];
	fs.readdir( process.argv[2],function( err , list ){
		if(err){
			console.log('Your argument is wrong!');
		}
		else{
			for(file in list){
				if (!fix) {
					console.log(list[file]);
				}
				else if('.'+fix==path.extname(list[file])){
						console.log(list[file]);
					}
					
				}
			}
		
	} )

})();