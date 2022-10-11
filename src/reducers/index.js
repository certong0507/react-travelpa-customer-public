import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"

import core from "./reducer_core"
import insurance from "./reducer_insurance"
import forgotPassword from "./reducer_forgot_password"
import userProfile from "./reducer_user_profile"
import myPurchase from "./reducer_my_purchase"

const appReducer = combineReducers({
    core,
    insurance,
    forgotPassword,
    userProfile,
    myPurchase
})

const rootReducer = (state, action) => {
    if (action.type === "USER_LOGOUT") {
        Object.keys(state).forEach((key) => {
            storage.removeItem(`persist:${key}`)
        })
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer
