import React, { Component } from 'react';
import Header from './header.jsx';
import SearchPage from './searchBar';
import Results from './results';
import axios from 'axios';

class Tracker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            persons: [],
         };
    }
    
    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=20")
        .then(({ data }) => {
            const persons = data.results;
            this.setState({ persons: persons});
            console.log(persons);
        });
    }
    

    
    // handleInputChange = event => {
    //     const{ variable name that i create, value of thing i want from object } = event.target;

    //     this.setState({
    //         [that variable i named]: value of thing
    //     });
    // }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };


    render() { 
        return ( 
            <div>
                <Header />
                <h1>check out this ish</h1>
                <SearchPage />
                <h1>You ain't never not never not ever not been ready not for this what.</h1>
                <Results
                persons={this.state.persons} />
            </div>
         );
    }
}
 
export default Tracker;