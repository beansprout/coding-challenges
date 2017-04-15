const arr=['rock','paper'];
const newArr=[];
const cb = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for ( let j = 0; i < arr.length; j++) {
			newArr[i] = [];
			newArr[i].push(arr[i]);
			newArr[i].push(arr[j]);
			console.log('i:'+i+ ' ' + newArr);
		}
	}
}




arr.forEach(cb);