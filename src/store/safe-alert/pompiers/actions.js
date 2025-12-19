import {
  GET_POMPIERS,
  GET_POMPIERS_SUCCESS,
  GET_POMPIERS_FAIL,
  DELETE_POMPIER,
  DELETE_POMPIER_SUCCESS,
  DELETE_POMPIER_FAIL,
  ADD_POMPIER,
  ADD_POMPIER_SUCCESS,
  ADD_POMPIER_FAIL,
  UPDATE_POMPIER,
  UPDATE_POMPIER_SUCCESS,
  UPDATE_POMPIER_FAIL,
} from "./actionTypes";

export const getPompiers = () => ({
  type: GET_POMPIERS,
});

export const getPompiersSuccess = pompiers => ({
  type: GET_POMPIERS_SUCCESS,
  payload: pompiers,
});

export const getPompiersFail = error => ({
  type: GET_POMPIERS_FAIL,
  payload: error,
});


export const deletePompier = pompier => ({
  type: DELETE_POMPIER,
  payload: pompier,
});

export const deletePompierSuccess = pompier => ({
  type: DELETE_POMPIER_SUCCESS,
  payload: pompier,
});

export const deletePompierFail = error => ({
  type: DELETE_POMPIER_FAIL,
  payload: error,
});


export const addPompier = pompier => ({
  type: ADD_POMPIER,
  payload: pompier,
});

export const addPompierSuccess = pompier => ({
  type: ADD_POMPIER_SUCCESS,
  payload: pompier,
});

export const addPompierFail = error => ({
  type: ADD_POMPIER_FAIL,
  payload: error,
});

export const updatePompier = user => ({
  type: UPDATE_POMPIER,
  payload: user,
})

export const updatePompierSuccess = user => ({
  type: UPDATE_POMPIER_SUCCESS,
  payload: user,
})

export const updatePompierFail = error => ({
  type: UPDATE_POMPIER_FAIL,
  payload: error,
})