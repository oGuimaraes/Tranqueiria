import React, { Component } from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setProducts } from "./js/actions/index";
import Header from "./js/components/Header";
import Footer from "./js/components/Footer";
import axios from "axios";
import HomePage from "./js/pages/HomePage";
import ProductPage from "./js/pages/ProductPage";
import SearchPage from "./js/pages/SearchPage";
import CategoryPage from "./js/pages/CategoryPage";
import CartPage from "./js/pages/CartPage"

import history from "./history";

const mapStateToProps = state => {
  return { products: state.products, searchElement: state.searchElement };
};
const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: { data: [] },
      loading: true
    };
    this._setState();
  }
  async _setState() {
    let response = [];
    try {
      response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://funil-mock.herokuapp.com/example1"
      );
    } catch (error) {
      console.log("Error ", error);
    }
    //console.log(response.data.data)

    const a = response.data.data.map(item => (
        {...item, image: `${item.image}/?${item.id}` }
    ));
    

    this.props.setProducts(response.data.data);
    // this.props.setProducts(a);
    //Passar o state de loading para a store do redux depois
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <Router history={history}>
        <div className="App">
          <Header></Header>
          {/* implementar uma loading screen futuramente */}
          {loading ? (
            "Loading Page ..."
          ) : (
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route path="/search/" component={SearchPage} />
                <Route path="/category/" component={CategoryPage} />
                <Route path="/cart/" component={CartPage} />
              </Switch>
            </div>
          )}
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
