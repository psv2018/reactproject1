import React, { Component } from "react";
import "./App.css";

class FooterComponent extends Component {
    render() {
      return (
        <div className='Footer'>

       <div className='AboutUs'>
       <h1>ABOUT US</h1>
       <p>loremlorem lorem loremloremlo remloremloremlorem  ipum</p><br/>
       <span>123 street name</span><br/>
       <span>road name</span><br/>
       <span>Finland</span><br/>
       <span>+35828432</span><br/>
       </div>

       <div className='LatestTweets'>
       <h1>LATEST TWEETS</h1>
       <p><span>@jayanth</span>jus subscribed another <span>#thermoforest</span></p>
       <p><span>@jayanth</span>jus subscribed another <span>#thermoforest</span></p>
       </div>

       <div className='LatestPosts'>
       <h1>LATEST POSTS</h1>
       <p> lorem lorem lorem lorem</p>
       <p> lorem lorem lorem lorem</p>
       <p> lorem lorem lorem lorem</p>
       <p> lorem lorem lorem lorem</p>
       </div>

       <div className='PhotosFromFlickr'>
       <h1>FLICKR</h1>
       <div className='Flickr' >
       <div className='BlackBox'></div> 
       <div className='BlackBox'></div> 
       <div className='BlackBox'></div> 
       <div className='BlackBox'></div> 
       <div className='BlackBox'></div> 
       <div className='BlackBox'></div> 
       <div className='BlackBox'></div> 
       <div className='BlackBox'></div> 
        </div>
        </div>
       </div>
      );
    }
  }
export default FooterComponent;
