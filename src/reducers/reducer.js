import { createStore, combineReducers } from 'redux';
const initialBankState = { accountBalance: 666666 };
export const accountReducer = (initialState = initialBankState.accountBalance, action) => {
    
    switch(action.type){
        case 'DEBIT':
            let newDebBal = initialState - action.amount;
            return newDebBal;
        case 'CREDIT':
            let newCredBal = initialState + (-(-action.amount));
            return newCredBal;
        default: 
            return initialState;              
    }
};
export const bankReducers = combineReducers({accountBalance: accountReducer});