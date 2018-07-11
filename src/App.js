import React, { Component } from "react";
import "./App.css";
//import ServicesComponent from './ServicesComponent.js';
import HeaderComponent from "./HeaderComponent.js";
import Header from "./Header";
import RecentWork from "./RecentWork";
import Testimonials from "./testimonials";
import DevelopmentComponent from "./DevelopmentComponent";
import FooterComponent from "./FooterComponent";
import BorderComponent from "./border";
import BubbleEditor from "./bubbleeditor";
import FooterLinks from "./FooterLinks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <div>
          <div className="BorderTop" />
          <div className="IconsInHeader">
            <Header
              icon="fa fa-mobile-phone"
              title1="SUPERBLY"
              title2="RESPONSIVE"
            />
            <Header icon="fa fa-mobile-phone" title1="SQUEEKY" title2="CLEAN" />
            <Header icon="fa fa-desktop" title1="MULTI" title2="PURPOSE" />
            <Header icon="fa fa-recycle" title1="HIGHLY" title2="FLEXIBLE" />
          </div>

          <BorderComponent heading="RECENT POST" />

          <div className="RecentWork">
            <RecentWork />
            <RecentWork />
            <RecentWork />
          </div>

          <div className="testimonials">
            <BorderComponent heading="TESTIMONIALS" />
            <BorderComponent heading="TESTIMONIALS" />
            <div className="TestimonialWrapper">
              <Testimonials />
              <Testimonials />
              <Testimonials />
              <Testimonials />
            </div>
            <DevelopmentComponent />
          </div>
          <div className="FooterComponents">
            <BubbleEditor />
            <FooterComponent />
          </div>
          <FooterLinks />
        </div>
      </div>
    );
  }
}

export default App;
