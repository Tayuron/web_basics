// function kanadesAlgo(arr) {
// 	let currSum = arr[0]
// 	let maxSum = arr[0]
// 	for (let i = 1; i < arr.length; i++) {
// 		currSum = Math.max(currSum + arr[i], arr[i])
// 		maxSum = Math.max(maxSum, currSum)
// 	}
// 	return maxSum
// }
// console.log(kanadesAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// function addStrings(num1, num2) {
// 	let i = num1.length - 1
// 	let j = num2.length - 1
// 	let carry = 0
// 	let result = ''

// 	while (i >= 0 || j >= 0 || carry > 0) {
// 		const digit1 = i >= 0 ? parseInt(num1[i]) : 0
// 		const digit2 = j >= 0 ? parseInt(num2[j]) : 0

// 		const sum = digit1 + digit2 + carry
// 		carry = Math.floor(sum / 10)

// 		result = (sum % 10) + result

// 		i--
// 		j--
// 	}
// 	return result
// }

function arrayDifference(arrA, arrB) {
	const removalCounts = new Map()
	for (const item of arrB) {
		removalCounts.set(item, (removalCounts.get(item) || 0) + 1)
	}

	const result = []
	for (const item of arrA) {
		const countToRemove = removalCounts.get(item)

		if (countToRemove && countToRemove > 0) {
			removalCounts.set(item, countToRemove - 1)
		} else {
			result.push(item)
		}
	}
	return result
}
