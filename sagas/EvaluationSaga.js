import { call, put, delay } from 'redux-saga/effects';
import EvaluationActions from '../reduxs/EvaluationRedux';
import { getTimestamp, getDelayTime } from '../utils/DateUtils';
import { validateResp, getErrorMsg } from '../utils/StringUtils';

import EvaluationAPIs from "../services/APIs/EvaluationAPIs";

const api = new EvaluationAPIs();

export function* getEvaluations(action) {
    const { classify, params } = action;
    const startReqAt = getTimestamp();
    try {
        let resp = yield call(api.getEvaluations, params);
        yield delay(getDelayTime(startReqAt, 'ms', 500));
        if (validateResp(resp)) {
            yield put(EvaluationActions.getEvaluationsSuccess(classify, resp.payload));
        } else throw resp;
    } catch (error) {
        yield put(EvaluationActions.evaluationCommonFailure(classify, getErrorMsg(error)));
    };
};

export function* addEvaluation(action) {
    const { classify, payload } = action;
    try {
        let resp = yield call(api.addEvaluation, { payload });
        if (validateResp(resp)) {
            yield put(EvaluationActions.addEvaluation(classify, resp.payload));
        } else {
            throw resp;
        }
    } catch (error) {
        yield put(EvaluationActions.evaluationCommonFailure(classify, getErrorMsg(error)));
    }
}

export function* updateEvaluation(action) {
    console.log('function* updateEvaluation', action)
    const { classify, evaluationId, data } = action;
    try {
        let resp = yield call(api.updateEvaluation, { evaluationId, data });
        if (validateResp(resp)) {
            // Dispatch success action
        } else {
            throw resp;
        }
    } catch (error) {
        // Dispatch failure action
    };
};
export function* deleteEvaluation(action) {
    const { classify, params,payload } = action;
        console.log('export function* deleteEvaluation(action)', payload)
    try {
        const resp = yield call(api.deleteEvaluation, payload.id);
        if (validateResp(resp)) {
            yield put(EvaluationActions.deleteEvaluation(classify, payload.id));
        } else {
            throw resp;
        }
    } catch (error) {
        yield put(EvaluationActions.evaluationCommonFailure(classify, getErrorMsg(error)));
    }
}

