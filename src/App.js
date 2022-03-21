import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInputValue: ""
    };
  }

  componentDidMount() {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users };
          }, 
          () => { 
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(
      (monster) => 
        {
          const monsterName = monster.name;
          const monsterNameToLowerCase = monsterName.toLowerCase();
          return monsterNameToLowerCase.includes(this.state.searchInputValue);
        }
    );
    
    return(
      
      <div className="App">
        <input 
          type="search" 
          placeholder="Search monsters"
          onChange={
            (event) => {
              const searchInputValue = event.target.value.toLowerCase();
              
              this.setState(
                () => {
                  return { searchInputValue };
                },

                () => {
                  console.log(this.state);
                }
              )
            }
          }
        />

        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}> 
                <h1>{monster.name}</h1>
              </div>
            );
           }
          )
        }
      </div>
    );
  }
    
}

export default App;
