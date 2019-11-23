import { SEARCH_ELEMENT,SET_PRODUCTS,SET_FILTER,SET_SORT } from '../constants/action-types'

export function changeSearchElement(payload){
    return { type: SEARCH_ELEMENT,payload }
};
export function setProducts(payload){
    return{ type: SET_PRODUCTS,payload }
};
export function setFilter(payload){
    return{ type: SET_FILTER,payload }
};
export function setSort(payload){
    return{ type: SET_SORT,payload }
};