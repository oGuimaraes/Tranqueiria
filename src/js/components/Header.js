import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Button from './Button'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import CategoryDriver from './CategoryDriver';


// import { Button, ButtonToolbar, Dropdown } from 'react-bootstrap';
// import logoImg from '../img/logo.svg'

export class Header extends Component {
   
    render() {
        const {cart} = this.props;
        return (
            
            <div>
                <div id = "headerTop">
                    {/* <img src={logoImg} alt="logo"></img> */}
                    <Link to="/" style={{textDecoration:'none',color:'white'}}><h1 id="siteName">Tranqueiria</h1></Link>
                    <SearchBar to="/search"/>
                    <Button to="/cart" title={`Carrinho (${cart.length}) `}/>
                    <Button to="/login" title="Entrar"/>
                    
                </div>
                <div id="headerBot">
                    <CategoryDriver />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
  mapStateToProps
)(Header);


