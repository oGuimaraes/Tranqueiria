import React, { Component } from "react";
import { Carousel, Card as CardBoot } from "react-bootstrap";

export default class Recommendations extends Component {
  render() {
    return (
      <CardBoot className="recommendation-card" style={{ width: "56rem" }}>
        <CardBoot.Title>Recomendações</CardBoot.Title>
      </CardBoot>
    );
  }
}
