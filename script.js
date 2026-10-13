const makeChange = (c) => {
	c = parseInt(c);
	let q = math.floor(c/25);
	let d = math.floor((c-(q*25))/10);
	let n = math.floor((c-(q*25)-(d*10))/5);
	let p = math.floor((c-(q*25)-(d*10))-(n*5));

	return (`{ "q": ${q}, "d": ${d}, "n": ${n}, "p": ${p} }`)
  // your name here
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
