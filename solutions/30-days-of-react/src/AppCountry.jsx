/* eslint-disable react/prop-types */
import React from "react"
import { countriesData } from "./data/countries"

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    country:
      this.props.countries[Math.floor(Math.random() * this.props.countries.length)],
  }

  render() {
    const { name, languages, capital, population, currency } = this.state.country
    return (
      <main>
        <div className="card">
          <img src="https://www.dummyimage.com/400x200/000/fff" alt="afgan" />
          <h1>{name}</h1>
          <p>Language: {languages.map((language) => `${language}, `)}</p>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p>Currency: {currency}</p>
        </div>
        <Button
          text="Change Country"
          onClick={() =>
            this.setState({
              country:
                this.props.countries[
                  Math.floor(Math.random() * this.props.countries.length)
                ],
            })
          }
          style={buttonStyles}
        />
      </main>
    )
  }
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.style}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{showDate(date)}</small>
        </div>
      </header>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer style={this.props.style}>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      backgroundColor: "",
      secondBackgroundColor: "#61dbfb",
      borderColor: "",
      color: "",
    },
  }

  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }

  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: new Date(),
    }

    return (
      <div
        className="app"
        style={{
          backgroundColor: this.state.styles.backgroundColor,
          color: this.state.styles.color,
        }}>
        {this.state.backgroundColor}
        <Header
          data={data}
          style={{
            backgroundColor: this.state.styles.secondBackgroundColor,
            color: this.state.styles.color,
            borderBottom: this.state.styles.borderColor,
          }}
        />
        <Main countries={countriesData} />

        <Footer
          style={{
            backgroundColor: this.state.styles.secondBackgroundColor,
            color: this.state.styles.color,
            borderTop: this.state.styles.borderColor,
          }}
          date={new Date()}
        />
      </div>
    )
  }
}

export default App
