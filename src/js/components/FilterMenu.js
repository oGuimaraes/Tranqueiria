import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setFilter,changeFilter} from '../actions/index'
import {brand,category,color} from '../constants/filter-types'
import { DropdownButton} from 'react-bootstrap'

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
            filter.type=''
            filter.filterOption=''
            this.props.changeFilter('')
        }
        else if(type===brand){
            filter.type=type
            filter.filterOption=filterOption
            this.props.changeFilter(filterOption)
        }
        else if(type===category){
            filter.type=type
            filter.filterOption=filterOption
            this.props.changeFilter(filterOption)
        }
        else if(type===color){
            filter.type=type
            filter.filterOption=filterOption
            this.props.changeFilter(filterOption)
        }
        console.log(filter)
        this.props.setFilter(filter)
    }

    btnStyle = () =>{
        return{textDecoration:'none',
        width:'100%',
        border:'none',
        background:'none'}
    }
    renderButton = (type,title,key=0) =>{
        return (
            <button 
                key={key}
                onClick={() =>this.updateFilter(type,title)} 
                style={this.btnStyle()}>
                {title}</button>
        )
    }

    renderDropdownBrand(){
        let brs = []
        //Alterar o for abaixo por um map
        for(let i =0;i<this.props.products.length;i++){
            if(brs.indexOf(this.props.products[i].brand)<0){
                brs.push(this.props.products[i].brand)
            }
        }
        console.log(brs)
        const brands = brs.map((br,index) => 
            this.renderButton(brand,br,index)
        )
        return(
            <div>
                <DropdownButton id="dropdown-button" title="Marca:">                
                    {brands}
                </DropdownButton>
            </div>
        )
    }
    renderDropdownColor(){
        return(
            <div>
                <DropdownButton id="dropdown-button" title="Cor">
                    {this.renderButton(color,"red",0)}
                    {this.renderButton(color,"orange",1)}
                    {this.renderButton(color,"yellow",2)}
                    {this.renderButton(color,"green",3)}
                    {this.renderButton(color,"blue",4)}
                    {this.renderButton(color,"indigo",5)}
                    {this.renderButton(color,"violet",6)}
                    {this.renderButton(color,"grey",7)}
                </DropdownButton>
            </div>
        )
    }
    renderDropdownCategory(){
        return(
            <div className="dropdown">
                <DropdownButton id="dropdown-button" title="Categoria:">           
                    {this.renderButton(category,"Shoes",0)}
                    {this.renderButton(category,"Sports",1)}
                    {this.renderButton(category,"Toys",2)}
                    {this.renderButton(category,"Outdoors",3)}
                    {this.renderButton(category,"Tools",4)}
                    {this.renderButton(category,"Beauty",5)}
                    {this.renderButton(category,"Health",6)}
                    {this.renderButton(category,"Home",7)}
                    {this.renderButton(category,"Clothing",8)}
                    {this.renderButton(category,"Baby",9)}
                    {this.renderButton(category,"Kids",10)}
                    {this.renderButton(category,"Garden",11)}
                    {this.renderButton(category,"Grocery",12)}
                    {this.renderButton(category,"Electronics",13)}
                </DropdownButton>
            </div>
        )
    }
    componentWillUnmount(){
        this.updateFilter('clear')
    }
    render() {
        
        return (
            <div className = "filterMenu">
                {this.renderButton("clear","Limpar Filtro")} 
                {this.renderDropdownBrand()}
                {this.renderDropdownCategory()}
                {this.renderDropdownColor()}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterMenu)
