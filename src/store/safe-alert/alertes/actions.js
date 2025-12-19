import {
  GET_ALERTS,
  GET_ALERTS_SUCCESS,
  GET_ALERTS_FAIL,
  DELETE_ALERT,
  DELETE_ALERT_SUCCESS,
  DELETE_ALERT_FAIL,
  ADD_ALERT,
  ADD_ALERT_SUCCESS,
  ADD_ALERT_FAIL,
} from "./actionTypes";

export const getAlerts = () => ({
  type: GET_ALERTS,
});

export const getAlertsSuccess = alerts => ({
  type: GET_ALERTS_SUCCESS,
  payload: alerts,
});

export const getAlertsFail = error => ({
  type: GET_ALERTS_FAIL,
  payload: error,
});


export const deleteAlert = alert => ({
  type: DELETE_ALERT,
  payload: alert,
});

export const deleteAlertSuccess = alert => ({
  type: DELETE_ALERT_SUCCESS,
  payload: alert,
});

export const deleteAlertFail = error => ({
  type: DELETE_ALERT_FAIL,
  payload: error,
});


export const addAlert = alert => ({
  type: ADD_ALERT,
  payload: alert,
});

export const addAlertSuccess = alert => ({
  type: ADD_ALERT_SUCCESS,
  payload: alert,
});

export const addAlertFail = error => ({
  type: ADD_ALERT_FAIL,
  payload: error,
});
