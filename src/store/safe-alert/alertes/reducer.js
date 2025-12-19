import {
  GET_ALERTS,
  GET_ALERTS_SUCCESS,
  GET_ALERTS_FAIL,
  DELETE_ALERT_SUCCESS,
  ADD_ALERT_SUCCESS,
} from "./actionTypes";

const initialState = {
  alerts: [],
  loading: false,
  error: null,
};

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALERTS:
      return { 
        ...state, 
        loading: true 
      };

    case GET_ALERTS_SUCCESS:
      return {
        ...state,
        loading: false,
        alerts: action.payload,
      };

    case GET_ALERTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_ALERT_SUCCESS:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };

    case DELETE_ALERT_SUCCESS:
      return {
        ...state,
        alerts: state.alerts.filter(a => a.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default alerts;
