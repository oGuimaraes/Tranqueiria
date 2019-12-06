import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Recommendations from "../components/Recommendations";
import ProductRating from "../components/ProductRating";

const mapStateToProps = state => {
  return { products: state.products };
};

export class ProductPage extends Component {
  renderCard = product => {
    return (
      <div className="content">
        <Product product={product} />
        <Recommendations />
        <ProductRating product={product} />
      </div>
    );
  };
  renderCardGroup = () => {
    return (
      <div className="cardGroup">
        {this.renderCard(this.props.products[this.props.match.params.id - 1])}
      </div>
    );
  };
  render() {
    return <div>{this.renderCardGroup()}</div>;
  }
}

export default connect(mapStateToProps)(ProductPage);
