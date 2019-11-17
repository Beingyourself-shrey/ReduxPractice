import { createStore} from 'redux';
import {bankReducers} from './reducer'
const initialBankState = { accountBalance: 666666 };
function configureStore(){
    const store = createStore(bankReducers,initialBankState);
    return store;
}
export const bankStore = configureStore();
