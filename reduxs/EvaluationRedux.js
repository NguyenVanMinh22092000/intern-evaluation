import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- START: Types and Action Creators ------------- */
const { Types, Creators } = createActions({

    evaluationCommonSuccess: ['classify', 'payload'],
    evaluationCommonFailure: ['classify', 'error'],

    getEvaluationsRequest: ['classify', 'params'], // classify: evaluation
    getEvaluationsSuccess: ['classify', 'payload'],

    addEvaluationRequest:  ['classify', 'payload'],
    addEvaluation:  ['classify', 'payload'],

    updateEvaluationRequest:  ['classify', 'payload'],
    updateEvaluation:  ['classify', 'payload'],

    deleteEvaluation: ['classify', 'payload'],
    deleteEvaluationRequest: ['classify', 'payload'],

});
export const EvaluationTypes = Types;
export default Creators;
/* ------------- END: Types and Action Creators ------------- */

/* ------------- START: Initial State ------------- */
export const INITIAL_STATE = Immutable({
    error: {},
    fetching: {},
    content: [],
});
/* ------------- END: Initial State ------------- */

/* ------------- START: common ------------- */
export const evaluationCommonSuccess = (state, { classify, payload }) => {
    return state.merge({
        fetching: { ...state.fetching, [classify]: false },
        content: { ...state.content, [classify]: payload },
    });
};

export const evaluationCommonFailure = (state, { classify, error }) => {
    return state.merge({
        fetching: { ...state.fetching, [classify]: false },
        error: { ...state.error, [classify]: error },
    });
};
/* ------------- END: common ------------- */

/* ------------- START: getEvaluations ------------- */
export const getEvaluationsRequest = (state, { classify }) => {
    return state.merge({
        fetching: { ...state.fetching, [classify]: true },
        error: { ...state.error, [classify]: null },
    });
};

export const getEvaluationsSuccess = (state, { classify, payload }) => {
    return state.merge({
        fetching: { ...state.fetching, [classify]: false },
        content: { ...state.content, [classify]: payload },
    });
};
/* ------------- END: getEvaluations ------------- */

/* ------------- START: addEvaluationRequest ------------- */
export const addEvaluationRequest = (state, {classify}) => {
    return state.merge({
        fetching: { ...state.fetching, [classify]: true },
        content: { ...state.content, [classify]: null },
    });
};
/* ------------- END: getEvaluations ------------- */

/* ------------- START: addEvaluation ------------- */
export const addEvaluation = (state, { classify, payload }) => {
    const evaluations = state.content[classify] || [];
    const updatedEvaluations = evaluations.concat(payload);

    return state.merge({
        content: { ...state.content, [classify]: updatedEvaluations },
    });
};
/* ------------- END: addEvaluation ------------- */

/* ------------- START: updateEvaluationRequest ------------- */
export const updateEvaluationRequest = (state, {classify}) => {
    return state.merge({
        fetching: { ...state.fetching, [classify]: true },
        content: { ...state.content, [classify]: null },
    });
}
/* ------------- START: updateEvaluationRequest ------------- */

/* ------------- START: updateEvaluation ------------- */
export const updateEvaluation = (state, { classify, payload }) => {
    const evaluations = state.content[classify] || [];
    const updatedEvaluations = evaluations.map(evaluation => {
        if (evaluation._id === payload.id) {
            return { ...evaluation, ...payload };
        }
        return evaluation;
    });

    return state.merge({
        content: { ...state.content, [classify]: updatedEvaluations },
    });
};
/* ------------- END: updateEvaluation ------------- */

export const deleteEvaluationRequest = (state, {classify}) =>{
    console.log('deleteEvaluationRequest')
    return state.merge({
        fetching: { ...state.fetching, [classify]: true },
        error: { ...state.error, [classify]: null },
    });
};
/* ------------- START: deleteEvaluation ------------- */
export const deleteEvaluation = (state, { classify, params }) => {
    const evaluations = state.content[classify] || [];
    let updatedEvaluations = [];
        updatedEvaluations = evaluations.filter(evaluation => evaluation._id !== params.id);
    return state.merge({
        content: {
            ...state.content,
            [classify]: updatedEvaluations,
        },
    });
};

/* ------------- END: deleteEvaluation ------------- */

/* ------------- START: Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {

    [Types.EVALUATION_COMMON_SUCCESS]: evaluationCommonSuccess,
    [Types.EVALUATION_COMMON_FAILURE]: evaluationCommonFailure,

    [Types.GET_EVALUATIONS_REQUEST]: getEvaluationsRequest,
    [Types.GET_EVALUATIONS_SUCCESS]: getEvaluationsSuccess,

    [Types.ADD_EVALUATION_REQUEST]: addEvaluationRequest,
    [Types.ADD_EVALUATION]: addEvaluation,

    [Types.UPDATE_EVALUATION_REQUEST]: updateEvaluationRequest,
    [Types.UPDATE_EVALUATION]: updateEvaluation,

    [Types.DELETE_EVALUATION_REQUEST]: deleteEvaluationRequest,
    [Types.DELETE_EVALUATION]: deleteEvaluation,

});
/* ------------- END: Hookup Reducers To Types ------------- */
