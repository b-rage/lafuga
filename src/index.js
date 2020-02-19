import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css';
import  firebaseConfig  from './firebase-config';
import { FirebaseAppProvider } from 'reactfire'

ReactDOM.render((
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={'conectando...'}>
        <HashRouter>
            <App />
        </HashRouter>
        </Suspense>
    </FirebaseAppProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
