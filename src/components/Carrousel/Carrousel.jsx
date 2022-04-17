import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import './index.css'
import img1 from '../../assets/comment1.png'
import img2 from '../../assets/comment2.png'
import img3 from '../../assets/comment3.png'

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config 
  };

  slides = [
    {
        key: 12312,
      content: <img src={img1} alt="1" className="image_style" />
    },
    {
        key: 123112,
      content: <img src={img2} alt="2" className="image_style"/>
    },
    {
        key: 123123,
      content: <img src={img3} alt="3" className="image_style"/>
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={config.slow}
          autoPlay={true}
        />
      </div>
    );
  }
}
