import React from "react"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App/App";
import configureStore from "../store";
import {BrowserView, MobileView} from "react-device-detect";
import MobileApp from "./MobileApp/MobileApp";


const store = configureStore()

const AppRoot = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <BrowserView>
                    <App store={store}/>
                </BrowserView>
                <MobileView>
                    <MobileApp store={store}/>
                </MobileView>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
}

export default AppRoot
