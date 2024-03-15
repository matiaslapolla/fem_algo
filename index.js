// complexity algorithm

// O(1) - Constant Time
// doesnt matter how big the input is, the runtime will always be the same

function add(n) {
	return (n * (n + 1)) / 2;
}

// O(n) - Linear Time
// the runtime will grow linearly with the size of the input

function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

console.log("addupto6", addUpTo(6)); // 21

// O(n) - Linear Time

function sum_char_codes(n) {
	let sum = 0;
	for (let i = 0; i < n.length; i++) {
		sum += n.charCodeAt(i);
	}

	for (let i = 0; i < n.length; i++) {
		sum += n.charCodeAt(i);
	}
}

console.log("sum_char_codes", sum_char_codes("hello")); // 1040

// 0(n^2) - Quadratic Time
// the runtime will grow quadratically with the size of the input

function sum_char_codes_q(n) {
	let sum = 0;
	for (let i = 0; i < n.length; i++) {
		for (let j = 0; j < n.length; j++) {
			sum += n.charCodeAt(i);
		}
	}
}

console.log(sum_char_codes_q("hello")); // 5200

// O(log n) - Logarithmic Time
// the runtime will grow logarithmically with the size of the input

function binary_search(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 4

// O(n log n) - Linearithmic Time
// the runtime will grow linearithmically with the size of the input

function quick_sort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let pivot = arr[0];
	let left = [];
	let right = [];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return quick_sort(left).concat([pivot]).concat(quick_sort(right));
}
