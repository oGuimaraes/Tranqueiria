import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

export default class StarRating extends Component {
  onStarClick(nextValue, prevValue, name) {
    const { changeRatingValue } = this.props;

    changeRatingValue(nextValue);
  }

  render() {
    const { rating } = this.props;

    return (
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={this.onStarClick.bind(this)}
      />
    );
  }
}
