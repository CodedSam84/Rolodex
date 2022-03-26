import { Component } from "react";
import "./Card.css";

class Card extends Component{
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card" key={id}>
        <img 
          src={`https://robohash.org/${id}?size=180x130`} 
          alt={`monster ${name}`} 
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
    
  }
}

export default Card;