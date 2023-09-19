/* eslint-disable react/prop-types */
import "./App.css"

const BoxNumber = ({ number }) => {
  if (isPrime(number)) {
    return (
      <div className="box" style={{ backgroundColor: "red" }}>
        {number}
      </div>
    )
  }
  if (number % 2 == 1) {
    return (
      <div className="box" style={{ backgroundColor: "lightgreen" }}>
        {number}
      </div>
    )
  } else {
    return (
      <div style={{ backgroundColor: "orange" }} className="box">
        {number}
      </div>
    )
  }
}

function isPrime(n) {
  if (n <= 1) return false

  // Check from 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false

  return true
}

const App = () => {
  let numbers = []
  for (let i = 0; i <= 50; i++) {
    numbers.push(i)
  }

  return (
    <div className="container">
      {numbers.map((number) => (
        <BoxNumber key={number} number={number} />
      ))}
    </div>
  )
}

export default App
