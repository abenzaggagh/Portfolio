import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';

import Arabic from './lang/ar.json';
import French from './lang/fr.json';
import English from './lang/en.json';
import { IntlProvider } from 'react-intl';

const language = navigator.language.split(/[-_]/)[0]; 

let lang;
switch (language) {
    case 'en':
        lang = English;
        break;
    case 'fr':
        lang = French;
        break;
    case 'ar':
        lang = Arabic;
        break;
    default:
        lang = English;
}

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale ={language} messages={lang}>
            <App />
        </IntlProvider>
    </React.StrictMode>, document.getElementById('root')
);