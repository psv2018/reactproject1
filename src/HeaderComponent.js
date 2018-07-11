import React, { Component } from 'react';
import logo from './Header-img.png';
import './App.css';

class HeaderComponent extends Component {
    
    render() {
         return (
           <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='LogoTexts'> 
        <p className="App-intro">
         POWERFULLY SIMPLE <span>WITH A </span>  <br/> SQUEEKY CLEAN DESIGN</p>
        <p>Find out how you can offer quick and fast <br/> solutions to your customer</p>
        <button className="ReadMore">learn more</button>
        </div>
        </header>
        <div class='borderBubble'>
        <div class="bubble">
        <h4>CREATE POWERFUL SOLUTION NOW</h4>
        <button >LEARN MORE</button>
        </div>
        </div>
        
        </div>
       ); 
    }
}
export default HeaderComponent;
