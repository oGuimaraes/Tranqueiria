import React, { Component } from "react";
import { Card as CardBoot } from "react-bootstrap";
import CardRecommendation from './CardRecommendation'

export default class Recommendations extends Component {
  constructor(props){
    super(props)
    let length = this.props.recommendationProducts.length-1
    const product1 =Math.ceil((Math.random()*1000)%length);
    const product2 =Math.ceil((Math.random()*1000)%length);
    const product3 =Math.ceil((Math.random()*1000)%length);
    const product4 =Math.ceil((Math.random()*1000)%length);
    this.state ={
      product1:product1,
      product2:product2,
      product3:product3,
      product4:product4
    }
  }
  render() {

    return (
      <div className="recommendation-card">
        <div className="container">
          <CardBoot.Title className="title">Recomendações</CardBoot.Title>
          <div className="cards">
          <CardRecommendation product={this.props.recommendationProducts[this.state.product1]}></CardRecommendation>
          <CardRecommendation product={this.props.recommendationProducts[this.state.product2]}></CardRecommendation>
          <CardRecommendation product={this.props.recommendationProducts[this.state.product3]}></CardRecommendation>
          <CardRecommendation product={this.props.recommendationProducts[this.state.product4]}></CardRecommendation>
          </div>
          </div> 
      </div>
    );
  }
}
