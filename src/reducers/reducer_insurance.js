import produce from "immer"

import apiActionType from "src/action/api_action_types"
import uiActionType from "src/action/ui_action_types"

const initialState = {
    insurances: null,
    insuranceDetailsForm: null,
    selectedInsurance: null,
    packageRateDetails: null,
    insuranceRateSuccess: false,
    insuranceRateFail: false,
    insuranceRateErrorMessage: null,
    sales: null,
    success: false,
    fail: false,
    storeCustomerApplicationErrorMessage: null,
    storeCustomerApplicationResponse: null,
    watchInsuranceCoverage: null,
    isSpouse: null,
}

const packageReducer = produce((draft = initialState, { type, payload }) => {
    switch (type) {
        case uiActionType.SET_INSURANCE_DETAILS:
            draft.insuranceDetailsForm = payload
            break
        case apiActionType.DO_GET_INSURANCES_SUCCESS:
            draft.insurances = payload.data.packageList
            break
        case apiActionType.DO_GET_INSURANCES_FAIL:
            draft.insurances = null
            break
        case uiActionType.SET_SELECTED_INSURANCE:
            draft.selectedInsurance = payload
            break
        case apiActionType.DO_GET_INSURANCE_RATE_SUCCESS:
            draft.packageRateDetails = payload.data.package
            draft.insuranceRateSuccess = true
            draft.insuranceRateFail = false
            draft.insuranceRateErrorMessage = null
            break
        case apiActionType.DO_GET_INSURANCE_RATE_FAIL:
            draft.packageRateDetails = null
            draft.insuranceRateSuccess = false
            draft.insuranceRateFail = true
            draft.insuranceRateErrorMessage = payload.data.errorMessage
            break
        case apiActionType.DO_GET_SALES_USER_DETAIL_SUCCESS:
            draft.sales = payload.data.sales
            break
        case apiActionType.DO_RESET_SALES_STATE:
        case apiActionType.DO_GET_SALES_USER_DETAIL_FAIL:
            draft.sales = null
            break
        case apiActionType.DO_STORE_CUSTOMER_APPLICATION_SUCCESS:
            draft.success = true
            draft.fail = false
            draft.storeCustomerApplicationResponse = payload.data
            break
        case apiActionType.DO_STORE_CUSTOMER_APPLICATION_FAIL:
            draft.success = false
            draft.fail = true
            draft.storeCustomerApplicationErrorMessage = payload.data.errorMessage
            break
        case apiActionType.DO_UPDATE_CUSTOMER_APPLICATION_SUCCESS:
            draft.success = true
            draft.fail = false
            draft.storeCustomerApplicationResponse = payload.data
            break
        case apiActionType.DO_UPDATE_CUSTOMER_APPLICATION_FAIL:
            draft.success = false
            draft.fail = true
            draft.storeCustomerApplicationErrorMessage = payload.data.errorMessage
            break
        case apiActionType.DO_RESET_STORE_CUSTOMER_APPLICATION:
            draft.success = payload
            draft.fail = payload
            draft.storeCustomerApplicationErrorMessage = null
            break
        case apiActionType.DO_RESET_GET_PACAKGE_RATE_STATE:
            draft.insuranceRateSuccess = payload
            draft.insuranceRateFail = payload
            break
        case uiActionType.SET_INSURANCE_RATE_DETAILS:
            draft.packageRateDetails = payload
            break
        case uiActionType.SET_INSURANCES:
            draft.insurances = payload
            break
        case uiActionType.SET_WATCH_INSURANCE_COVERAGE:
            draft.watchInsuranceCoverage = payload
            break
        case uiActionType.SET_IS_SPOUSE:
            draft.isSpouse = payload
            break
        default:
            return draft
    }
}, initialState)

export default packageReducer
