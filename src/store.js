import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import storage from "localforage"

import rootReducer from "./reducers"
import axoisInterceptor from "src/utils/axios_interceptors"

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["insurance", "myPurchase"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
const persistor = persistStore(store)

axoisInterceptor(store)

export { store, persistor }
