import React, { Component } from "react";
import { Carousel, Card as CardBoot } from "react-bootstrap";
import CardRecommendation from './CardRecommendation'

export default class Recommendations extends Component {
  render() {
    let length = this.props.recommendationProducts.length-1
    return (
      <div className="recommendation-card">
        <div className="container">
          <CardBoot.Title className="title">Recomendações</CardBoot.Title>
          <div className="cards">
          <CardRecommendation product={this.props.recommendationProducts[Math.ceil((Math.random()*1000)%length)]}></CardRecommendation>
          <CardRecommendation product={this.props.recommendationProducts[Math.ceil((Math.random()*1000)%length)]}></CardRecommendation>
          <CardRecommendation product={this.props.recommendationProducts[Math.ceil((Math.random()*1000)%length)]}></CardRecommendation>
          <CardRecommendation product={this.props.recommendationProducts[Math.ceil((Math.random()*1000)%length)]}></CardRecommendation>
          </div>
          </div> 
      </div>
    );
  }
}
