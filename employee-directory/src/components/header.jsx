  
import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-title">
          {" "}
          <h2>Employee Directory</h2>
          <h3>Narrow search results with options</h3>
        </div>
      </header>
    );
  }
}

export default Header;