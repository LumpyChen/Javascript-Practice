(function(){
	
	var fs = require('fs');
	fs.readFile( process.argv[2] , 'utf8' , function( err , data ){
			if( err ) {
			console.log('Your argument is wrong!');

		}
			else{

			var aBufArray = data.toString().split('\n');
			console.log(aBufArray.length-1);

		}
	}); 

})();