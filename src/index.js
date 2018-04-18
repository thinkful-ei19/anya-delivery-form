import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import createStore from './store';
import DeliveryForm from './components/delivery-form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore}>
        <DeliveryForm />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
