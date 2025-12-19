import {
  GET_CASERNES,
  GET_CASERNES_SUCCESS,
  GET_CASERNES_FAIL,
  DELETE_CASERNE_SUCCESS,
  ADD_CASERNE_SUCCESS,
} from "./actionTypes";

const initialState = {
  casernes: [],
  loading: false,
  error: null,
};

const casernes = (state = initialState, action) => {
  switch (action.type) {
    case GET_CASERNES:
      return { 
        ...state, 
        loading: true 
      };

    case GET_CASERNES_SUCCESS:
      return {
        ...state,
        loading: false,
        casernes: action.payload,
      };

    case GET_CASERNES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_CASERNE_SUCCESS:
      return {
        ...state,
        casernes: [...state.casernes, action.payload],
      };

    case DELETE_CASERNE_SUCCESS:
      return {
        ...state,
        casernes: state.casernes.filter(a => a.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default casernes;
