import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setFilter,changeFilter} from '../actions/index'
import {brand,category,color} from '../constants/filter-types'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));
//const classes = useStyles();
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
    constructor(props){
        super(props)
        this.state={
            filterOption:''
        }
    }

    updateFilter=(type,filterOption)=>{
        let filter = this.props.filter
        if(type==='clear'){
            filter.type=''
            filter.filterOption=''
            this.props.changeFilter('')
            this.setState({filterOption:''})
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
    handleChangeBrand =event=>{
        this.updateFilter(brand,event.target.value)
        this.setState({filterOption:event.target.value})
    };
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
            <MenuItem value={br}>{br}</MenuItem> 
        )
        return(
            <div>
                <FormControl className="dropdownFilter">
                    <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.filterOption}
                    onChange={this.handleChangeBrand}
                    >
                        {brands}
                    </Select>
                </FormControl>
            </div>
        )
    }
    handleChangeColor =event=>{
        this.updateFilter(color,event.target.value)
        this.setState({filterOption:event.target.value})
    };
    renderDropdownColor(){      
        return(
            <div>             
                <FormControl className="dropdownFilter">
                    <InputLabel id="demo-simple-select-label">Cor</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.filterOption}
                    onChange={this.handleChangeColor}
                    >
                        <MenuItem value={"red"}>Red</MenuItem>
                        <MenuItem value={"orange"}>Orange</MenuItem>
                        <MenuItem value={"yellow"}>Yellow</MenuItem>
                        <MenuItem value={"green"}>Green</MenuItem>
                        <MenuItem value={"blue"}>Blue</MenuItem>
                        <MenuItem value={"indigo"}>Indigo</MenuItem>
                        <MenuItem value={"violet"}>Violet</MenuItem>
                        <MenuItem value={"grey"}>Grey</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
    handleChangeCategory =event=>{
        this.updateFilter(category,event.target.value)
        this.setState({filterOption:event.target.value})
    };
    renderDropdownCategory(){
        console.log(useStyles.formControl)
        return(
            <div>
                <FormControl className="dropdownFilter">
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.filterOption}
                    onChange={this.handleChangeCategory}
                    >
                        <MenuItem value={"Books"}>Books</MenuItem>
                        <MenuItem value={"Movies"}>Movies</MenuItem>
                        <MenuItem value={"Shoes"}>Shoes</MenuItem>
                        <MenuItem value={"Sports"}>Sports</MenuItem>
                        <MenuItem value={"Toys"}>Toys</MenuItem>
                        <MenuItem value={"Outdoors"}>Outdoors</MenuItem>
                        <MenuItem value={"Tools"}>Tools</MenuItem>
                        <MenuItem value={"Beauty"}>Beauty</MenuItem>
                        <MenuItem value={"Health"}>Health</MenuItem>
                        <MenuItem value={"Home"}>Home</MenuItem>
                        <MenuItem value={"Clothing"}>Clothing</MenuItem>
                        <MenuItem value={"Baby"}>Baby</MenuItem>
                        <MenuItem value={"Kids"}>Kids</MenuItem>
                        <MenuItem value={"Garden"}>Garden</MenuItem>
                        <MenuItem value={"Grocery"}>Grocery</MenuItem>
                        <MenuItem value={"Electronics"}>Electronics</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
    componentWillUnmount(){
        this.updateFilter('clear')
    }
    render() {
        
        return (
            <div className="filterMenu">
                <h3>Filtrar por:</h3>
                {this.renderDropdownBrand()}
                {this.renderDropdownCategory()}
                {this.renderDropdownColor()}
                {this.renderButton("clear","Limpar Filtro")} 
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterMenu)
