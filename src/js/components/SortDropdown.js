import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setSort} from '../actions/index'
import {A_a_Z,Z_a_A,brand,category,priceBaA,priceAaB, color} from '../constants/sort-types'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const mapStateToProps = state => ({
    sort:state.sort
})
const mapDispatchToProps = (dispatch) =>({
    setSort: (sortOption) => dispatch(setSort(sortOption))
});
export class SortDropdown extends Component {
    constructor(props){
        super(props)
        this.state={
            sortOption:''
        }
    }
    btnStyle = () =>{
        return{textDecoration:'none',
        width:'100%',
        border:'none',
        background:'none'}
    }
    renderButton = (sort,title) =>{
        return (
            <button 
                onClick={() =>this.props.setSort(sort)} 
                style={this.btnStyle()}>
                {title}</button>
        )
    }
    handleChangeSort =event=>{
        this.props.setSort(event.target.value)
        this.setState({sortOption:event.target.value})
    };
    render() {
        return (
            <FormControl className="dropdownSort">
                    <InputLabel id="demo-simple-select-label">Ordernar por:</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.sortOption}
                    onChange={this.handleChangeSort}
                    >
                        <MenuItem value={A_a_Z}>De A a Z</MenuItem>
                        <MenuItem value={Z_a_A}>De Z a A</MenuItem>
                        <MenuItem value={brand}>Marca</MenuItem>
                        <MenuItem value={category}>Categoria</MenuItem>
                        <MenuItem value={priceBaA}>Preço: baixo a alto</MenuItem>
                        <MenuItem value={priceAaB}>Preço: alto a baixo</MenuItem>
                        <MenuItem value={color}>Cor</MenuItem>

                    </Select>
                </FormControl>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortDropdown)
