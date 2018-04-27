function power (base, exp) {
var result = 1;
	for(var cnt = 0; cnt < exp; cnt++){
      result *= base;
    }
    return result;
}


var base = prompt('введите число', 1);
var exp = prompt('введите степень', 2);

if (isNaN(base)) {
    alert('число не передано');
}  
if (exp < 0 ) {
	alert('Степень '+exp+' не поддерживается, введите целую степень, большую 0'); 	 
	console.log( 'exp cannot be <= 0' );
} else {
	console.log( 'result = ', power(base, exp));
}