import React, { Component } from 'react'
import {connect} from 'react-redux'
import SortDropdown from '../components/SortDropdown'
import OrganizeProducts from '../components/OrganizeProducts';
import {setSort} from '../actions/index'
import FilterMenu from '../components/FilterMenu'

const mapStateToProps = state => {
    return { 
        products: state.products,
        searchElement:state.searchElement,
        filter:state.filter,
        sort:state.sort
    };
};
const mapDispatchToProps = (dispatch) =>({
    setSort: (sortOption) => dispatch(setSort(sortOption))
});
export class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchResult: [...this.props.products.filter(product => product.name.toLowerCase().includes(this.props.searchElement.toLowerCase()) )],
            filter:this.props.filter,
            sort:this.props.sort
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ searchResult: [...nextProps.products.filter(product => product.name.includes(nextProps.searchElement) )] })
    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            searchResult: [...nextProps.products.filter(product => product.name.toLowerCase().includes(nextProps.searchElement.toLowerCase()))],
            filter:nextProps.filter,
            sort:nextProps.sort
        };
    }
    componentWillUnmount(){
        this.props.setSort('')
    }
    render() {
        return (
            <div className="SearchPage">
                {/* Container>Search Text + Ordenação + Card Group + Paginação */}
                <div className="containerSearchForSortDropdown">
                    <h5 className="searchFor">Busca por "{this.props.searchElement}"</h5>
                    <SortDropdown></SortDropdown>
                </div>
                <FilterMenu products={this.state.searchResult}></FilterMenu>
                <OrganizeProducts products={this.state.searchResult}/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)
