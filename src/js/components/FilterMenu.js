import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setFilter,changeFilter} from '../actions/index'
import CheckBox from '../components/CheckBox'
import {brand,category} from '../constants/filter-types'

const mapStateToProps = state => {
    return { 
        filter:state.filter
    };
};
const mapDispatchToProps = (dispatch) =>({
    setFilter: (filterOption) => dispatch(setFilter(filterOption)),
    changeFilter: (cf) => dispatch(changeFilter(cf))
});
export class FilterMenu extends Component {
    updateFilter=(type,filterOption)=>{
        let filter = this.props.filter
        if(type==='clear'){
            filter.brand = []
            filter.category = []
        }
        else if(type===brand){
            let index = filter.brand.indexOf(filterOption);
            if(index>-1){
                filter.brand.splice(index,1)
                this.props.changeFilter('')
            }
            else{
                filter.brand.push(filterOption)
                this.props.changeFilter(filterOption)
            }
        }
        else if(type===category){
            let index = filter.category.indexOf(filterOption);
            if(index>-1){
                filter.category.splice(index,1)
                this.props.changeFilter('')
            }
            else{
                filter.category.push(filterOption)
                this.props.changeFilter(filterOption)
            }
        }
        console.log(filter)
        this.props.setFilter(filter)
    }
    renderCheckBrand(){
        return(
            <div>
                <CheckBox updateFilter={this.updateFilter} type={brand} title='Fay and Sons'/>
                <CheckBox updateFilter={this.updateFilter} type={brand} title='Gottlieb - Schroeder'/>
            </div>
        )
    }
    renderCheckCategory(){


    }
    componentWillUnmount(){
        this.updateFilter('clear')
    }
    render() {
        return (
            <div className = "filterMenu">
                {this.renderCheckBrand()}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterMenu)
