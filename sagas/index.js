import { all, takeLatest, takeEvery } from 'redux-saga/effects';

/* ------------- START: Types ------------- */

import { RoleTypes } from '../reduxs/RoleRedux';

import { UserTypes } from '../reduxs/UserRedux';
import {EvaluationTypes} from "../reduxs/EvaluationRedux";

/* ------------- END: Types ------------- */

/* ------------- START: Sagas ------------- */

import { getRoles } from './RoleSaga';

import { userLogin, getUserInfo } from './UserSaga';
import {addEvaluation, deleteEvaluation, getEvaluations, updateEvaluation} from "./EvaluationSaga";

/* ------------- END: Sagas ------------- */

/* ------------- START: Connect Types To Sagas ------------- */
export default function* root() {
  yield all([

    // user
    takeLatest(UserTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.GET_USER_INFO_REQUEST, getUserInfo),

    // role
    takeLatest(RoleTypes.GET_ROLES_REQUEST, getRoles),

    // evaluation
    takeLatest(EvaluationTypes.GET_EVALUATIONS_REQUEST , getEvaluations),
    takeLatest(EvaluationTypes.ADD_EVALUATION_REQUEST, addEvaluation),
    takeLatest(EvaluationTypes.UPDATE_EVALUATION, updateEvaluation),
    takeLatest(EvaluationTypes.UPDATE_EVALUATION_REQUEST, updateEvaluation),
    takeLatest(EvaluationTypes.DELETE_EVALUATION_REQUEST,deleteEvaluation),
  ]);
}
/* ------------- END: Connect Types To Sagas ------------- */