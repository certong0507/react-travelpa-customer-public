import actionType from "./ui_action_types"

export const updateSidebarShow = (param) => {
    return {
        type: actionType.SIDEBAR_SHOW,
        payload: param,
    }
}

export const setInsuranceDetails = (param) => {
    return {
        type: actionType.SET_INSURANCE_DETAILS,
        payload: param,
    }
}

export const setSelectedInsurance = (param) => {
    return {
        type: actionType.SET_SELECTED_INSURANCE,
        payload: param,
    }
}

export const setInsuranceRateDetails = (param) => {
    return {
        type: actionType.SET_INSURANCE_RATE_DETAILS,
        payload: param,
    }
}

export const setInsurance = (param) => {
    return {
        type: actionType.SET_INSURANCES,
        payload: param,
    }
}

export const setWatchInsuranceCoverage = (param) => {
    return {
        type: actionType.SET_WATCH_INSURANCE_COVERAGE,
        payload: param,
    }
}

export const setIsSpouse = (param) => {
    return {
        type: actionType.SET_IS_SPOUSE,
        payload: param,
    }
}

export const setErrorCodeConfirmData = (param) => {
    return {
        type: actionType.SET_ERROR_CODE_CONFIRM_DATA,
        payload: param,
    }
}

export const setCodeConfirmSuccess = (param) => {
    return {
        type: actionType.SET_CODE_CONFIRM_SUCCESS,
        payload: param,
    }
}

export const setErrorNewCodeConfirmData = (param) => {
    return {
        type: actionType.SET_ERROR_NEW_CODE_CONFIRM_DATA,
        payload: param,
    }
}

export const setNewCodeConfirmSuccess = (param) => {
    return {
        type: actionType.SET_NEW_CODE_CONFIRM_SUCCESS,
        payload: param,
    }
}

export const setNewCodeSentSuccess = (param) => {
    return {
        type: actionType.SET_NEW_CODE_SENT_SUCCESS,
        payload: param,
    }
}

export const setCodeSentSuccess = (param) => {
    return {
        type: actionType.SET_CODE_SENT_SUCCESS,
        payload: param,
    }
}

export const setErrorCodeSentData = (param) => {
    return {
        type: actionType.SET_ERROR_CODE_SENT_DATA,
        payload: param,
    }
}

export const setResendVerificationEmail = (param) => {
    return {
        type: actionType.SET_RESEND_EMAIL_VERIFICATION,
        payload: param,
    }
}