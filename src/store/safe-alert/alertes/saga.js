import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_ALERTS,
  ADD_ALERT,
} from "./actionTypes";

import {
  getAlertsSuccess,
  getAlertsFail,
  addAlertSuccess,
  addAlertFail
} from "./actions";

import { getAlerts, onAddNewAlert } from "helpers/fakebackend_helper";
import { toast } from "react-toastify";



function* fetchAlerts() {
  try {
    const response = yield call(getAlerts);
    yield put(getAlertsSuccess(response)); 
  } catch (error) {
    yield put(getAlertsFail(error));
  }
}




function* alertsSaga() {
  yield takeEvery(GET_ALERTS, fetchAlerts);
}

export default alertsSaga;
