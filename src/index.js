
module.exports = function makeExchange(currency) {
	let object = {};
	if (currency <= 0) {
    	object = {};
    } else if (currency >= 10000) {
    	object.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
    } else {
	    var h = Math.floor(currency/50);                  //50c
    	var q = Math.floor((currency - h*50) / 25);          //25c
    	var d = Math.floor((currency - h*50 - q*25) / 10);      //10c
    	var n = Math.floor((currency - h*50 - q*25 - d* 10) / 5);   //5c
    	var p = currency - h*50 - q*25 - d*10 - n*5;				  //1c 
    	if(h) { object.H = h; }
    	if(q) { object.Q = q; }
    	if(d) { object.D = d; }
    	if(n) { object.N = n; }
    	if(p) {	object.P = p; }
    }  
    return object; 
}
