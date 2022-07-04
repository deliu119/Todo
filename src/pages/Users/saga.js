import {
    LOAD_ALL_USERS,
} from './constants';
import {call, put, takeLatest } from 'redux-saga/effects';
import {
    loadAllUsersSuccess,
    loadAllUserError,
} from './actions';
import {getUsers} from '../../services/users.service';

export function* loadAllUsers(action) {
    try {
        const response = yield call(getUsers, action.payload);
        yield put(loadAllUsersSuccess(response.data));
    } catch (e) {
        yield put(loadAllUserError(e));
    }
}

export default function* usersSaga(){
    yield takeLatest(LOAD_ALL_USERS, loadAllUsers);
}