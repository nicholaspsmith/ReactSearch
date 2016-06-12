import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const ingredients = [
  {
    name: 'hops',
    id: 1
  },
  {
    name: 'grain',
    id: 2
  },
  {
    name: 'barley',
    id: 3
  }
]

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          onChange={this.onInputChange} 
          value={this.state.term}
          placeholder="Search" />
        <div>Ingredients:</div>
        <ul>
          {
            ingredients.filter( ingredient => {
              return ingredient.name.indexOf(this.state.term) > -1
            }).map( ingredient => {
              return <div>{ingredient.name}</div>
            })
          }
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<App ingredients={ingredients} />, document.getElementById('app'));