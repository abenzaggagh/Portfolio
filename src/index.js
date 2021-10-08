import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as RouterProvider } from "react-router-dom";

import './index.scss';

import App from './App';

import { Locale, Language }  from "./shared/utils/Languages";

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={Locale} messages={Language}>
            <RouterProvider>
                <App isAuth={true} />
            </RouterProvider>
        </IntlProvider>
    </React.StrictMode>, document.getElementById('root')
);