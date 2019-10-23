import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import NavBar from './components/nav_bar'
import App from './app';
import React from 'react'

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <NavBar />
            <App />
        </HashRouter>
    </Provider>
);

export default Root