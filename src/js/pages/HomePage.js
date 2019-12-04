import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";

const mapStateToProps = state => {
  return { products: state.products };
};

export class HomePage extends Component {
  renderCard = product => {
    return <Card product={product} />;
  };
  renderCardGroup = () => {
    return (
      <div className="cardGroup">
        {this.renderCard(
          this.props.products[
            Math.floor(Math.random() * this.props.products.length)
          ]
        )}
        {this.renderCard(
          this.props.products[
            Math.floor(Math.random() * this.props.products.length)
          ]
        )}
        {this.renderCard(
          this.props.products[
            Math.floor(Math.random() * this.props.products.length)
          ]
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="homePage">
        {/* Aqui virá o carousel */}
        {this.renderCardGroup()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomePage);
