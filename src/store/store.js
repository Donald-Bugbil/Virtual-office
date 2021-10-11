import {createStore } from 'redux';
import officeReducer from './officeReducer';

export const store = createStore(officeReducer);
