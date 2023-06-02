const average = (arr) => {
  if(arr.length === 0) {
    return 0
  }

  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] != 'number') {
      return 'Array contain non number value'
    }
  }

  const sum = arr.reduce((acc, val) => (acc + val))
  return sum / arr.length
}

console.log(average([]))