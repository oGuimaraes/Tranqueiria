import { SEARCH_ELEMENT } from '../constants/action-types'
import { SET_PRODUCTS } from '../constants/action-types'

export function changeSearchElement(payload){
    return { type: SEARCH_ELEMENT,payload }
};
export function setProducts(payload){
    return{ type: SET_PRODUCTS,payload}
};