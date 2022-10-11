import produce from "immer"

import actionType from "../action/api_action_types"
import UIActionType from "../action/ui_action_types"

const initialState = {
    success: false,
    fail: false,
    errorDetailData: null,
    codeSentSuccess: false,
    codeConfirmSuccess: false,
    newCodeSentSuccess: false,
    newCodeConfirmSuccess: false,
    errorCodeConfirmData: null,
    errorCodeSentData: null,
    errorNewCodeSentData: null,
    errorNewCodeConfirmData: null,
    resendVerificationEmailSuccess: false,
    resendVerificationEmailFail: false,
    errorresendVerificationEmail: null
}

const userProfileReducer = produce((draft = initialState, { type, payload }) => {
    switch (type) {
        case actionType.DO_UPDATE_USER_PROFILE_SUCCESS:
            draft.success = true
            draft.fail = false
            break
        case actionType.DO_UPDATE_USER_PROFILE_FAIL:
            draft.success = false
            draft.fail = true
            draft.errorDetailData = payload.data
            break
        case actionType.DO_RESET_USER_PROFILE_STATE:
            draft.success = false
            draft.fail = false
            draft.errorDetailData = null
            break
        case actionType.DO_CHANGE_PASSWORD_SUCCESS:
            draft.success = true
            draft.fail = false
            break
        case actionType.DO_CHANGE_PASSWORD_FAIL:
            draft.success = false
            draft.fail = true
            draft.errorDetailData = payload.data
            break
        case actionType.DO_RESET_CHANGE_PASSWORD_STATE:
            draft.success = false
            draft.fail = false
            draft.errorDetailData = null
            break
        case actionType.DO_SEND_CURRENT_EMAIL_VERIFICATION_CODE_SUCCESS:
            draft.codeSentSuccess = true
            draft.errorCodeSentData = null
            break
        case actionType.DO_SEND_CURRENT_EMAIL_VERIFICATION_CODE_FAIL:
            draft.codeSentSuccess = false
            draft.errorCodeSentData = payload.data.errorMessage
            break
        case actionType.DO_CONFIRM_CURRENT_EMAIL_VERIFICATION_CODE_SUCCESS:
            draft.codeConfirmSuccess = true
            draft.codeSentSuccess = false
            draft.errorCodeConfirmData = null
            break
        case actionType.DO_CONFIRM_CURRENT_EMAIL_VERIFICATION_CODE_FAIL:
            draft.codeConfirmSuccess = false
            draft.codeSentSuccess = false
            draft.errorCodeConfirmData = payload.data.errorMessage
            break
        case actionType.DO_SEND_NEW_EMAIL_VERIFICATION_CODE_SUCCESS:
            draft.newCodeSentSuccess = true
            draft.errorNewCodeSentData = null
            break
        case actionType.DO_SEND_NEW_EMAIL_VERIFICATION_CODE_FAIL:
            draft.newCodeSentSuccess = false
            draft.errorNewCodeSentData = payload.data.errorMessage
            break
        case UIActionType.SET_ERROR_CODE_CONFIRM_DATA:
            draft.errorCodeConfirmData = payload
            break
        case UIActionType.SET_CODE_CONFIRM_SUCCESS:
            draft.codeConfirmSuccess = payload
            break
        case UIActionType.SET_ERROR_NEW_CODE_CONFIRM_DATA:
            draft.errorNewCodeSentData = payload
            break
        case actionType.DO_CONFIRM_NEW_EMAIL_VERIFICATION_CODE_SUCCESS:
            draft.newCodeConfirmSuccess = true
            draft.errorNewCodeConfirmData = null
            break
        case actionType.DO_CONFIRM_NEW_EMAIL_VERIFICATION_CODE_FAIL:
            draft.newCodeConfirmSuccess = false
            draft.errorNewCodeConfirmData = payload.data.errorMessage
            break
        case UIActionType.SET_NEW_CODE_CONFIRM_SUCCESS:
            draft.newCodeConfirmSuccess = payload
            break
        case UIActionType.SET_NEW_CODE_SENT_SUCCESS:
            draft.newCodeSentSuccess = payload
            break
        case UIActionType.SET_CODE_SENT_SUCCESS:
            draft.codeSentSuccess = payload
            break
        case UIActionType.SET_ERROR_CODE_SENT_DATA:
            draft.errorCodeSentData = payload
            break
        case actionType.DO_RESEND_VERIFICATION_EMAIL_SUCCESS:
            draft.resendVerificationEmailSuccess = true
            draft.resendVerificationEmailFail = false
            draft.errorresendVerificationEmail = null
            break
        case actionType.DO_RESEND_VERIFICATION_EMAIL_FAIL:
            draft.resendVerificationEmailSuccess = false
            draft.resendVerificationEmailFail = true
            draft.errorresendVerificationEmail = payload.data.errorMessage
            break
        case UIActionType.SET_RESEND_EMAIL_VERIFICATION:
            draft.resendVerificationEmailSuccess = payload
            draft.resendVerificationEmailFail = payload
            draft.errorresendVerificationEmail = null
            break
        default:
            return draft
    }
}, initialState)

export default userProfileReducer
