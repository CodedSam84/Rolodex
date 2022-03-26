import { Component } from "react";
import "./CardList.css"
import Card from "../card/Card";

class CardList extends Component {
  
  render() {

    const { monsters } = this.props;

    return (
      <div className="card-list">
        { monsters.map((monster) => 
            <Card monster={monster}/>
          )
        }
      </div>
    )
  }
}

export default CardList;
