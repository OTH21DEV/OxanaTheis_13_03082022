import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducerLogin from "./login/reducerLogin";

const rootReducer = combineReducers({

    auth: reducerLogin,
    
})


//Creation de store en rajoutant en 2eme parametre applyMiddleware pour gerer asynchrone

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store