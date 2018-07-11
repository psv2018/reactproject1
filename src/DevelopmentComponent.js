import React, { Component } from "react";
import "./App.css";
import BorderComponent from "./border";

class DevelopmentComponent extends Component {
    render() {
      return (
        <div className='Development'>
        <div className='DevelopmentTestimonials'>
        <button className='DesignButton'>DESIGN</button>
        <button className='ProductionButton'>PRODUCTION</button>
        <h1>Blog Title</h1>
        <p>lorem Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          There is no one who loves pain itself, who seeks after it </p>
          <p>lorem Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
           There is no one who loves pain itself, who seeks after it </p>
          <button className='ReadMore'>READ MORE</button>
          </div>

        </div>
      );
    }
  }
export default DevelopmentComponent;
