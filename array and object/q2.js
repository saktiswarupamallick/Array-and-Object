const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

console.log("Sorted ages:", ages);

// Find the minimum and maximum age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Min age:", minAge);
console.log("Max age:", maxAge);

// Find the median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
  medianAge = ages[middleIndex];
}

console.log("Median age:", medianAge);

// Find the average age
const totalAge = ages.reduce((sum, age) => sum + age, 0);
const averageAge = totalAge / ages.length;

console.log("Average age:", averageAge);

// Find the range of the ages
const ageRange = maxAge - minAge;

console.log("Range of ages:", ageRange);

// Compare the value of (min - average) and (max - average) using abs() method
const minAvgDifference = Math.abs(minAge - averageAge);
const maxAvgDifference = Math.abs(maxAge - averageAge);

console.log("Min - Average:", minAvgDifference);
console.log("Max - Average:", maxAvgDifference);
