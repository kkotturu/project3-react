import React from "react";
import "../Card/Card.css";

const Card = props => {
    console.log(props.name)
    return (
        <div className="card-height">
            <hr />
            {
                localStorage.hasOwnProperty('isLoggedIn') ?
                    <button onClick={(e) => props.handleClick(e, props)}><i className="fas fa-heart heart-icon">
                    </i></button> : null
            }
            <div className="card-result">Name: {props.name}</div>

            <div className="card-result">Address: {props.vicinity}</div>

            <div className="card-result">Rating: {props.rating}</div>

            <div className="card-result">Open Now: {(props.opening_hours) ? 'Yes' : 'No'}</div>
        </div>
    )
}
export default Card;

