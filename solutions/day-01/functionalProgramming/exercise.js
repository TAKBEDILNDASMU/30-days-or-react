forEach is a higher order function that can loop through an array and don't return anything, forEach have a callback for its paramater and its callback can have 3 parameter, the most use parameter is the data inside the array and the index of the data inside in the array

map is same with forEach, the difference is map returning a new array instead of undefined

reduce is higher order function that usually receive 2 parameters, the one is the callback and the others is its initial value, the callback receive 2 parameter, the accumulator and the current value. this function usually used for get a sum of an array

filter is higher order function that used for filter the data inside of the array, then return an array of booleans

find is like filter, the difference is its return the first value that found and return the value

findIndex is like find method the difference its return the index of the data

some is higher order function that iterate through the array and if the condition is true in one data or more, its return true, if the condition isn't match for every data in array, its return false

every is higher order function that iterate through the array and if the condition is true in every single data inside the array, its returning true, but if just one data or more that is not match the condition, its returning false