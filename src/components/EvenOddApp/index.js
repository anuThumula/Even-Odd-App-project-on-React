// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.getRandomNum()
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state
    const evenOddText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-cont">
        <div className="card-cont">
          <h1 className="head">Count {count}</h1>
          <p className="para">Count is {evenOddText}</p>
          <div className="button-cont">
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="para2">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
