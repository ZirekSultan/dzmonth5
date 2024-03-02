import {applyMiddleware, combineReducers, createStore} from "redux";
import productReducer from "../redux/reducer/productReducer";
import busketReducer from "../redux/reducer/busketReducer";
import {thunk} from "redux-thunk";

const rootStore = combineReducers({
    productReducer,
    busketReducer
})

const store = createStore(rootStore, applyMiddleware(thunk))
export default store