import React, { Component } from "react";
import { Carousel, Card as CardBoot } from "react-bootstrap";

export default class Recommendations extends Component {
  render() {
    return (
      <div className="recommendation-card">
        <CardBoot.Title>Recomendações</CardBoot.Title>
      </div>
    );
  }
}
