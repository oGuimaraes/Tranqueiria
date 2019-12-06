import React, { Component } from 'react'
import {connect} from 'react-redux'
import SortDropdownCategory from '../components/SortDropdownCategory'
import OrganizeProducts from '../components/OrganizeProducts';
import {setSort} from '../actions/index'
import FilterMenuCategory from '../components/FilterMenuCategory'

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
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            categoryResult: [...nextProps.products.filter(product => product.category === nextProps.categoryElement)],
            filter:nextProps.filter,
            sort:nextProps.sort
        };
    }
    componentWillUnmount(){
        this.props.setSort('')
    }
    render() {
        return (
            <div className="CategoryPage conteudo">
                {/* Container>Search Text + Ordenação + Card Group + Paginação */}
                <div className="containerMigalhaSortDropdown">
                    <h5 className="CategoryName"> {this.props.categoryGroup} > {this.props.categoryElement}</h5>
                    <SortDropdownCategory></SortDropdownCategory>
                </div>
                <FilterMenuCategory products={this.state.categoryResult}></FilterMenuCategory>
                <OrganizeProducts products={this.state.categoryResult}/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage)
