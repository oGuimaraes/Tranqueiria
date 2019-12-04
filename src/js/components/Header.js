import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchAppBar from './SearchAppBar'
import Button from './Button'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import CategoryDriver from './CategoryDriver';
import {DropdownButton} from 'react-bootstrap'
import DropdownItem from './DropdownItem'

export class Header extends Component {
   
    render() {
        const {cart} = this.props;
        return (
            <div>
                <div>
                    <SearchAppBar />
                </div>
                <div className="search-bar-mobile">
                    <SearchBar />
                </div>
                    <div id="headerTop">
                        <Link to="/" style={{textDecoration:'none',color:'white'}}><h1 id="siteName">Tranqueiria</h1></Link>
                        <SearchBar to="/search"/>
                        <Button to="/cart" title={`Carrinho (${cart.length}) `}/>
                        <Button to="/login" title="Entrar"/>
                    </div>
                    
                    <div class="header-bot" id="headerBot">
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