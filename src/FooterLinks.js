import React, { Component } from "react";

import "./App.css";

class FooterLinks extends Component {
  render() {
    return (
      <div>
        <div className="product-footer">
          <p> &#x24B8;copyright 2012.Allrights reserved </p>
          <div className="socialMediaIcons">

          <div className='tooltip'><a href="#" class="fa fa-facebook" />
          <span className='tooltiptext'>facebook </span>
          </div>

          <div className='tooltip'>
              <a href="#" class="fa fa-google" />
              <span className='tooltiptext'>google</span>
          </div>

          <div className='tooltip'>
              <a href="#" class="fa fa-android" />
              <span className='tooltiptext'>Android</span>
              </div>
          <div className='tooltip'>
              <a href="#" class=" fa fa-vimeo" />
              <span className='tooltiptext'>vimeo</span>
          </div>

          <div className='tooltip'>
          
              <a href="#" class="fa fa-instagram" />
              <span className='tooltiptext'>instagram</span>
          </div>
          <div className='tooltip'>
             <a href="#" class="fa fa-linkedin"></a>
            <span class="tooltiptext">linkedin</span>
          </div>
            
          </div>
        </div>
      </div>
    );
  }
}
export default FooterLinks;
