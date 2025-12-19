import {
  GET_CASERNES,
  GET_CASERNES_SUCCESS,
  GET_CASERNES_FAIL,
  DELETE_CASERNE,
  DELETE_CASERNE_SUCCESS,
  DELETE_CASERNE_FAIL,
  ADD_CASERNE,
  ADD_CASERNE_SUCCESS,
  ADD_CASERNE_FAIL,
  UPDATE_CASERNE,
  UPDATE_CASERNE_SUCCESS,
  UPDATE_CASERNE_FAIL,
} from "./actionTypes";

export const getCasernes = () => ({
  type: GET_CASERNES,
});

export const getCasernesSuccess = casernes => ({
  type: GET_CASERNES_SUCCESS,
  payload: casernes,
});

export const getCasernesFail = error => ({
  type: GET_CASERNES_FAIL,
  payload: error,
});


export const deleteCaserne = caserne => ({
  type: DELETE_CASERNE,
  payload: caserne,
});

export const deleteCaserneSuccess = caserne => ({
  type: DELETE_CASERNE_SUCCESS,
  payload: caserne,
});

export const deleteCaserneFail = error => ({
  type: DELETE_CASERNE_FAIL,
  payload: error,
});


export const addCaserne = caserne => ({
  type: ADD_CASERNE,
  payload: caserne,
});

export const addCaserneSuccess = caserne => ({
  type: ADD_CASERNE_SUCCESS,
  payload: caserne,
});

export const addCaserneFail = error => ({
  type: ADD_CASERNE_FAIL,
  payload: error,
});

export const updateCaserne = user => ({
  type: UPDATE_CASERNE,
  payload: user,
})

export const updateCaserneSuccess = user => ({
  type: UPDATE_CASERNE_SUCCESS,
  payload: user,
})

export const updateCaserneFail = error => ({
  type: UPDATE_CASERNE_FAIL,
  payload: error,
})