import produce from "immer"

import actionType from "../action/api_action_types"

const initialState = {
    loggedInUser: null,
    doLoginSuccess: false,
    doLoginFail: false,
    doLoginErrorMessage: null,
    doLogOutSuccess: false,
    doLogOutFail: false,
    doSignupSuccess: false,
    doSignupFail: false,
    doSignupErrorMessage: null,
    doSignupResponse: null,
    doVerifyEmailSuccess: null,
    doVerifyEmailFail: null,
    sidebarShow: true,
    meta: null,
}

const coreReducer = produce((draft = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SIDEBAR_SHOW:
            draft.sidebarShow = payload
            break
        case actionType.DO_LOGIN_SUCCESS:
            draft.doLoginSuccess = true
            draft.doLoginFail = false
            draft.doLoginErrorMessage = null
            break
        case actionType.DO_LOGIN_FAIL:
            draft.loggedInUser = null
            draft.doLoginSuccess = false
            draft.doLoginFail = true
            draft.doLoginErrorMessage = payload.data.errorMessage
            break
        case actionType.DO_RESET_LOGIN_STATE:
            draft.doLoginSuccess = payload
            draft.doLoginFail = payload
            draft.doLoginErrorMessage = null
            break
        case actionType.DO_LOGOUT_SUCCESS:
            draft.loggedInUser = null
            draft.doLogOutSuccess = true
            draft.doLogOutFail = false
            break
        case actionType.DO_RESET_LOGOUT_STATE:
            draft.doLogOutSuccess = payload
            draft.doLogOutFail = payload
            break
        case actionType.DO_SIGNUP_SUCCESS:
            draft.doSignupSuccess = true
            draft.doSignupFail = false
            draft.doSignupErrorMessage = null
            draft.doSignupResponse = payload.data
            break
        case actionType.DO_SIGNUP_FAIL:
            draft.doSignupSuccess = false
            draft.doSignupFail = true
            draft.doSignupErrorMessage = payload.data.errorMessage
            break
        case actionType.DO_RESET_SIGNUP_STATE:
            draft.doSignupSuccess = payload
            draft.doSignupFail = payload
            draft.doSignupErrorMessage = null
            // draft.doSignupResponse = null
            break
        case actionType.DO_GET_LOGGEDIN_USER_SUCCESS:
            draft.loggedInUser = payload.data;
            break
        case actionType.DO_GET_LOGGEDIN_USER_FAIL:
            draft.loggedInUser = null
            break
        case actionType.DO_VERIFY_EMAIL_SUCCESS:
            draft.doVerifyEmailSuccess = true;
            draft.doVerifyEmailFail = false;
            break
        case actionType.DO_VERIFY_EMAIL_FAIL:
            draft.doVerifyEmailSuccess = false;
            draft.doVerifyEmailFail = true;
            break
        case actionType.DO_RESET_VERIFY_EMAIL_STATE:
            draft.doVerifyEmailSuccess = payload;
            draft.doVerifyEmailFail = payload;
            break
        case actionType.DO_GET_META_SUCCESS:
            draft.meta = payload.data
            break
        case actionType.DO_GET_META_FAIL:
            draft.meta = null
            break
        default:
            return draft
    }
}, initialState)

export default coreReducer
