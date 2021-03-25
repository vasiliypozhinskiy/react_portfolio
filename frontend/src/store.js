import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import appReducer from "./Components/App/app-reducer";
import thunk from "redux-thunk"
import photoStackReducer from "./Components/App/MainContent/Index/PhotoStack/photoStack-reducer";

const configureStore = () => {
    let reducers = combineReducers({
        appReducer,
        photoStackReducer
    })

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers, composeEnhancers(
        applyMiddleware(thunk)
    ))
}

export default configureStore
