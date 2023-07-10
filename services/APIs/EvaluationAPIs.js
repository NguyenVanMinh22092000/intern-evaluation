import { doRequest } from '../../utils/CoreUtils';
import { errorHandler } from '../../utils/StringUtils';

import {contact_domain} from '../../constants/Domain';

export default class EvaluationAPIs {

    async getEvaluations({ page, size , body} = {}) {
        try {
            let url = `${contact_domain}evaluation_criteria/search?page=${page}&size=${size}`;
            return await doRequest('post', url, {body });
        } catch (error) {
            throw errorHandler(error);
        };
    };
    async addEvaluation({ payload } = {}) {
        try {
            let url = `${contact_domain}evaluation_criteria/add`;
            return await doRequest('post', url, { body: payload });
        } catch (error) {
            throw errorHandler(error);
        };
    };
    async deleteEvaluation(id = '') {
        try {
            let url = `${contact_domain}evaluation_criteria/delete/${id}`;
            return await doRequest('post', url);
        } catch (error) {
            throw errorHandler(error);
        };
    };
    async updateEvaluation({ payload } = {}) {
        console.log(' updateEvaluation({ payload }', payload)
        const {evaluationId, data} = payload;
        try {
            let url = `${contact_domain}evaluation_criteria/update/${evaluationId}`;
            return await doRequest('put', url, { body: data });
        } catch (error) {
            throw errorHandler(error);
        }
    }

}