import {createEpicMiddleware} from 'redux-observable';
import rootEpic from './epics/root';
import rootReducer from './reducers';
import {applyMiddleware, createStore} from 'redux';

const middleware = createEpicMiddleware();


const store = createStore(
  rootReducer,
  applyMiddleware(middleware)
);

middleware.run(rootEpic);

export default store;
