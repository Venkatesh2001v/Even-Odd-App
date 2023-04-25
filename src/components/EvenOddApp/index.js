// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, type: 'Even'}

  increasedCount = () => {
    const {count} = this.state

    const randomNum = Math.floor(Math.random() * 100)
    const currentCount = count + randomNum
    const evenOrAdd = currentCount % 2 === 0 ? 'Even' : 'Odd'

    this.setState({count: currentCount, type: evenOrAdd})
  }

  render() {
    const {count, type} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-type">Count is {type}</p>
          <button
            className="button"
            type="button"
            onClick={this.increasedCount}
          >
            Increment
          </button>
          <p className="about">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
