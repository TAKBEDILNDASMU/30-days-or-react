function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

function addNumbers(a, b) {
  return a + b
}

function areaOfCircle(r) {
  const pi = 3.14
  return pi * r * r
}

function celciusToFahrenheit(celc) {
  return (celc * 9) / 5 + 32
}

function BMI(weight, height) {
  const bmi = weight / (height * height)
  switch (true) {
    case bmi < 18.5:
      return "Underweight"
    case bmi >= 18.5 && bmi < 25:
      return "Normal weight"
    case bmi >= 25 && bmi < 30:
      return "Overweight"
    case bmi >= 30:
      return "Obese"
  }
}

function checkSeason(month) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const indexMonth = months.indexOf(month)
  switch (true) {
    case indexMonth >= 3 && indexMonth < 5:
      return "Spring"
    case indexMonth >= 5 && indexMonth < 8:
      return "Summer"
    case indexMonth >= 8 && indexMonth < 11:
      return "Fall"
    case indexMonth == 11 || (indexMonth >= 0 && indexMonth < 4):
      return "Winter"
  }
}
