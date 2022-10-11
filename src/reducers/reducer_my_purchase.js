import produce from "immer"

import actionType from "../action/api_action_types"
import UIActionType from "../action/ui_action_types"

const initialState = {
    myPurchaseList: null,
    myPurchaseListPageCount: 0,
    myPurchaseDetails: null,
    qoutationPDF: null,
}

const myPurchaseReducer = produce((draft = initialState, { type, payload }) => {
    switch (type) {
        case actionType.DO_GET_MY_PURCHASE_LIST_SUCCESS:
            draft.qoutationPDF = null
            draft.myPurchaseDetails = null
            draft.myPurchaseList = payload.data.data
            draft.myPurchaseListPageCount = payload.data.page_count
            break
        case actionType.DO_GET_MY_PURCHASE_DETAILS_SUCCESS:
            draft.qoutationPDF = null
            draft.myPurchaseDetails = payload.data.data
            break
        case actionType.DO_DOWNLOAD_QUOTATION_SUCCESS:
            draft.qoutationPDF = payload.data
            break
        default:
            return draft
    }
}, initialState)

export default myPurchaseReducer
