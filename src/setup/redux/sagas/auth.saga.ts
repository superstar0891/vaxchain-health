// import { login } from 'setup/request/auth.request';
// import { call, put, takeLatest } from 'redux-saga/effects';
import { takeLatest } from '@redux-saga/core/effects';
import { LOGIN, REGISTER, USER_REQUESTED } from '../types/auth';
import { Action } from "@reduxjs/toolkit";
import { cognitoUserModel } from 'app/models/UserModel';

export interface ActionWithPayload<T> extends Action {
    payload?: T;
};

export interface IAuthState {
    user?: cognitoUserModel;
    accessToken?: string;
};

function* loginSaga(action: ActionWithPayload<IAuthState>) {
    // try {
    //     const { accessToken, user } = yield call(login, action.payload);
    //     put({
    //         type: LOGIN,
    //         payload: { accessToken, user },
    //     });
    // } catch (error) {
    //     put({
    //         type: LOGIN_FAILED,
    //         payload: error,
    //     });
    // }
}

function* registerSaga() {
//   try {
//     const { token, user } = yield call(register, action.payload);
//     put({
//       type: AUTH_SUCCESS,
//       payload: { token, user },
//     });
//   } catch (error) {
//     put({
//       type: AUTH_FAILED,
//       payload: error,
//     });
//   }
}

function* userRequested() {

}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(USER_REQUESTED, userRequested);
}