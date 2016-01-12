	module.exports = function ( dir , fix , callback ) {

	 	var fs =  require('fs');
		var path = require('path');
		var data = [];
		var i = 0;

		fs.readdir( dir , function( err , files ){
			
			if(err){
				return callback(err);
			}
			else{			
				for(file in files){

					if('.'+fix==path.extname(files[file])){

						data[i] = files[file]
						i++;
						
					}	
				}							
				return callback(null, data);
			};
		})
	
 }