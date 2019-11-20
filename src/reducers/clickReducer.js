import {CLICK_UPDATE_VALUE} from '../actions/actionTypes'

const initialState = {
    newValue: 'Teste Redux'
  };
  export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UPDATE_VALUE:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };