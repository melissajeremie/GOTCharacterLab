import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      charsLoaded: false,
      chars: []
    };
  }
  componentDidMount(){
    fetch("https://www.anapioficeandfire.com/api/characters?page=2")
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        this.setState({
          chars: response,
          charsLoaded: true
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1> Ye Olde "Game of Thrones" Character Generator: </h1>
      {this.state.charsLoaded ? this.state.chars.map(char =>
      {
        return(
        <div>
          <h3>Character Name</h3>
          <p>
          {char.name}
          </p>
          <h4>Character Aliases</h4>
          <p>
            {char.aliases[0]}
          </p>
          <p>
            {char.aliases[1]}
          </p>
          <p>
            {char.aliases[2]}
          </p>

        </div>
        )
      }) : ''
    }
      </div>
    );
  }
}
export default App;
