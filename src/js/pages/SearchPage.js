import React, { Component } from 'react'
import {connect} from 'react-redux'
import CardGroup  from '../components/CardGroup'

const mapStateToProps = state => {
    return { products: state.products,searchElement:state.searchElement};
};
export class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchResult: [...this.props.products.filter(product => product.name.includes(this.props.searchElement) )]
        }
        console.log(this.state.searchElement)
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ searchResult: [...nextProps.products.filter(product => product.name.includes(nextProps.searchElement) )] })
    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            searchResult: [...nextProps.products.filter(product => product.name.includes(nextProps.searchElement) )]
        };
    }
    render() {
        return (
            <div className="SearchPage">
                {/* FilterMenu */}
                {/* Container>Search Text + Ordenação + Card Group + Paginação */}
                <CardGroup products={this.state.searchResult}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchPage)
