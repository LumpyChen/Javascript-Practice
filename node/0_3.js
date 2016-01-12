(function(){
	var fs = require('fs');
	var oBuffer = fs.readFileSync(process.argv[2]);
	var aBufArray = oBuffer.toString().split('\n');
	console.log(aBufArray.length-1);
})();