

import './App.css';

import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      FirstName: "John",
      LastName: this.props.LastName,
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter +1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>My name is {this.state.FirstName} {this.state.LastName} </p>
          <p> {this.state.counter} </p>
          <button onClick={this.increment}>Click</button>
          <button onClick={() => this.setState({ counter: 0 })}>reset</button>
        </header>
      </div>
    )
  }
}



export default App;
