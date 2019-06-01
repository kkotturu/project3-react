import React, { Component } from "react";
import Card from './Card';
import API from "../API";
class CardContainer extends Component {
    _handleClick = (e, obj) => {
        e.preventDefault();
        console.log(obj.vicinity)

        const save_obj = {
            name: obj.name,
            address: obj.vicinity,
            rating: obj.rating,
            userId: localStorage.getItem('userid')
        };

        API.saveFavorite(save_obj).then(res => {
            console.log(res)
        }).catch(err => {
            return err
        })

    }

    render() {
        const { brewResults, barkResults } = this.props;
        console.log("Card container hit.");
        console.log(brewResults);
        return (
            <div xs="12" sm="6" md="8">
                {brewResults && brewResults.map((card, i) => (
                    <Card key={i} handleClick={this._handleClick} {...card} />

                ))}
                {barkResults && barkResults.map((card, i) => (
                    <Card key={i} handleClick={this._handleClick} {...card} />
                ))}
            </div>
        )
    }
}

export default CardContainer;