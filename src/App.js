import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/CardList';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchInputValue: ""
    };
  }

  onSearchChange = (event) => {
    const searchInputValue = event.target.value.toLowerCase();
    
    this.setState(
      () => {
        return { searchInputValue };
      },
    )
  }

  componentDidMount() {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users };
          },
        )
      );
  }

  render() {
    const { searchInputValue, monsters } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => 
        {
          const monsterName = monster.name;
          const monsterNameToLowerCase = monsterName.toLowerCase();
          return monsterNameToLowerCase.includes(searchInputValue);
        }
    );
    
    return(
      
      <div className="App">
        <input 
          type="search" 
          placeholder="Search monsters"
          onChange={ onSearchChange }
        />

        {/* {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}> 
                <h1>{monster.name}</h1>
              </div>
            );
           }
          )
        } */}

        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
    
}

export default App;
