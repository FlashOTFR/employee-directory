import React, { Component } from 'react';
import Header from './header.jsx';
import Search from './searchBar';
import Results from './results';
import axios from 'axios';

class Tracker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            persons: [],
            filteredPersons: []
         };
    }
    
    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=20")
        .then(({ data }) => {
            const persons = data.results;
            this.setState({ 
                persons: persons,
                filteredPersons: persons
            });
            console.log(persons);
        });
    }
    

    handleInputChange = event => {
        const searchInput = event.target.value;
        const filteredPersons = this.state.persons.filter(person => {
          let name = person.name.first.toLowerCase();
          console.log(typeof name);
          const matchPersons = name.indexOf(searchInput.toLowerCase()) !== -1;
    
          return matchPersons;
        });
        this.setState({
            filteredPersons: filteredPersons
        });
    };

    render() { 
        return ( 
            <div>
                <Header />
                <h1>check out this ish</h1>
                <Search handleInputChange={this.handleInputChange} />
                <h1>You ain't never not never not ever not been ready not for this what.</h1>
                <Results persons={this.state.filteredPersons} />
            </div>
         );
    }
}
 
export default Tracker;