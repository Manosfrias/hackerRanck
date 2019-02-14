function sockMerchant(n, ar){
	let numberOfSocks = n;
	let pairs;
	let socksOrderByColor = ar.sort();

	for(let i = 0; i < numberOfSocks; i++){
		pairs = socksOrderByColor.filter((item, i, arr)=>{
			return (item !== arr[i-1] && item !== arr[i+1])
		});

	}

	return Math.floor( (socksOrderByColor.length - pairs.length) / 2)
}

module.exports = { sockMerchant };