import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";

import './index.scss';

import App from './App';

import Arabic from './lang/ar.json';
import French from './lang/fr.json';
import English from './lang/en.json';
import { IntlProvider } from 'react-intl';

const app = (locale, language) => {
    return (<IntlProvider locale ={locale} messages={language}>
                <App language={locale} />
            </IntlProvider>);
}

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/en">
                    { app('en', English) }
                </Route>
                <Route path="/fr">
                    { app('fr', French) }
                </Route>
                <Route path="/ar">
                    { app('ar', Arabic) }
                </Route>
                <Route path="/">
                    { app('en', English) }
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>, document.getElementById('root')
);