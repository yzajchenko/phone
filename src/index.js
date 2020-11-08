import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/';
import PhoneStoreServices from './services/phoneStore-services';
import {PhoneStoreServicesProvider} from './components/phoneStore-services-context/';
import store from './store';

const phoneStoreServices = new PhoneStoreServices();

ReactDom.render(
    <Provider store={store}>
        <PhoneStoreServicesProvider value = {phoneStoreServices}>
            <App/>
        </PhoneStoreServicesProvider>
    </Provider>,
 document.getElementById('root'));
