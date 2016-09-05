var calc = (function() {

	var pointUsed = false, sign = '@', v1, v2, k = 0;
	
	return{
		enterNumber: function(a){
			if(document.getElementById("inp").value != '0'){
				document.getElementById("inp").value = document.getElementById("inp").value + a;
			}
			else{
				document.getElementById("inp").value = a;
			}
		},

		enterPoint: function(){
			if(!pointUsed){
				document.getElementById("inp").value = document.getElementById("inp").value + '.';
				pointUsed = true;
			}
		},

		clear: function(){
			document.getElementById("inp").value = '0';
			pointUsed = false;
			sign = '@';
			k=0;
		},

		enterSign: function(a){
			if(k){
				this.result();
			}
			else{
				v1 = parseFloat(document.getElementById("inp").value);
			}
			sign = a;
			document.getElementById("inp").value = '0';
			pointUsed = false;
			k = 1;
		},

		result: function(){
			if(k){
				v2 = parseFloat(document.getElementById("inp").value);
				if(sign == '+'){
					v1 = v1+v2;
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
				document.getElementById("inp").value = v1;
				k = 0;
			}
		},

		sqr: function(){
			document.getElementById("inp").value = Math.pow(document.getElementById("inp").value, 2);
		},

		sqrt: function(){
			document.getElementById("inp").value = Math.sqrt(document.getElementById("inp").value);
		}
	}
}());