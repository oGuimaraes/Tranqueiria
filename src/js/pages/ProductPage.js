import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Recommendations from "../components/Recommendations";
import ProductRating from "../components/ProductRating";

const mapStateToProps = state => {
  return { products: state.products,
            productPageAdjIgual:state.productPageAdjIgual,
            productPageMatIgual:state.productPageMatIgual,
            productPageObjIgual:state.productPageObjIgual,
            productPageCorIgual:state.productPageCorIgual,
            productPageCatIgual:state.productPageCatIgual,
            recommendationProducts:[]
  };
};

export class ProductPage extends Component {
  generateRecomentations = product =>{
    let products = this.props.products
    let recommendationProducts = []
    let nameWords = product.name.split(' ')
    if(this.props.productPageAdjIgual){
      for(let i = 0;i<products.length;i++){
        if(products[i].name.includes(nameWords[0])){
          if(recommendationProducts.indexOf(products[i])<0&&products[i]!==product){
            recommendationProducts.push(products[i])
          }
        }
      }
    }
    if(this.props.productPageMatIgual){
      for(let i = 0;i<products.length;i++){
        if(products[i].name.includes(nameWords[1])){
          if(recommendationProducts.indexOf(products[i])<0&&products[i]!==product){
            recommendationProducts.push(products[i])
          }
        }
      }
    }
    if(this.props.productPageObjIgual){
      for(let i = 0;i<products.length;i++){
        if(products[i].name.includes(nameWords[2])){
          if(recommendationProducts.indexOf(products[i])<0&&products[i]!==product){
            recommendationProducts.push(products[i])
          }
        }
      }
    }
    if(this.props.productPageCorIgual){
      for(let i = 0;i<products.length;i++){
        if(products[i].color===product.color){
          if(recommendationProducts.indexOf(products[i])<0&&products[i]!==product){
            recommendationProducts.push(products[i])
          }
        }
      }
    }
    if(this.props.productPageCatIgual){
      for(let i = 0;i<products.length;i++){
        if(products[i].category===product.category){
          if(recommendationProducts.indexOf(products[i])<0&&products[i]!==product){
            recommendationProducts.push(products[i])
          }
        }
      }
    }
    return recommendationProducts
  }
  renderCard = product => {
    let recommendationProducts = this.generateRecomentations(product)
    return (
      <div className="content">
        <Product product={product} />
        {recommendationProducts.length>0 ? (<Recommendations recommendationProducts = {recommendationProducts}/>):''} 
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
