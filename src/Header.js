import React, { Component } from "react";

import "./App.css";

class Header extends Component {
    render() {
      return (
        <div className="columns">
        <i className={this.props.icon}></i>
        <h2>{this.props.title1 + this.props.title2}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='HeaderButton'>Learn More</button>
        </div>
      );
    }
  }
export default Header;
  

