import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AuthReducer from './Auth/Reducer'
import { ProductReducer } from "./Product/Reducer";
import { CartReducr } from "./Cart/Reducer";
import { OrderReducer } from "./Order/Reducer";

const rootReducers = combineReducers({
    auth:AuthReducer,
    product:ProductReducer,
    cart:CartReducr,
    order:OrderReducer
})

const store = legacy_createStore(rootReducers,applyMiddleware(thunk));

export default store;