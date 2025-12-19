import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_POMPIERS,
} from "./actionTypes";

import {
  getPompiersSuccess,
  getPompiersFail
} from "./actions";

import { Pompiers } from "common/data/pompiers";


function* fetchPompiers() {
  try {
    // const response = yield call(fetchPompiersApi);
    yield put(getPompiersSuccess(Pompiers)); // <-- utilise tes fausses données
  } catch (error) {
    yield put(getPompiersFail(error));
  }
}


function* pompiersSaga() {
  yield takeEvery(GET_POMPIERS, fetchPompiers);
}

export default pompiersSaga;
