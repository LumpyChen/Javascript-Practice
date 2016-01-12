(function(){
	

	var sum = 0;
	for (var i = process.argv.length - 1; i >= 2; i--) {
		sum+=parseInt(process.argv[i]);
	};
	console.log(sum);

})();