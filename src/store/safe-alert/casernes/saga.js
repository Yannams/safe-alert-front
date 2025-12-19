import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CASERNES,
} from "./actionTypes";

import {
  getCasernesSuccess,
  getCasernesFail
} from "./actions";

import { Casernes } from "common/data/casernes";


function* fetchCasernes() {
  try {
    // const response = yield call(fetchCasernesApi);
    yield put(getCasernesSuccess(Casernes)); // <-- utilise tes fausses données
  } catch (error) {
    yield put(getCasernesFail(error));
  }
}


function* casernesSaga() {
  yield takeEvery(GET_CASERNES, fetchCasernes);
}

export default casernesSaga;
