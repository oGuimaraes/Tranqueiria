import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default class StarRating extends Component {
  onStarClick = (nextValue, prevValue, name) => {
    const { changeRatingValue } = this.props;

    changeRatingValue(nextValue);
  };

  render() {
    const { rating } = this.props;

    return (
      <StarRatings
        rating={rating}
        numberOfStars={5}
        starDimension="32px"
        starHoverColor="#1976d2"
        starRatedColor="#1976d2"
        changeRating={this.onStarClick}
      />
    );
  }
}
