import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducerLogin from "./login/reducerLogin";
import reducerUser from "./user/reducerUser";

const rootReducer = combineReducers({

    authentification: reducerLogin,
    userInformation: reducerUser
    
})


//Creation de store en rajoutant en 2eme parametre applyMiddleware pour gerer asynchrone

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store