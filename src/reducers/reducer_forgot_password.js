import produce from 'immer';

import actionType from '../action/api_action_types';

const initialState = {
    success: false,
    fail: false,
    errorDetailData: null,
};

const forgotPasswordReducer = produce((draft = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SEND_FORGOT_PASSWORD_SUCCESS:
            draft.success = true;
            draft.fail = false;
            break;
        case actionType.SEND_FORGOT_PASSWORD_FAIL:
            draft.success = false;
            draft.fail = true;
            draft.errorDetailData = payload.data;
            break;
        case actionType.SEND_RESET_PASSWORD_SUCCESS:
            draft.success = true;
            draft.fail = false;
            break;
        case actionType.SEND_RESET_PASSWORD_FAIL:
            draft.success = false;
            draft.fail = true;
            draft.errorDetailData = payload.data;
            break;
        case actionType.RESET_FORGOT_PASSWORD_STATE:
            draft.success = false;
            draft.fail = false;
            draft.errorDetailData = null;
            break;
        default:
            return draft;
    }
}, initialState);

export default forgotPasswordReducer;
