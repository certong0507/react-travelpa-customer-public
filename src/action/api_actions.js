import axios from "axios"
import actionType from "./api_action_types"

import { GENERAL_SETTING } from "src/utils/enum"

export const doLogin = (param) => {
    const url = `/api/customer/login`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_LOGIN_SUCCESS]", response);
                dispatch(action(actionType.DO_LOGIN_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_LOGIN_FAIL]", error.response);
                dispatch(action(actionType.DO_LOGIN_FAIL, error.response))
            })
    }
}

export const doResetLoginState = () => {
    return {
        type: actionType.DO_RESET_LOGIN_STATE,
        payload: false,
    }
}

export const doLogout = (param) => {
    const url = `/api/customer/logout`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_LOGOUT_SUCCESS]", response);
                dispatch(action(actionType.DO_LOGOUT_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_LOGOUT_FAIL]", error.response);
                dispatch(action(actionType.DO_LOGOUT_FAIL, error.response))
            })
    }
}

export const doResetLogoutState = () => {
    return {
        type: actionType.DO_RESET_LOGOUT_STATE,
        payload: false,
    }
}

export const doSignup = (param) => {
    const url = `/api/customer/register`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_SIGNUP_SUCCESS]", response);
                dispatch(action(actionType.DO_SIGNUP_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_SIGNUP_FAIL]", error.response);
                dispatch(action(actionType.DO_SIGNUP_FAIL, error.response))
            })
    }
}

export const doResetSignUpState = () => {
    return {
        type: actionType.DO_RESET_SIGNUP_STATE,
        payload: false,
    }
}

export const doGetLoggedInUser = () => {
    const url = `/api/customer/me`
    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                dispatch(action(actionType.DO_GET_LOGGEDIN_USER_SUCCESS, response))
            })
            .catch((error) => {
                dispatch(action(actionType.DO_GET_LOGGEDIN_USER_FAIL, error.response))
            })
    }
}

export const doVerifyEmail = (token) => {
    const url = `/api/customer/register/email-verify/` + token
    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                dispatch(action(actionType.DO_VERIFY_EMAIL_SUCCESS, response))
            })
            .catch((error) => {
                dispatch(action(actionType.DO_VERIFY_EMAIL_FAIL, error.response))
            })
    }
}

export const doResetVerifyEmailState = () => {
    return {
        type: actionType.DO_RESET_VERIFY_EMAIL_STATE,
        payload: false,
    }
}

export const doGetInsurance = (insurance) => {
    let url = "/api/customer/travel-insurance"

    if (insurance) {
        url = `/api/customer/travel-insurance/${insurance}`
    }

    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                // console.log("[ ---> DO_GET_INSURANCES_SUCCESS]", response)
                dispatch(action(actionType.DO_GET_INSURANCES_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_GET_INSURANCES_FAIL]", error.response)
                dispatch(action(actionType.DO_GET_INSURANCES_FAIL, error.response))
            })
    }
}

export const doGetMeta = () => {
    const url = `/api/commons/meta`
    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                // console.log("[ ---> DO_GET_META_SUCCESS]", response)
                dispatch(action(actionType.DO_GET_META_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_GET_META_FAIL]", error.response)
                dispatch(action(actionType.DO_GET_META_FAIL, error.response))
            })
    }
}

export const doGetInsuranceRate = (param) => {
    const url = `/api/customer/travel-insurance/calculate-travel-insurance-rate`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_GET_INSURANCE_RATE_SUCCESS]", response)
                dispatch(action(actionType.DO_GET_INSURANCE_RATE_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_GET_INSURANCE_RATE_FAIL]", error.response)
                dispatch(action(actionType.DO_GET_INSURANCE_RATE_FAIL, error.response))
            })
    }
}

export const doGetSalesUserDetail = (token) => {
    const url = `/api/customer/travel-insurance/sales-detail/` + token
    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                // console.log("[ ---> DO_GET_SALES_USER_DETAIL_SUCCESS]", response)
                dispatch(action(actionType.DO_GET_SALES_USER_DETAIL_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_GET_SALES_USER_DETAIL_FAIL]", error.response)
                dispatch(action(actionType.DO_GET_SALES_USER_DETAIL_FAIL, error.response))
            })
    }
}

export const doResetSalesState = () => {
    return {
        type: actionType.DO_RESET_SALES_STATE,
        payload: false,
    }
}

export const doStoreCustomerApplication = (param) => {
    const url = `/api/customer/travel-insurance/store-customer-application`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_STORE_CUSTOMER_APPLICATION_SUCCESS]", response)
                dispatch(action(actionType.DO_STORE_CUSTOMER_APPLICATION_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_STORE_CUSTOMER_APPLICATION_FAIL]", error.response)
                dispatch(action(actionType.DO_STORE_CUSTOMER_APPLICATION_FAIL, error.response))
            })
    }
}

export const doUpdateCustomerApplication = (param) => {
    const url = `/api/customer/travel-insurance/store-customer-application`
    return (dispatch) => {
        axios
            .put(url, param)
            .then((response) => {
                // console.log("[ ---> DO_UPDATE_CUSTOMER_APPLICATION_SUCCESS]", response)
                dispatch(action(actionType.DO_UPDATE_CUSTOMER_APPLICATION_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_UPDATE_CUSTOMER_APPLICATION_FAIL]", error.response)
                dispatch(action(actionType.DO_UPDATE_CUSTOMER_APPLICATION_FAIL, error.response))
            })
    }
}

/**
 * Forgot Password
 */
export const doForgotPassword = (param) => {
    const url = `/api/customer/forgot-password`

    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                dispatch(action(actionType.SEND_FORGOT_PASSWORD_SUCCESS, response))
            })
            .catch((error) => {
                dispatch(action(actionType.SEND_FORGOT_PASSWORD_FAIL, error.response))
            })
    }
}

export const doResetPassword = (param) => {
    const url = `/api/customer/update-reset-password`

    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                dispatch(action(actionType.SEND_RESET_PASSWORD_SUCCESS, response))
            })
            .catch((error) => {
                dispatch(action(actionType.SEND_RESET_PASSWORD_FAIL, error.response))
            })
    }
}

export function resetForgotPasswordState() {
    return {
        type: actionType.RESET_FORGOT_PASSWORD_STATE,
        payload: false,
    }
}

/**
 * User Profile
 */

export const doUpdateUserProfile = (param) => {
    const url = `/api/customer/me`
    return (dispatch) => {
        axios
            .put(url, param)
            .then((response) => {
                dispatch(action(actionType.DO_UPDATE_USER_PROFILE_SUCCESS, response))
            })
            .catch((error) => {
                dispatch(action(actionType.DO_UPDATE_USER_PROFILE_FAIL, error.response))
            })
    }
}

export const doResetUserProfile = () => {
    return {
        type: actionType.DO_RESET_USER_PROFILE_STATE,
        payload: false,
    }
}

export const doChangePassword = (param) => {
    const url = `/api/customer/password`
    return (dispatch) => {
        axios
            .put(url, param)
            .then((response) => {
                dispatch(action(actionType.DO_CHANGE_PASSWORD_SUCCESS, response))
            })
            .catch((error) => {
                dispatch(action(actionType.DO_CHANGE_PASSWORD_FAIL, error.response))
            })
    }
}

export const doSendCurrentEmailVerificationCode = (param) => {
    const url = `/api/customer/change-email/send-verify-code`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_SEND_CURRENT_EMAIL_VERIFICATION_CODE_SUCCESS]", response);
                dispatch(
                    action(actionType.DO_SEND_CURRENT_EMAIL_VERIFICATION_CODE_SUCCESS, response),
                )
            })
            .catch((error) => {
                // console.log("[ ---> DO_SEND_CURRENT_EMAIL_VERIFICATION_CODE_FAIL]", error.response);
                dispatch(
                    action(actionType.DO_SEND_CURRENT_EMAIL_VERIFICATION_CODE_FAIL, error.response),
                )
            })
    }
}

export const doConfirmCurrentEmailVerificationCode = (param) => {
    const url = `/api/customer/change-email/confirm-verify-code`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_CONFIRM_CURRENT_EMAIL_VERIFICATION_CODE_SUCCESS]", response);
                dispatch(
                    action(actionType.DO_CONFIRM_CURRENT_EMAIL_VERIFICATION_CODE_SUCCESS, response),
                )
            })
            .catch((error) => {
                // console.log("[ ---> DO_CONFIRM_CURRENT_EMAIL_VERIFICATION_CODE_FAIL]", error.response);
                dispatch(
                    action(
                        actionType.DO_CONFIRM_CURRENT_EMAIL_VERIFICATION_CODE_FAIL,
                        error.response,
                    ),
                )
            })
    }
}

export const doSendNewEmailVerificationCode = (param) => {
    const url = `/api/customer/change-email/send-verify-code-new-email`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_SEND_NEW_EMAIL_VERIFICATION_CODE_SUCCESS]", response);
                dispatch(action(actionType.DO_SEND_NEW_EMAIL_VERIFICATION_CODE_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_SEND_NEW_EMAIL_VERIFICATION_CODE_FAIL]", error.response);
                dispatch(
                    action(actionType.DO_SEND_NEW_EMAIL_VERIFICATION_CODE_FAIL, error.response),
                )
            })
    }
}

export const doConfirmNewEmailVerificationCode = (param) => {
    const url = `/api/customer/change-email/confirm-verify-code-new-email`
    return (dispatch) => {
        axios
            .post(url, param)
            .then((response) => {
                // console.log("[ ---> DO_CONFIRM_NEW_EMAIL_VERIFICATION_CODE_SUCCESS]", response);
                dispatch(
                    action(actionType.DO_CONFIRM_NEW_EMAIL_VERIFICATION_CODE_SUCCESS, response),
                )
            })
            .catch((error) => {
                // console.log("[ ---> DO_CONFIRM_NEW_EMAIL_VERIFICATION_CODE_FAIL]", error.response);
                dispatch(
                    action(actionType.DO_CONFIRM_NEW_EMAIL_VERIFICATION_CODE_FAIL, error.response),
                )
            })
    }
}

/**
 * My Purchase
 */
export const doGetMyPurchaseList = (param) => {
    const url = `/api/customer/customer_purchase?page=${param}&size=${GENERAL_SETTING.PAGE_LIMIT}`
    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                // console.log("[ ---> DO_GET_MY_PURCHASE_LIST_SUCCESS]", response)
                dispatch(action(actionType.DO_GET_MY_PURCHASE_LIST_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_GET_MY_PURCHASE_LIST_FAIL]", error.response);
                dispatch(action(actionType.DO_GET_MY_PURCHASE_LIST_FAIL, error.response))
            })
    }
}

export const doGetMyPurchaseDetails = (param) => {
    const url = `/api/customer/customer_purchase/${param}`
    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                // console.log("[ ---> DO_GET_MY_PURCHASE_DETAILS_SUCCESS]", response)
                dispatch(action(actionType.DO_GET_MY_PURCHASE_DETAILS_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_GET_MY_PURCHASE_DETAILS_FAIL]", error.response);
                dispatch(action(actionType.DO_GET_MY_PURCHASE_DETAILS_FAIL, error.response))
            })
    }
}

export const doDownloadQuotation = (param) => {
    const url = `/api/customer/customer_purchase/quotation/${param}`
    return (dispatch) => {
        axios
            .get(url)
            .then((response) => {
                // console.log("[ ---> DO_DOWNLOAD_QUOTATION_SUCCESS]", response)
                dispatch(action(actionType.DO_DOWNLOAD_QUOTATION_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_DOWNLOAD_QUOTATION_FAIL]", error.response);
                dispatch(action(actionType.DO_DOWNLOAD_QUOTATION_FAIL, error.response))
            })
    }
}


export const doResendVerificationEmail = () => {
    const url = `/api/customer/resend-verification-email`
    return (dispatch) => {
        axios
            .post(url)
            .then((response) => {
                // console.log("[ ---> DO_RESEND_VERIFICATION_EMAIL_SUCCESS]", response);
                dispatch(action(actionType.DO_RESEND_VERIFICATION_EMAIL_SUCCESS, response))
            })
            .catch((error) => {
                // console.log("[ ---> DO_RESEND_VERIFICATION_EMAIL_FAIL]", error.response);
                dispatch(action(actionType.DO_RESEND_VERIFICATION_EMAIL_FAIL, error.response))
            })
    }
}

export const doResetChangePassword = () => {
    return {
        type: actionType.DO_RESET_CHANGE_PASSWORD_STATE,
        payload: false,
    }
}

export const doResetStoreCustomerApplication = () => {
    return {
        type: actionType.DO_RESET_STORE_CUSTOMER_APPLICATION,
        payload: false,
    }
}

export const doResetGetInsuranceRateState = () => {
    return {
        type: actionType.DO_RESET_GET_PACAKGE_RATE_STATE,
        payload: false,
    }
}

export function action(type, payload) {
    return { type, payload }
}
