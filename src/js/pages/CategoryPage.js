import React, { Component } from 'react'
import {connect} from 'react-redux'
import SortDropdown from '../components/SortDropdown'
import OrganizeProducts from '../components/OrganizeProducts';
import {setSort} from '../actions/index'
import FilterMenu from '../components/FilterMenu'

const mapStateToProps = state => {
    return { 
        products: state.products,
        categoryGroup:state.categoryGroup,
        categoryElement:state.categoryElement,
        filter:state.filter,
        sort:state.sort
    };
};
const mapDispatchToProps = (dispatch) =>({
    setSort: (sortOption) => dispatch(setSort(sortOption))
});
export class CategoryPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            categoryResult: [...this.props.products.filter(product => product.category === this.props.categoryElement)],
            filter:this.props.filter,
            sort:this.props.sort
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ searchResult: [...nextProps.products.filter(product => product.name.includes(nextProps.searchElement) )] })
    // }
    //static getDerivedStateFromProps(nextProps, prevState) {
    //    return {
    //        categoryResult: [...this.props.products.filter(product => product.category === this.props.categoryElement)],
    //        filter:nextProps.filter,
    //        sort:nextProps.sort
    //    };
    //}
    componentWillUnmount(){
        this.props.setSort('')
    }
    render() {
        return (
            <div className="CategoryPage">
                {/* Container>Search Text + Ordenação + Card Group + Paginação */}
                <h5 className="CategoryName"> {this.props.categoryGroup} > {this.props.categoryElement}</h5>
                <SortDropdown></SortDropdown>
                <FilterMenu products={this.state.categoryResult}></FilterMenu>
                <OrganizeProducts products={this.state.categoryResult}/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage)
