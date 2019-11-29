import { SEARCH_ELEMENT,SET_PRODUCTS,SET_FILTER,SET_SORT } from '../constants/action-types'

const initialState = {
    products:[],
    searchElement:'',
    filter:{category:[],brand:[]},
    changeFilter:'',
    sort:'batatinha'
}

function rootReducer(state = initialState,action){
    if(action.type===SEARCH_ELEMENT){
        return Object.assign({}, state, {
            searchElement: action.payload
        });
    }
    else if(action.type===SET_PRODUCTS){
        return Object.assign({}, state, {
            products: action.payload
        });
    }
    else if(action.type===SET_FILTER){
        return Object.assign({}, state, {
            filter: action.payload
        });
    }
    else if(action.type===SET_SORT){
        return Object.assign({}, state, {
            sort: action.payload
        });
    }
    else if(action.type==='changeFilter'){
        return Object.assign({}, state, {
            changeFilter: action.payload
        });
    }
    return state;
}

export default rootReducer;