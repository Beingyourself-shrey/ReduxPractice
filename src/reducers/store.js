import { createStore} from 'redux';
import {bankReducers} from './reducer'

function configureStore(){
    const store = createStore(bankReducers);
    return store;
}
export const bankStore = configureStore();
