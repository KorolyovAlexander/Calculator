var calc = (function(){

	var pointUsed = false,
	sign = '@',
	v1, 
	v2, 
	k = 0,
	input;
	
	document.addEventListener('DOMContentLoaded', init, false);
	
	function init(){
		var buttons_number = document.getElementsByClassName('btnNumber'),
		buttons_function = document.getElementsByClassName('btnFunction'),
		button_clear = document.getElementById('btnClear'),
		button_point = document.getElementById('btnPoint'),
		button_sqr = document.getElementById('btnSqr'),
		button_sqrt = document.getElementById('btnSqrt'),
		button_res = document.getElementById('btnRes');
		
		for(var i=0; i<buttons_number.length; ++i){
			buttons_number[i].addEventListener('click', enterNumber, false);
		}
		for(var i=0; i<buttons_function.length; ++i){
			buttons_function[i].addEventListener('click', enterSign, false);
		}
		button_clear.addEventListener('click', clear, false);
		button_point.addEventListener('click', enterPoint, false);
		button_sqr.addEventListener('click', sqr, false);
		button_sqrt.addEventListener('click', sqrt, false);
		button_res.addEventListener('click', result, false);
		input = document.getElementById('inp');
	}
	
	function enterNumber(e){
		
		var activeNumber = e.target.innerText;
		
		if(input.value != '0'){
			input.value += activeNumber;
		}
		else{
			input.value = activeNumber;
		}
	}

	function enterPoint(){
		if(!pointUsed){
			input.value += '.';
			pointUsed = true;
		}
	}

	function clear(){
		input.value = '0';
		pointUsed = false;
		sign = '@';
		k=0;
	}

	function enterSign(e){
		if(k){
			result();
		}
		else{
			v1 = input.value;
		}
		sign = e.target.innerText;
		input.value = '0';
		pointUsed = false;
		k = 1;
	}

	function result(){
		if(k){
			v2 = input.value;
			if(sign == '+'){
				v1 = parseFloat(v1)+parseFloat(v2);
			}
			else if(sign == '-'){
				v1 = v1-v2;
			}
			else if(sign == '*'){
				v1 = v1*v2;
			}
			else if(sign == '/'){
				v1 = v1/v2;
			}
			input.value = v1;
			k = 0;
		}
	}

	function sqr(){
		input.value = Math.pow(input.value, 2);
	}

	function sqrt(){
		input.value = Math.sqrt(input.value);
	}
}());