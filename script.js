var calc = function (n, m) {	
	var res = 0;
	return {
		sum: function() {
			for (var i = 0; i < arguments.length; i++) {
				res += arguments[i];
			}
			return res;
		},
		sub: function() {
			for (var i = 0; i < arguments.length; i++) {
				if (i < 2) {
					res = arguments[i-1] - arguments[i];
				} else {
					res = res - arguments[i];
				}
			}
			return res;
		},
		div: function() {
			for (var i = 0; i < arguments.length; i++) {
				if (i < 2) {
					res = arguments[i-1] / arguments[i];
				} else {
					res = res / arguments[i];
				}
			}
			return res;
		},
		mul: function() {
			res = 1;
			for (var i=0; i < arguments.length; i++) {
				res *= arguments[i];
			}
			return res;
		},
		fact: function(n) {
			res = 1;
			for (var i = 1; i <= n; i++) {
				res = res * i;
			}
			return res;
		},
		pow: function (n, m) {
			res = 1;
			for (var i = 0; i < m; i++) {
				res *= n;
			}
			return res;
		}
	};
}
console.log("Sum: " + calc().sum(2,2,2));
console.log("Substraction: " + calc().sub(2,2,2));
console.log("Division: " + calc().div(2,2,2));
console.log("Multiplication: " + calc().mul(2,2,2));
console.log("Factorial: " + calc().fact(10));
console.log("Pow: " + calc().pow(3, 10));