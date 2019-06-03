import React, { Component } from "react";
import Card from "../Card/Card";
import API from "../API";

class SavedSearch extends Component {

    constructor(props) {
        super();
        this.state = {
            results: []
        }
    }

    componentWillMount() {
        this.setState({ isLoggedIn: true })
    }

    componentDidMount() {
        this.loadSavedPlaces();
    }

    loadSavedPlaces = () => {
        API.getAll()
            .then(res => this.setState({ results: res.data }))
    };

    render() {
        return (
            <p>
                {this.props.results.map(result => {
                    return (
                        <Card key={result.id} vicinity={result.address} {...result} />
                    )
                })}
            </p>

        )
    }


}
export default SavedSearch;
