{
	module.exports = function average(...args){
		let result = 0;
		args.forEach(x=>result+=x);
		return result/args.length;
	};
	
}