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
  CLEAR_CART,
  CHANGE_PP_ADJ,
  CHANGE_PP_MAT,
  CHANGE_PP_OBJ,
  CHANGE_PP_COR,
  CHANGE_PP_CAT
} from "../constants/action-types";

const INITIAL_STATE = {
  products: [],
  searchElement: "",
  filter: { type: "", filterOption: "" },
  changeFilter: "",
  sort: "",
  categoryGroup: "",
  categoryElement: "",
  cart: [],
  totalPrice:0,
  productPageAdjIgual:false,
  productPageMatIgual:false,
  productPageObjIgual:false,
  productPageCorIgual:false,
  productPageCatIgual:false
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_ELEMENT: {
      return { ...state, searchElement: action.payload };
    }
    case CATEGORY_GROUP: {
      return { ...state, categoryGroup: action.payload };
    }
    case CATEGORY_ELEMENT: {
      return { ...state, categoryElement: action.payload };
    }
    case SET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case SET_FILTER: {
      return { ...state, filter: action.payload };
    }
    case SET_SORT: {
      return { ...state, sort: action.payload };
    }
    case "changeFilter": {
      return { ...state, changeFilter: action.payload };
    }
    case ADD_CART_PRODUCT: {
      const product = state.cart.find(item => {
        if (item.id === action.payload.id) return item;
      });
      if (product) {
        product.quantity = product.quantity + 1;
        const products = state.cart.filter(product => {
          return product.id !== action.payload;
        });
        return Object.assign({}, state, {
          cart: [...products]
        });
      } else {
        return Object.assign({}, state, {
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        });
      }
    }
    case REMOVE_CART_PRODUCT: {
      return Object.assign({}, state, {
        cart: state.cart.filter(product => {
          return product.id !== action.payload;
        })
      });
    }
    case CHANGE_QUANTITY_PRODUCT: {
        const cart = state.cart.map(item => {
            if (item.id === action.payload.productId)
                return { ...item, quantity: action.payload.quantity }
            else
                return item
        })
        
        return { 
            ...state,
            cart,
        }
    }

    case ADD_COMMENT: {
      const { products } = state;
      const { productId, comment } = action.payload;

      return Object.assign({}, state, {
        products: products.map(product =>
          product.id === productId
            ? {
                ...product,
                comments: [...product.comments, comment]
              }
            : product
        )
      });
    }
    case CHANGE_PRICE_TOTAL:{
      return { ...state, totalPrice: action.payload };
    }
    case CLEAR_CART: {
      return { ...state, cart: action.payload }
    }
    case CHANGE_PP_ADJ:{
      return { ...state, productPageAdjIgual: action.payload }
    }
    case CHANGE_PP_MAT:{
      return { ...state, productPageMatIgual: action.payload }
    }
    case CHANGE_PP_OBJ:{
      return { ...state, productPageObjIgual: action.payload }
    }
    case CHANGE_PP_COR:{
      return { ...state, productPageCorIgual: action.payload }
    }
    case CHANGE_PP_CAT:{
      return { ...state, productPageCatIgual: action.payload }
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
