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
                <h5>Marca</h5>
                <CheckBox updateFilter={this.updateFilter} type={brand} title='Fay and Sons'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={brand} title='Gottlieb - Schroeder'/>
            </div>
        )
    }
    renderCheckCategory(){
        return(
            <div>
                <h5>Categoria</h5>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Shoes'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Sports'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Toys'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Outdoors'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Tools'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Beauty'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Health'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Home'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Clothing'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Baby'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Kids'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Garden'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Grocery'/>
                <br></br>
                <CheckBox updateFilter={this.updateFilter} type={category} title='Electronics'/>
            </div>
        )
    }
    componentWillUnmount(){
        this.updateFilter('clear')
    }
    render() {
        return (
            <div className = "filterMenu">
                {this.renderCheckBrand()}
                {this.renderCheckCategory()}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterMenu)
