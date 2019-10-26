import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/store";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';
import common_en from "./translations/en/common.json";
import './resources/less/styles.less'
import 'react-table/react-table.css'
import './index.css';

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'en',
    resources: {
        en: {
            common: common_en
        }
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next} initialLanguage={'en'}>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </I18nextProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


