function fizzBuzz() {  
	// Your code here
	for (let i = 1; i <= 100; i++) {
		if (i/3 == Math.trunc(i/3) && i/5 == Math.trunc(i/5)) {
			let i = "FizzBuzz";
			console.log(i);
		}

		else if (i/3 == Math.trunc(i/3)) {
			let i = "Fizz";
			console.log(i);
		}
		
		else if(i/5 == Math.trunc(i/5)){
			let i = "Buzz";
			console.log(i);
		}

		else{
			console.log(i);
		}

	}
}
fizzBuzz();