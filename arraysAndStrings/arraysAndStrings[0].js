// Implement an algorithm to determine if a string has all unique characters. 
// What if you can not use additional data structures?
function stringContainsOnlyUniqueChars(s) {
	var map = {};
	
	for (i = 0; i < s.length; ++i) {
		var val = s[i];
		
		if (map[val] != null) {
			return false;
		} else {
			map[val] = 1;
		}
	}
	
	return true;
}

function stringContainsOnlyUniqueCharsNoDataStructs(s) {
	for (i = 0; i < s.length - 1; ++i) {
		for (j = i + 1; j < s.length; ++j) {
			if (s[i] == s[j]) {
				return false;
			}
		}
	}
	
	return true;
}