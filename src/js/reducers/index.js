import { SEARCH_ELEMENT,SET_PRODUCTS } from '../constants/action-types'

const initialState = {
    products:[],
    searchElement:'',
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
    return state;
}

export default rootReducer;