{
	var inputs = process.argv.slice(2);
	var min = Math.min(...inputs);
	console.log(`The minimum of [${inputs}] is ${min}`)
}