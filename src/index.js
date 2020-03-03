import Application from './application';
import {Provider} from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import store from "./store/index";

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

