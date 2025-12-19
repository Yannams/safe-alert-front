import {
  GET_POMPIERS,
  GET_POMPIERS_SUCCESS,
  GET_POMPIERS_FAIL,
  DELETE_POMPIER_SUCCESS,
  ADD_POMPIER_SUCCESS,
} from "./actionTypes";

const initialState = {
  pompiers: [],
  loading: false,
  error: null,
};

const pompiers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POMPIERS:
      return { 
        ...state, 
        loading: true 
      };

    case GET_POMPIERS_SUCCESS:
      return {
        ...state,
        loading: false,
        pompiers: action.payload,
      };

    case GET_POMPIERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_POMPIER_SUCCESS:
      return {
        ...state,
        pompiers: [...state.pompiers, action.payload],
      };

    case DELETE_POMPIER_SUCCESS:
      return {
        ...state,
        pompiers: state.pompiers.filter(a => a.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default pompiers;
