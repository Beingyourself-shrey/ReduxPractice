import { combineReducers } from 'redux';
const initialBankState = { accountBalance: 666666, user: { userName: "", password: "" } };

export const userReader = (initialState = initialBankState.user, action) => {

    switch (action.type) {
        case 'USER_LOGIN':
            let obj={}
            obj.userName=action.userName;
            obj.password=action.password;
            
            return obj;
        case 'ADMIN_LOGIN':
            let newCredBal = initialState + (-(-action.amount));
            return newCredBal;
        default:
            return initialState;
    }
};

export const accountReducer = (initialState = initialBankState.accountBalance, action) => {

    switch (action.type) {
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
export const bankReducers = combineReducers({ accountBalance: accountReducer, userReader: userReader });