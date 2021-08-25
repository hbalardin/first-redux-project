import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

export const store = createStore(rootReducer);
