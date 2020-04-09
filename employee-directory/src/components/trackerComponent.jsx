import React, { Component } from 'react';
import Header from './header.jsx';
import SearchPage from './searchBar';
import Results from './results';

class Tracker extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <h1>check out this ish</h1>
                <SearchPage />
                <h1>You ain't never not never not ever not been ready not for this what.</h1>
                <Results />
            </div>
         );
    }
}
 
export default Tracker;