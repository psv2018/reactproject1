import React, { Component } from "react";
import image from './img-placeholder.png';
import Testimonials from "./testimonials";
import "./App.css";

class RecentWork extends Component {
    render() {
      return (
        <div className='recentWorks'>
         <img src={image} className="recentWorkImage" alt="recent" />
         <Testimonials/>
        </div>
      );
    }
  }
export default RecentWork;
  