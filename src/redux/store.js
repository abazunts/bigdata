import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginReducer";
import filterReducer from "./filterReducer";


const reducers = combineReducers({
    loginPage: loginReducer,
    filterPage: filterReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;