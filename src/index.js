import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from "react-router-dom";

import './index.scss';

import App from './App';

import { Locale, Language }  from "./shared/utils/Languages";

const app = (locale, language) =>
    (<IntlProvider locale={locale} messages={language}>
        <App language={locale} />
    </IntlProvider>)

ReactDOM.render(
    <React.StrictMode>
        <Router>
            { app(Locale, Language) }
        </Router>
    </React.StrictMode>, document.getElementById('root')
);