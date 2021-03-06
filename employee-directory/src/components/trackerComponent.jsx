import React, { Component } from 'react';
import Header from './header.jsx';
import Search from './searchBar';
import Results from './results';
import axios from 'axios';
import orderBy from 'lodash/orderBy';

const invertDirection = {
    asc: "desc",
    desc: "asc"
  };
class Tracker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            persons: [],
            filteredPersons: [],
            columnToSort: "",
            sortDirection: "desc",
         }

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
    

    handleSort = columnName => {
        this.setState(state => ({
          columnToSort: columnName,
          sortDirection:
            state.columnToSort === columnName
              ? invertDirection[state.sortDirection]
              : "asc"
        }));
      };


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
                <Search handleInputChange={this.handleInputChange} />
                <Results 
                persons={this.state.filteredPersons}
                columnToSort={this.state.columnToSort}
                sortDirection={this.state.sortDirection}
                handleSort={this.handleSort}
                />
            </div>
         );
    }
}
 
export default Tracker;