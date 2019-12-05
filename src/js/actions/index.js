import {
  SEARCH_ELEMENT,
  CATEGORY_GROUP,
  CATEGORY_ELEMENT,
  SET_PRODUCTS,
  SET_FILTER,
  SET_SORT,
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  CHANGE_QUANTITY_PRODUCT,
  ADD_COMMENT,
  CHANGE_PRICE_TOTAL,
  CLEAR_CART
} from "../constants/action-types";

export function changeSearchElement(payload) {
  return { type: SEARCH_ELEMENT, payload };
}
export function changeCategoryGroup(payload) {
  return { type: CATEGORY_GROUP, payload };
}
export function changeCategoryElement(payload) {
  return { type: CATEGORY_ELEMENT, payload };
}
export function setProducts(payload) {
  return { type: SET_PRODUCTS, payload };
}
export function setFilter(payload) {
  return { type: SET_FILTER, payload };
}
export function setSort(payload) {
  return { type: SET_SORT, payload };
}
export function changeFilter(payload) {
  return { type: "changeFilter", payload };
}
export function addCartProduct(payload) {
  return { type: ADD_CART_PRODUCT, payload };
}
export function removeCartProduct(payload) {
  return { type: REMOVE_CART_PRODUCT, payload };
}
export function changeQuantityProduct(productId, quantity) {
  return { type: CHANGE_QUANTITY_PRODUCT, payload: { productId, quantity } };
}
export function addComment(productId, comment) {
  return { type: ADD_COMMENT, payload: { productId, comment } };
}
export function changePriceTotal(payload) {
  return { type: CHANGE_PRICE_TOTAL,payload}
}
export function clearCart(){
  return { type: CLEAR_CART , payload: []}
}
