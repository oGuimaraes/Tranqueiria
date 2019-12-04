import React, { Component } from 'react'
import {changeCategoryElement, changeCategoryGroup} from '../actions/index'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import Button from './Button'
import {Link} from 'react-router-dom'
import {DropdownButton} from 'react-bootstrap'
import DropdownItem from './DropdownItem'
import "../../sass/HeaderButtom.scss"
import {setFilter,changeFilter} from '../actions/index'


const mapDispatchToProps = (dispatch) =>({
  changeCategoryGroup: (categoryGroup) => dispatch(changeCategoryGroup(categoryGroup)),
  changeCategoryElement: (categoryElement) => dispatch(changeCategoryElement(categoryElement)),
  setFilter: (filterOption) => dispatch(setFilter(filterOption)),
  changeFilter: (cf) => dispatch(changeFilter(cf))
});

export class CategoryDriver extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            itens:
                [
                    {
                        id: 1,
                        title: 'Outdoors',
                        categories: [
                            {id: 1, item: "Shoes"},
                            {id: 2, item: "Sports"},
                            {id: 3, item: "Toys"},
                            {id: 4, item: "Outdoors"},
                            {id: 5, item: "Tools"},

                        ] 
                    },
                    {
                        id: 2,
                        title: 'Daily',
                        categories: [

                            {id: 1, item: "Beauty"},
                            {id: 2, item: "Health"},
                            {id: 3, item: "Home"},
                            {id: 4, item: "Clothing"},
                            {id: 5, item: "Baby"},
                            {id: 6, item: "Kids"},
                            {id: 7, item: "Garden"},
                            {id: 8, item: "Grocery"},
                        ] 
                    },
                    {
                        id: 3,
                        title: 'Eletronics',
                        categories: [
                            {id: 1, item: "Eletronics"},
                            {id: 2, item: "Games"},
                            {id: 3, item: "Computers"}
                        ] 
                    },
                    {
                        id: 4,
                        title: 'Art',
                        categories: [
                            {id: 1, item: "Movies"},
                            {id: 2, item: "Music"},
                            {id: 3, item: "Book"}

                        ] 
                    },
                    {
                        id: 5,
                        title: 'Others',
                        categories: [
                            {id: 1, item: "Automotive"},
                            {id: 2, item: "Industrial"},
                            {id: 3, item: "Jewelery"}

                        ] 
                    }
                ]
        }
        this.onHandleClick=this.onHandleClick.bind(this);
    }
    onHandleClick = (group, element) => {
        return(
            //console.log(group),
            //console.log(element),
            this.props.setFilter({type:'',filterOption:''}),
            this.props.changeFilter(''),
            this.props.changeCategoryGroup(group),
            this.props.changeCategoryElement(element),
            this.props.history.push(`/category/${element}`)
        )
    }
    render() {
        
        return (
            <React.Fragment>
                {this.state.itens.map(elemento => 
                        <DropdownButton className="" id="dropdown-button" key={elemento.title} title={elemento.title}>
                            {elemento.categories.map(iteration =>
                            <Link to={`/category/${iteration.item}`}><button key={iteration.item} className="Header-Buttom" onClick={() => this.onHandleClick(elemento.title, iteration.item)}>{iteration.item}</button></Link>)}
                                {/*<DropdownItem to={`/category/${iteration.item}`} key={iteration.item} onClick={() => this.onHandleClick.bind(this, elemento.title, iteration.item)} title={iteration.item}/>)}*/}
                        </DropdownButton>
                )}
            </React.Fragment>
        )
    }
}

export default withRouter( connect(null,mapDispatchToProps) (CategoryDriver))
